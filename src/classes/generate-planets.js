var StellarData  = require('../data/stellarData')
var GenConfig = require('./generator-config')
var Random = require('random-js')
var r = new Random()
var options = {}

var generator = {
    generatePlanetaryBodies: (parentStar, optionData, callback) => {
        GenConfig.initConfig(optionData)
        options = optionData
        StellarData.stellarData(parentStar.typeCode, parentStar.classification, parentStar.sizeCode, (stellarData) => {
            // generate an empty array of orbits, orbit count is random but must be as big as the fathest near companion star orbit
        var maxOrbits = getMaximumOrbits(parentStar.typeCode, parentStar.sizeCode)

        // initialize zones
        var orbitData = initializeOrbits(stellarData.zones, maxOrbits, parentStar.companions)
        var systemData = {
            parentStar: parentStar,
            stellarData: stellarData,
            maxOrbits: maxOrbits,
            orbitData: orbitData        
        }
        // assign gas giants H or O
        for (var i = 0; i < systemData.orbitData.gasGiants; i++) {
            var orbit = pickAvailableOrbit(['H', 'O'], systemData)
            if (options.sol) {
                orbit = i + 6
            }

            if (orbit !== -1) {
                systemData.orbitData.orbits[orbit].available = false
                systemData.orbitData.availableOrbits--
                systemData.orbitData.orbits[orbit].orbitType = StellarData.orbitType.GasGiant
            }
        }

        // assign planetoid belt inside of gas giants then random
        for (var i = 0; i < systemData.orbitData.asteroidBelts; i++) {
            var orbit = findAsteroidBeltInsideGasGiant(systemData)
            if (orbit === -1) {
                orbit = pickAvailableOrbit(['I', 'H', 'O'], systemData)
            }
            if (options.sol) {
                orbit = 5
            }
            
            if (orbit !== -1) {
                systemData.orbitData.orbits[orbit].available = false
                systemData.orbitData.availableOrbits--
                systemData.orbitData.orbits[orbit].orbitType = StellarData.orbitType.Asteroid
            }
        }

        // empty orbits
        for (var i = 0; i < systemData.orbitData.emptyOrbits; i++) {
            var orbit = pickAvailableOrbit(['I', 'H', 'O'], systemData, true)
            if (options.sol) {
                orbit = 0
            }

            if (orbit !== -1) {
                systemData.orbitData.orbits[orbit].available = false
                systemData.orbitData.availableOrbits--
                systemData.orbitData.orbits[orbit].orbitType = StellarData.orbitType.Empty
            }
        }

        // assign camptured planets
        for (var i = 0; i < systemData.orbitData.capturedPlanets; i++) {
            var orbit = pickAvailableOrbit(['I', 'H', 'O'], systemData)

            if (orbit !== -1) {
                systemData.orbitData.orbits[orbit].available = false
                systemData.orbitData.availableOrbits--
                systemData.orbitData.orbits[orbit].orbitType = StellarData.orbitType.Planet
                systemData.orbitData.orbits[orbit].orbitOffset = r.integer(0, 10) - 5 
            }
        }

        // assign planets
        for (var i = 0; i < systemData.maxOrbits; i++) {
            if (systemData.orbitData.orbits[i].available) {
                systemData.orbitData.orbits[i].available = false
                systemData.orbitData.availableOrbits--
                systemData.orbitData.orbits[i].orbitType = StellarData.orbitType.Planet
            }
        }

        systemData = processOrbits(systemData)

        //console.log(JSON.stringify(systemData, null, 2))
        callback(systemData)
        })
    }, 
    generateMoons: function(options, callback) {
        var parentStar = options.parentStar
        var parentPlanet = options.parentPlanet

        callback({error: "Not implemented"})
    }
}

function processOrbits(systemData) {
    // walk the orbit list and process each
    for(var i = 0; i < systemData.orbitData.orbits.length; i++) {
        var orbit = systemData.orbitData.orbits[i]
        var orbitDetails = {}
        var moons = 0

        switch(orbit.orbitType) {
            case StellarData.orbitType.GasGiant:
                if (options.sol) {
                    if (i == 6) {
                        orbitDetails.size = 'Large'
                        orbitDetails.radius = 69911
                        orbitDetails.moons = 27
                        orbitDetails.temperature = 'Hot'
                        orbitDetails.physics = {
                            periodDays : 0,
                            gravity : 0
                        }
                    } else if (i == 7) {
                        orbitDetails.size = 'Large'
                        orbitDetails.radius = 58232
                        orbitDetails.moons = 18
                        orbitDetails.temperature = 'Hot'
                        orbitDetails.physics = {
                            periodDays : 0,
                            gravity : 0
                        }
                    } else if (i == 8) {
                        orbitDetails.size = 'Small'
                        orbitDetails.radius = 24622
                        orbitDetails.moons = 7
                        orbitDetails.temperature = 'Cold'
                        orbitDetails.physics = {
                            periodDays : 0,
                            gravity : 0
                        }
                    } else if (i == 9) {
                        orbitDetails.size = 'Small'
                        orbitDetails.radius = 25362
                        orbitDetails.moons = 4
                        orbitDetails.temperature = 'Cold'
                        orbitDetails.physics = {
                            periodDays : 0,
                            gravity : 0
                        }
                    }
                } else {
                    if (flip()) {
                        orbitDetails.size = 'Large'
                        orbitDetails.radius = r.integer(60, 200) * 1000
                        moons = twoD6()
                    }
                    else {
                    orbitDetails.size = 'Small'
                    orbitDetails.radius = r.integer(20, 60) * 1000
                    moons = twoD6() - 4
                    moons = moons < 0 ? 0 : moons
                    }
                    orbitDetails.moons = moons
                    orbitDetails.rings = 'TBD'
                    orbitDetails.temperature = flip() ? 'Hot' : 'Cold'
                    orbitDetails.physics = {
                        periodDays : 0,
                        gravity : 0
                    }
        }
                systemData.orbitData.orbits[i].details = orbitDetails
            break

            case StellarData.orbitType.Planet:
                var planetDetails = generatePlanetDetails(i, systemData.orbitData.orbits[i].orbitZoneCode, systemData.parentStar, systemData.stellarData)
                systemData.orbitData.orbits[i].details = planetDetails
            break
        }
    }
    //console.log(JSON.stringify(systemData, null, 2))
    return systemData
}

function generatePlanetDetails(orbit, zoneCode, starData, stellarData) {
    var planetDetails = {}
    var roll
    var modifiers = generatePlanetModifiers(orbit, zoneCode, starData)
    var density = 1.0

    roll = twoD6() + modifiers.sizeMod
    if (options.sol) {
        roll = 1
    }
    if (roll <= 0) {
        planetDetails.size = "Small"
        planetDetails.radius = r.integer(150, 250)
        planetDetails.moons = 'None'
        planetDetails.rings = 'None'
        planetDetails.atmosphere = StellarData.atmospheres[0]
        planetDetails.atmoCode = 0
        planetDetails.hydropgraphics = 'None'
        planetDetails.hydroPercentage = 0
        density = 1.0 + r.integer(-2, 2) / 10
    }
    else {
        var moons = d6() - 3
        var atmo = twoD6() - 7 + roll + modifiers.atmoMod
        atmo = atmo < 0 ? 0 : atmo
        planetDetails.size = roll
        planetDetails.radius = roll * 1600 + r.integer(-10, 10) * 80 // 1600 * size +/- 800 in km
        
        if (options.sol) {
            if (orbit == 1) {
                moons = 0
                atmo = 0
                planetDetails.radius = 2440
            } else if (orbit == 2) {
                moons = 0
                atmo = 11
                planetDetails.radius = 6052
            } else if (orbit == 3) {
                moons = 1
                atmo = 6
                planetDetails.radius = 6371
            } else if (orbit == 4) {
                moons = 2
                atmo = 3
                planetDetails.radius = 3390
            }
        }

        planetDetails.moons = moons > 0 ? moons : 'None'
        planetDetails.rings = 'None'
        planetDetails.atmosphere = StellarData.atmospheres[atmo]
        planetDetails.atmoCode = atmo
        if (atmo === 2 || atmo === 4 || atmo === 7 || atmo === 9) {
            planetDetails.tainted = true
        }
        if (roll === 1) {
            planetDetails.hydrographics = 'None'
            planetDetails.hydroPercentage = 0
        }
        else {
            var atmoMod = atmo <= 1 || atmo >= 10 ? -4 : 0
            var hydroRoll = twoD6() - 7 + modifiers.hydroMod + roll + atmoMod
            hydroRoll = hydroRoll < 0 ? 0 : (hydroRoll > 10 ? 10 : hydroRoll)
            if (options.sol) {
                if (orbit == 3) {
                    hydroRoll = 7
                } else {
                    hydroRoll = 0
                }
            }
            planetDetails.hydrographics = hydroRoll === 0 ? 'None' : (hydroRoll * 10) + '%'
            planetDetails.hydroPercentage = hydroRoll * 10
        }
        if (options.sol) {
            if (orbit == 1) {
                density = 0.982
            } else if (orbit == 2) {
                density = 0.945
            } else if (orbit == 3) {
            density = 1.0
            } else if (orbit == 4) {
                density = 0.709
            }
        } else {
            //TODO Make sure the random number is a float
            density = 1.0 + r.integer(-20, 20) / 100
        }
    }
    planetDetails.physics = calculatePlanetaryDetails(planetDetails.radius, orbit, density, stellarData.mass, 0)
    planetDetails.albedoData = calculateAlbedo(orbit, stellarData.luminosity, planetDetails)
    planetDetails.temperature = calculateTemperature(orbit, stellarData.luminosity, planetDetails.albedoData.greenhouse, planetDetails.albedoData.albedo)
    //console.log(JSON.stringify(planetDetails, null, 2))

    return planetDetails
}

function generatePlanetModifiers(orbit, zoneCode, starData) {
    var modifiers = {}
    var sizeMod = 0
    var atmoMod = 0
    var hydroMod = 0

    if (orbit === 0) {
        sizeMod -= 5
    }
    else if (orbit === 1) {
        sizeMod -= 4
    }
    else if (orbit === 2) {
        sizeMod -= 2
    }

    if (starData.typeCode === StellarData.starType.M) {
        sizeMod -= 2
    }

    if (zoneCode === 'I') {
        atmoMod -= 2
        hydroMod -= 99 // hydro is guaranteed to be 0 in the Inner zones
    }
    else if (zoneCode === 'O') {
        atmoMod -= 4
        hydroMod -= 4
    } 
    else {
        atmoMod = 0
        hydroMod = 0
    }

    modifiers.sizeMod = sizeMod
    modifiers.atmoMod = atmoMod
    modifiers.hydroMod = hydroMod

    return modifiers
}

function pickAvailableOrbit(filter, systemData, includeEmpty) {
    var orbit = r.integer(1, systemData.orbitData.availableOrbits)
    var useEmpty = includeEmpty || false
    var count = 0
    for (var i = 0; i < systemData.maxOrbits; i++) {
        // empty orbits can use existing Empty orbits
        if (systemData.orbitData.orbits[i].available || (useEmpty && systemData.orbitData.orbits[i].orbitType == StellarData.orbitType.Empty)) {
            count++
            if (count === orbit) {
                if (findInArray(systemData.orbitData.orbits[i].orbitZoneCode, filter)) {
                return i
                }
                else {
                count--
                }
            }
        }
    }

    return -1
}

function findAsteroidBeltInsideGasGiant(systemData) {
    // place the asteroid belt inside a gas giant starting from the sun and moving outware
    // no need to look at orbit 0 since nothing can be inside of that orbit
    for (var i = 1; i < systemData.maxOrbits; i++) {
        if (systemData.orbitData.orbits[i].orbitType === "GasGiant" &&
            systemData.orbitData.orbits[i - 1].available) {
        return i
        }
    }

    return -1
}

function findInArray(val, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === val) {
        return true
        }
    }
    return false
}

function calculatePlanetaryDetails(radius, orbit, density, stellarMass, orbitalOffset) {
    var orbitalDistance = StellarData.radiusau[orbit] + orbitalOffset
    var gravity = (density * Math.pow(radius / StellarData.stellarRadiusConstant, 3)) * ((StellarData.stellarRadiusConstant * StellarData.stellarRadiusConstant) / (radius * radius))
    var data = {
        "radius": radius,
        "density": density,
        "volume": Math.pow(radius / StellarData.stellarRadiusConstant, 3),
        "mass": density * Math.pow(radius / StellarData.stellarRadiusConstant, 3),
        "area": Math.pow(radius / StellarData.stellarRadiusConstant, 2),
        "gravity": gravity,
        "escapeVelocidy": gravity * 11.208,
        "period": Math.sqrt(Math.pow(orbitalDistance, 3) / stellarMass),
        "periodDays": Math.sqrt(Math.pow(orbitalDistance, 3) / stellarMass) * StellarData.stellarPeriodConstant
    }

    return data
}

function calculateTemperature(orbit, luminosity, greenhouse, albedo) {
    var kelvin = 374.025
    var temp = kelvin * greenhouse * (1.0 - albedo) * Math.pow(luminosity, 0.25) / StellarData.radiusau[orbit] + StellarData.kelvin

    return temp
}

function calculateAlbedo(orbit, luminosity, planetData) {
    var data = {}
    var surface = {}
    
    data.cloudiness = StellarData.cloudiness[planetData.hydroPercentage.toString()]
    if (planetData.atmoCode === 14) {
        data.cloudiness /= 2
    }
    else if (planetData.atmoCode >= 10) {
        data.cloudiness += 40
        data.cloudiness = data.cloudiness > 100 ? 100 : data.cloudiness
    }
    else if (planetData.atmoCode <= 3) {
        data.cloudiness = data.cloudiness > 20 ? 20 : data.cloudiness
    }
    data.cloudiness = data.cloudiness / 100
    data.cloudMod = 1.0 - data.cloudiness
    data.radiusau = StellarData.radiusau[orbit]
    data.greenhouse = 1.0 + calculateGreenhouse(planetData.atmoCode) / 100.0
    surface.land = (100 - planetData.hydroPercentage) / 100.0
    surface.desertMod = surface.land // use the unmodified land percentage to calculate desert
    if (planetData.hydroPercentage > 0) {
        surface.water = planetData.hydroPercentage / 100.0
        surface.ice = surface.land * 0.1
    }
    else {
        surface.water = 0.0
        surface.ice = 0.0
    }
    surface.land -= surface.ice / 2.0
    surface.water -= surface.ice / 2.0
    surface.tectonic = r.integer(0, 30)/ 100.0 // percentage of the land that is mountanous
    surface.mountains = surface.land * surface.tectonic
    surface.desert = (surface.land - surface.mountains) * surface.desertMod
    surface.veldt = surface.land - surface.mountains - surface.desert
    surface.checksum = surface.water + surface.ice + surface.mountains + surface.desert + surface.veldt
    data.albedo = (data.cloudiness * StellarData.albedo["Clouds"])
                + (surface.veldt * data.cloudMod * StellarData.albedo["Veldt"])
                + (surface.mountains * data.cloudMod * StellarData.albedo["Mountain"])
                + (surface.desert * data.cloudMod * StellarData.albedo["Desert"])
                + (surface.ice * data.cloudMod * StellarData.albedo["Clouds"])
                + (surface.water * data.cloudMod * StellarData.albedo["Ice"])
    // console.log((data.cloudiness * StellarData.albedo["Clouds"]),
    //             (surface.veldt * data.cloudMod * StellarData.albedo["Veldt"]),
    //             (surface.mountains * data.cloudMod * StellarData.albedo["Mountain"]),
    //             (surface.desert * data.cloudMod * StellarData.albedo["Desert"]),
    //             (surface.ice * data.cloudMod * StellarData.albedo["Clouds"]),
    //             (surface.water * data.cloudMod * StellarData.albedo["Ice"]))

    data.surface = surface

    return data
}

function calculateGreenhouse(atmoCode) {
    // calculate the greenhouse effect based on the specified atmosphere code
    // Result is a percentage increase +100%, 1.0 - 1.7
    //console.log('AtmoCode', atmoCode, 'greenhouse', StellarData.greenhouse[atmoCode])
    var greenhouse = StellarData.greenhouse[atmoCode]
    if (atmoCode === 10) {
        greenhouse += r.integer(10, 60)
    }
    else if (atmoCode === 11 || atmoCode === 12) {
        greenhouse += r.integer(20, 120)
    } 
    greenhouse += 100

    return greenhouse / 100.0
}

function initializeOrbits(zones, maxOrbits, companions, orbitData) {
    var orbitData = {}
    var zoneArray = zones.split('')
    var orbits = []
    var nearCompanionOrbit
    var adjustedMaxOrbits = maxOrbits

    for (var i = 0; i < maxOrbits; i++) {
        var zone = zoneArray[i] || 'O'
        if (zone === 'x' || zone === '-') {
            orbits.push({orbit: i, orbitZone: "Unavailable", orbitZoneCode: "U", available: false, orbitType: StellarData.orbitType.Unavailable})
        } 
        else if (zone === 'I') {
            orbits.push({orbit: i, orbitZone: "Inner", orbitZoneCode: "I", available: true})
        } 
        else if (zone === 'H') {
            orbits.push({orbit: i, orbitZone: "Habitable", orbitZoneCode: "H", available: true})
        } 
        else if (zone === 'O') {
            orbits.push({orbit: i, orbitZone: "Outer", orbitZoneCode: "O", available: true})
        }
    }

    // we need to find a place for each of the near companions
    // all orbits between the companion star orbit and half the orbits inside of the star
    // are unavailable. Two orbits outside of the companion must be marked as unavailable
    for (var i = 0; i < companions.length; i++) {
        if (companions[i].companionOrbit === 'Near' ||
            companions[i].companionOrbit === 'Near Extended') {
            var companionOrbit = companions[i].orbit
            //console.log('we have a near companion to play with, original maxOrbits', maxOrbits)
            if (companionOrbit >= orbits.length) {
                for (var j = orbits.length; j <= companionOrbit; j++) {
                    var zone = zoneArray[j] || 'O'
                    if (zone === 'x' || zone === '-') {
                        orbits.push({orbit: j, orbitZone: "Unavailable", available: false, orbitType: StellarData.orbitType.Empty})
                    } 
                    else if (zone === 'I') {
                        orbits.push({orbit: j, orbitZone: "Inner", available: false, orbitType: StellarData.orbitType.Empty})
                    } 
                    else if (zone === 'H') {
                        orbits.push({orbit: j, orbitZone: "Habitable", available: false, orbitType: StellarData.orbitType.Empty})
                    } 
                    else if (zone === 'O') {
                        orbits.push({orbit: j, orbitZone: "Outer", available: false, orbitType: StellarData.orbitType.Empty})
                    }
                }
            }

            // the orbits collections should not include room for the companion star
            // we need to clear out the inside and outside orbits, as well as place
            // the star at it's assigned orbit
            orbits[companionOrbit].available = false
            orbits[companionOrbit].orbitType = StellarData.orbitType.Star
            if (orbits[companionOrbit + 1]) {
                orbits[companionOrbit + 1].available = false
                orbits[companionOrbit + 1].orbitType = StellarData.orbitType.Empty
            }
            if (orbits[companionOrbit + 2]) {
                orbits[companionOrbit + 2].available = false
                orbits[companionOrbit + 2].orbitType = StellarData.orbitType.Empty
            }

            var startOrbit = Math.floor(companionOrbit / 2)
            var endOrbit = companionOrbit
            for (var j = startOrbit; j < endOrbit; j++) {
                orbits[j].available = false
                orbits[j].orbitType = StellarData.orbitType.Empty
            }
        }    
    }

    var availableCount = 0
    for (var i = 0; i < orbits.length; i++) {
        if (orbits[i].available) {
            availableCount++
        }
    }
    orbitData = getSystemProperties(maxOrbits, availableCount)

    orbitData.finalOrbits = orbits.length
    orbitData.orbits = orbits
    
    return orbitData
}

function getSystemProperties(maxOrbits, availableOrbits) {
    var output = {}

    output.maxOrbits = maxOrbits
    output.availableOrbits = availableOrbits
    output.remainingOrbits = availableOrbits
    
    output.gasGiants = getGasGiants(output)
    output.remainingOrbits = output.remainingOrbits - output.gasGiants

    output.emptyOrbits = getEmptyOrbits(output)
    output.remainingOrbits = output.remainingOrbits - output.emptyOrbits

    output.capturedPlanets = getCapturedPlanets(output)
    output.remainingOrbits = output.remainingOrbits - output.capturedPlanets

    output.asteroidBelts = getAsteroidBelts(output)
    output.remainingOrbits = output.remainingOrbits - output.asteroidBelts

    return output
}

function getMaximumOrbits (starType, starSize) {
    var roll = twoD6()
    if (options.sol) {
        return 10
    }

    if (starSize == StellarData.starSize.III) {
        roll += 4
    } else if (starSize == StellarData.starSize.Ia ||
                starSize == StellarData.starSize.Ib ||
                starSize == StellarData.starSize.II) {
        roll += 8
    }
    if (starType == StellarData.starType.M) {
        roll += -4
    } else if (starType == StellarData.starType.K) {
        roll += -2
    }
    if (roll < 0) {
        roll = 0
    }

    return roll
}

function getEmptyOrbits (systemData) {
    var roll = d6()
    var result = 0
    if (options.sol) {
        return 1
    }

    if (roll > 4) {
        roll = d6()
        if (roll > 3) {
        result = 3
        }
        else if (roll > 2) {
        result = 2
        }
        else {
        result = 1
        }
        //console.log('Empty Orbits:', result, 'Remaining Orbits:', systemData.remainingOrbits)
    }
    if (result > systemData.remainingOrbits) {
        result = systemData.remainingOrbits
    }
    
    return result
}

function getCapturedPlanets (systemData) {
    var roll = d6()
    var result = 0
    if (options.sol) {
        return 0
    }

    if (roll > 4) {
        roll = d6()

        if (roll > 4) {
        result = 3
        }
        else if (roll > 2) {
        result = 2
        }
        else {
        result = 1
        }
    }
    if (result > systemData.remainingOrbits) {
        result = systemData.remainingOrbits
    }

    return result
}

function getGasGiants (systemData) {
    var roll = twoD6()
    var result = 0
    if (options.sol) {
        return 4
    }

    if (roll < 10) {
        roll = twoD6()

        if (roll > 10) {
        result = 5
        }
        else if (roll > 7) {
        result = 4
        }
        else if (roll > 5) {
        result = 3
        }
        else if (roll > 3) {
        result = 2
        }
        else {
        result = 1
        }
    }
    if (result > systemData.remainingOrbits) {
        result = systemData.remainingOrbits
    }

    return result
}

function getAsteroidBelts (systemData) {
    var roll = twoD6() - systemData.gasGiants
    var result = 0
    if (options.sol) {
        return 1
    }

    if (roll < 7) {
        roll = twoD6()

        if (roll > 6) {
        result = 1
        }
        else if (roll > 0) {
        result = 2
        }
        else {
        result = 1
        }
    }
    if (result > systemData.remainingOrbits) {
        result = systemData.remainingOrbits
    }
    
    return result
    }

    function twoD6() {
    return r.die(6) + r.die(6)
    }

    function d6() {
    return r.die(6)
    }

    function flip() {
    return r.bool()
}

module.exports = generator