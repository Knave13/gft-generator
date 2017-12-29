import StellarData from '../data/stellarData'
import GenConfig from './generator-config'
import Random from 'random-js'
var r = new Random()
var options = {}

var generator = {
    generatePlanetaryBodies: (name, parentStar, optionData, callback) => {
        GenConfig.initConfig(optionData)
        options = optionData
        StellarData.stellarData(parentStar.typeCode, parentStar.classification, parentStar.sizeCode, (stellarData) => {
            // generate an empty array of orbits, orbit count is random but must be as big
            // as the fathest near companion star orbit
            let maxOrbits = getMaximumOrbits(parentStar.typeCode, parentStar.sizeCode)
            // initialize zones
            let orbitData = initializeOrbits(stellarData.zones, maxOrbits, parentStar.companions)
            let systemData = {
                parentStar: parentStar,
                stellarData: stellarData,
                maxOrbits: maxOrbits,
                orbitData: orbitData
            }
            // assign gas giants H or O
            for (let i = 0; i < systemData.orbitData.gasGiants; i++) {
                let orbit = pickAvailableOrbit([
                    'H', 'O'
                ], systemData)
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
            for (let i = 0; i < systemData.orbitData.asteroidBelts; i++) {
                let orbit = findAsteroidBeltInsideGasGiant(systemData)
                if (orbit === -1) {
                    orbit = pickAvailableOrbit([
                        'I', 'H', 'O'
                    ], systemData)
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
            for (let i = 0; i < systemData.orbitData.emptyOrbits; i++) {
                // reduce the probablity of an empty orbit in the habitable zone
                let zones = ['I', 'O']
                if (r.flip) {
                    zones.push('H')
                }
                let orbit = pickAvailableOrbit(zones, systemData, true)
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
            for (let i = 0; i < systemData.orbitData.capturedPlanets; i++) {
                let orbit = pickAvailableOrbit([
                    'I', 'H', 'O'
                ], systemData)

                if (orbit !== -1) {
                    systemData.orbitData.orbits[orbit].available = false
                    systemData.orbitData.availableOrbits-- 
                    systemData.orbitData.orbits[orbit].orbitType = StellarData.orbitType.Planet
                    systemData.orbitData.orbits[orbit].orbitOffset = r.integer(0, 10) - 5
                }
            }

            // assign planets
            for (let i = 0; i < systemData.maxOrbits; i++) {
                if (systemData.orbitData.orbits[i].available) {
                    systemData.orbitData.orbits[i].available = false
                    systemData.orbitData.availableOrbits-- 
                    systemData.orbitData.orbits[i].orbitType = StellarData.orbitType.Planet
                }
            }

            // this should get called after the gas giants and planetary details are generated
            // need numbers not text for things like orbits, atmo, moons, rings, etc.
            systemData = generatePlanetaryBodyDetails(name, systemData)

            callback(systemData)
        })
    },
    generateMoons: function (planetData, optionData, callback) {
        let stellarData = planetData.stellarData
        for (let i = 0; i < planetData.maxOrbits; i++) {
            let planet = planetData.orbitData.orbits[i]
            let moonChar = 'a'
            let moonCollection = []
            let zoneCode = stellarData.zones[i]
            let sizeModifier = 0
            let atmoModifier = 0
            let hydroModifier = 0
            if (zoneCode === 'I') {
                atmoModifier = -4
                hydroModifier = -2
            } else if (zoneCode === 'O') {
                atmoModifier = -4
                hydroModifier = -4
            }
            if (planet.details && planet.details.moonCount) {
                let orbitCollection = {}
                for (let j = 0; j < planet.details.moonCount; j++) {
                    let size = 0
                    let moonData = {
                        name: planet.name + moonChar
                    }
                    let isGasGiant = false
                    // Size
                    if (planet.orbitType === StellarData.orbitType.Planet) {
                        size = planet.details.size - d6()
                    } else if (planet.orbitType === StellarData.orbitType.GasGiant) {
                        isGasGiant = true
                        if (planet.details.size === 'Small') {
                            size = twoD6() - 6
                        } else {
                            size = twoD6() - 4
                        }
                    }
                    if (size < 0) {
                        moonData.size = 'Small'
                        moonData.radius = r.integer(150, 250)
                        moonData.orbit = getAvailableSatelliteOrbit(orbitCollection, isGasGiant)
                        orbitCollection[moonData.orbit] = j
                    } else if (size === 0) {
                        moonData.size = 'Ring'
                        moonData.radius = r.integer(150, 250)
                        planetData.orbitData.orbits[i].ringCount++
                        moonData.orbit = planetData.orbitData.orbits[i].ringCount
                        orbitCollection[moonData.orbit] = j
                    } else {
                        moonData.size = size * 1600 + r.integer(-10, 10) * 80
                        sizeModifier = size
                        moonData.radius = size * 1600 + r.integer(-10, 10) * 80
                        moonData.orbit = getAvailableSatelliteOrbit(orbitCollection, isGasGiant)
                        orbitCollection[moonData.orbit] = j
                    }
                    // Atmosphere
                    let atmo= twoD6() - 7 + (size > 0 ? size : 0) + atmoModifier
                    if (size <= 0 || atmo < 0) {
                        atmo = 0
                    }
                    moonData.atmosphere = StellarData.atmospheres[atmo]
                    moonData.atmoCode = atmo
                    // Hydrographics
                    let hydro = twoD6() - 7 + sizeModifier + hydroModifier
                    if (size < 1) {
                        hydro = 0
                    } else if (size === 1 || size >= 10) {
                        hydro += -4
                    }
                    if (hydro < 0) {
                        hydro = 0
                    }
                    moonData.hydroPercentage = hydro * 10
                    moonData.hydrographics = hydro === 0 ? 'None' : moonData.hydroPercentage + '%'
                    moonData.density = 1.0 + r.integer(-20, 20) / 100

                    moonData.physics = calculateMoonDetails(moonData.radius, i, moonData.density, stellarData.mass, 0)
                    moonData.albedoData = calculateAlbedo(i, stellarData.luminosity, moonData)
                    moonData.temperature = calculateTemperature(i, stellarData.luminosity, moonData.albedoData.greenhouse, moonData.albedoData.albedo)
                
                    moonCollection.push(moonData)
                    moonChar = nextChar(moonChar)
                }
                if (moonCollection.length > 0) {
                    planetData.orbitData.orbits[i].moons = moonCollection
                }
            }
        }
        callback(planetData)
    }
}

function getAvailableSatelliteOrbit(orbitCollection, isGasGiant) {
    let valid = false
    let orbit = ''

    while (!valid) {
        let distanceRoll = twoD6()
        let orbitRoll = twoD6()

        if (distanceRoll < 8) {
            // close (4 to )
            orbit = (orbitRoll + 2) + ''
        } else if (distanceRoll > 11 && isGasGiant) {
            // far
            orbit = (orbitRoll * 5 + 5) + ''
        } else {
            // extreme
            orbit = (orbitRoll * 25 + 25) + ''
        }
        if (!orbitCollection[orbit]) {
            valid = true
        }
    }

    return orbit
}

function generatePlanetaryBodyDetails(name, systemData) {
    let beltCount = 'A'
    let planetCount = 0
    // walk the orbit list and process each
    for (let i = 0; i < systemData.orbitData.orbits.length; i++) {
        let orbit = systemData.orbitData.orbits[i]
        let details = {}
        let moons = 0

        switch (orbit.orbitType) {
            case StellarData.orbitType.GasGiant:
                planetCount++
                if (options.sol) {
                    if (i === 6) {
                        details.size = 'Large'
                        details.radius = 69911
                        details.moonCount = 27
                        details.temperature = 'Hot'
                        details.physics = {
                            periodDays: 0,
                            gravity: 0
                        }
                    } else if (i === 7) {
                        details.size = 'Large'
                        details.radius = 58232
                        details.moonCount = 18
                        details.temperature = 'Hot'
                        details.physics = {
                            periodDays: 0,
                            gravity: 0
                        }
                    } else if (i === 8) {
                        details.size = 'Small'
                        details.radius = 24622
                        details.moonCount = 7
                        details.temperature = 'Cold'
                        details.physics = {
                            periodDays: 0,
                            gravity: 0
                        }
                    } else if (i === 9) {
                        details.size = 'Small'
                        details.radius = 25362
                        details.moonCount = 4
                        details.temperature = 'Cold'
                        details.physics = {
                            periodDays: 0,
                            gravity: 0
                        }
                    }
                } else {
                    if (flip()) {
                        details.size = 'Large'
                        details.radius = r.integer(60, 200) * 1000
                        moons = twoD6() + 5
                    } else {
                        details.size = 'Small'
                        details.radius = r.integer(20, 60) * 1000
                        moons = twoD6()
                    }
                    details.moonCount = moons < 1 ? 0 : moons
                    details.ringCount = 0
                    details.temperature = flip()
                        ? 'Hot'
                        : 'Cold'
                    details.physics = {
                        periodDays: 0,
                        gravity: 0
                    }
                }
                systemData.orbitData.orbits[i].name = name + ' ' + planetCount
                systemData.orbitData.orbits[i].details = details
                break

            case StellarData.orbitType.Planet:
            case StellarData.orbitType.Planetoid:
                planetCount++
                details = generatePlanetDetails(i, systemData.orbitData.orbits[i].orbitZoneCode, systemData.parentStar, systemData.stellarData)
                systemData.orbitData.orbits[i].name = name + ' ' + planetCount
                systemData.orbitData.orbits[i].details = details
                break
            
            case StellarData.orbitType.Asteroid:
                // details = {
                //     name: name + ' Belt ' + beltCount,
                //     minerals: flip() ? 'Rich' : 'Carbonacious',
                //     density: flip() ? 'Dense' : 'Light'
                // }
                systemData.orbitData.orbits[i].name = name + ' Belt ' + beltCount
                beltCount = nextChar(beltCount)
                //systemData.orbitData.orbits[i].details = details
                break
            
            default:
                // details = {
                //     name: ''
                // }
                systemData.orbitData.orbits[i].name = ''
                //systemData.orbitData.orbits[i].details = details
        }
    }
    return systemData
}

function generatePlanetDetails(orbit, zoneCode, starData, stellarData) {
    let planetDetails = {}
    let roll
    let modifiers = generatePlanetModifiers(orbit, zoneCode, starData)
    let density = 1.0

    roll = twoD6() + modifiers.sizeMod
    if (options.sol) {
        roll = 1
    }
    if (roll <= 0) {
        planetDetails.size = "Small"
        planetDetails.radius = r.integer(150, 250)
        planetDetails.moonCount = 0
        planetDetails.ringCount = 0
        planetDetails.atmosphere = StellarData.atmospheres[0]
        planetDetails.atmoCode = 0
        planetDetails.hydropgraphics = 'None'
        planetDetails.hydroPercentage = 0
        density = 1.0 + r.integer(-2, 2) / 10
    } else {
        let moons = d6() - 3
        if (roll >= 10) {
            moons += 3
        }
        let atmo = twoD6() - 7 + roll + modifiers.atmoMod
        atmo = atmo < 0
            ? 0
            : atmo
        planetDetails.size = roll
        planetDetails.radius = roll * 1600 + r.integer(-10, 10) * 80 // 1600 * size +/- 800 in km

        if (options.sol) {
            if (orbit === 1) {
                moons = 0
                atmo = 0
                planetDetails.radius = 2440
            } else if (orbit === 2) {
                moons = 0
                atmo = 11
                planetDetails.radius = 6052
            } else if (orbit === 3) {
                moons = 1
                atmo = 6
                planetDetails.radius = 6371
            } else if (orbit === 4) {
                moons = 2
                atmo = 3
                planetDetails.radius = 3390
            }
        }

        planetDetails.moonCount = moons < 1 ? 0 : moons
        planetDetails.ringCount = 0
        planetDetails.atmosphere = StellarData.atmospheres[atmo]
        planetDetails.atmoCode = atmo
        if (atmo === 2 || atmo === 4 || atmo === 7 || atmo === 9) {
            planetDetails.tainted = true
        }
        if (roll === 1) {
            planetDetails.hydrographics = 'None'
            planetDetails.hydroPercentage = 0
        } else {
            let atmoMod = atmo <= 1 || atmo >= 10
                ? -4
                : 0
            let hydroRoll = twoD6() - 7 + modifiers.hydroMod + roll + atmoMod
            hydroRoll = hydroRoll < 0
                ? 0
                : (hydroRoll > 10
                    ? 10
                    : hydroRoll)
            if (options.sol) {
                if (orbit === 3) {
                    hydroRoll = 7
                } else {
                    hydroRoll = 0
                }
            }
            planetDetails.hydrographics = hydroRoll === 0
                ? 'None'
                : (hydroRoll * 10) + '%'
            planetDetails.hydroPercentage = hydroRoll * 10
        }
        if (options.sol) {
            if (orbit === 1) {
                density = 0.982
            } else if (orbit === 2) {
                density = 0.945
            } else if (orbit === 3) {
                density = 1.0
            } else if (orbit === 4) {
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

    return planetDetails
}

function generatePlanetModifiers(orbit, zoneCode, starData) {
    let modifiers = {}
    let sizeMod = 0
    let atmoMod = 0
    let hydroMod = 0

    if (orbit === 0) {
        sizeMod -= 5
    } else if (orbit === 1) {
        sizeMod -= 4
    } else if (orbit === 2) {
        sizeMod -= 2
    }

    if (starData.typeCode === StellarData.starType.M) {
        sizeMod -= 2
    }

    if (zoneCode === 'I') {
        atmoMod -= 2
        hydroMod -= 99 // hydro is guaranteed to be 0 in the Inner zones
    } else if (zoneCode === 'O') {
        atmoMod -= 4
        hydroMod -= 4
    } else {
        atmoMod = 0
        hydroMod = 0
    }

    modifiers.sizeMod = sizeMod
    modifiers.atmoMod = atmoMod
    modifiers.hydroMod = hydroMod

    return modifiers
}

function pickAvailableOrbit(filter, systemData, includeEmpty) {
    let orbit = r.integer(1, systemData.orbitData.availableOrbits)
    let useEmpty = includeEmpty || false
    let count = 0
    for (let i = 0; i < systemData.maxOrbits; i++) {
        // empty orbits can use existing Empty orbits
        if (systemData.orbitData.orbits[i].available || (useEmpty && systemData.orbitData.orbits[i].orbitType === StellarData.orbitType.Empty)) {
            count++ 
            if (count === orbit) {
                if (findInArray(systemData.orbitData.orbits[i].orbitZoneCode, filter)) {
                    return i
                } else {
                    count--
                }
            }
        }
    }

    return -1
}

function findAsteroidBeltInsideGasGiant(systemData) {
    // place the asteroid belt inside a gas giant starting from the sun and moving
    // outware no need to look at orbit 0 since nothing can be inside of that orbit
    for (let i = 1; i < systemData.maxOrbits; i++) {
        if (systemData.orbitData.orbits[i].orbitType === "GasGiant" && systemData.orbitData.orbits[i - 1].available) {
            return i
        }
    }

    return -1
}

function findInArray(val, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) {
            return true
        }
    }
    return false
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
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

function calculateMoonDetails(radius, orbit, density, planetRadius, planetMass, orbitalOffset) {
    var orbitalDistance = orbit * planetRadius
    var gravity = (density * Math.pow(radius / StellarData.stellarRadiusConstant, 3)) * ((StellarData.stellarRadiusConstant * StellarData.stellarRadiusConstant) / (radius * radius))
    var data = {
        "radius": radius,
        "density": density,
        "volume": Math.pow(radius / StellarData.stellarRadiusConstant, 3),
        "mass": density * Math.pow(radius / StellarData.stellarRadiusConstant, 3),
        "area": Math.pow(radius / StellarData.stellarRadiusConstant, 2),
        "gravity": gravity,
        "escapeVelocidy": gravity * 11.208,
        "period": Math.sqrt(Math.pow(orbitalDistance, 3) / planetMass),
        "periodDays": Math.sqrt(Math.pow(orbitalDistance, 3) / planetMass) * StellarData.stellarPeriodConstant
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

    data.cloudiness = StellarData.cloudiness[
        planetData
            .hydroPercentage
            .toString()
    ]
    if (planetData.atmoCode === 14) {
        data.cloudiness /= 2
    } else if (planetData.atmoCode >= 10) {
        data.cloudiness += 40
        data.cloudiness = data.cloudiness > 100
            ? 100
            : data.cloudiness
    } else if (planetData.atmoCode <= 3) {
        data.cloudiness = data.cloudiness > 20
            ? 20
            : data.cloudiness
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
    } else {
        surface.water = 0.0
        surface.ice = 0.0
    }
    surface.land -= surface.ice / 2.0
    surface.water -= surface.ice / 2.0
    surface.tectonic = r.integer(0, 30) / 100.0 // percentage of the land that is mountanous
    surface.mountains = surface.land * surface.tectonic
    surface.desert = (surface.land - surface.mountains) * surface.desertMod
    surface.veldt = surface.land - surface.mountains - surface.desert
    surface.checksum = surface.water + surface.ice + surface.mountains + surface.desert + surface.veldt
    data.albedo = (data.cloudiness * StellarData.albedo["Clouds"]) + (surface.veldt * data.cloudMod * StellarData.albedo["Veldt"]) + (surface.mountains * data.cloudMod * StellarData.albedo["Mountain"]) + (surface.desert * data.cloudMod * StellarData.albedo["Desert"]) + (surface.ice * data.cloudMod * StellarData.albedo["Clouds"]) + (surface.water * data.cloudMod * StellarData.albedo["Ice"])
    // console.log((data.cloudiness * StellarData.albedo["Clouds"]),
    // (surface.veldt * data.cloudMod * StellarData.albedo["Veldt"]),
    // (surface.mountains * data.cloudMod * StellarData.albedo["Mountain"]),
    //     (surface.desert * data.cloudMod * StellarData.albedo["Desert"]),
    //    (surface.ice * data.cloudMod * StellarData.albedo["Clouds"]),
    // (surface.water * data.cloudMod * StellarData.albedo["Ice"]))

    data.surface = surface

    return data
}

function calculateGreenhouse(atmoCode) {
    // calculate the greenhouse effect based on the specified atmosphere code Result
    // is a percentage increase +100%, 1.0 - 1.7 console.log('AtmoCode', atmoCode,
    // 'greenhouse', StellarData.greenhouse[atmoCode])
    var greenhouse = StellarData.greenhouse[atmoCode]
    if (atmoCode === 10) {
        greenhouse += r.integer(10, 60)
    } else if (atmoCode === 11 || atmoCode === 12) {
        greenhouse += r.integer(20, 120)
    }
    greenhouse += 100

    return greenhouse / 100.0
}

function initializeOrbits(zones, maxOrbits, companions) {
    let orbitData = {}
    let zoneArray = zones.split('')
    let orbits = []

    for (let i = 0; i < maxOrbits; i++) {
        let zone = zoneArray[i] || 'O'
        if (zone === 'x' || zone === '-') {
            orbits.push({orbit: i, orbitZone: "Unavailable", orbitZoneCode: "U", available: false, orbitType: StellarData.orbitType.Unavailable})
        } else if (zone === 'I') {
            orbits.push({orbit: i, orbitZone: "Inner", orbitZoneCode: "I", available: true})
        } else if (zone === 'H') {
            orbits.push({orbit: i, orbitZone: "Habitable", orbitZoneCode: "H", available: true})
        } else if (zone === 'O') {
            orbits.push({orbit: i, orbitZone: "Outer", orbitZoneCode: "O", available: true})
        }
    }

    // we need to find a place for each of the near companions all orbits between
    // the companion star orbit and half the orbits inside of the star are
    // unavailable. Two orbits outside of the companion must be marked as unavailable
    for (let i = 0; i < companions.length; i++) {
        if (companions[i].companionOrbit === 'Near' || companions[i].companionOrbit === 'Near Extended') {
            let companionOrbit = companions[i].orbit
            // console.log('we have a near companion to play with, original maxOrbits',
            // maxOrbits)
            if (companionOrbit >= orbits.length) {
                for (let j = orbits.length; j <= companionOrbit; j++) {
                    let zone = zoneArray[j] || 'O'
                    if (zone === 'x' || zone === '-') {
                        orbits.push({orbit: j, orbitZone: "Unavailable", available: false, orbitType: StellarData.orbitType.Empty})
                    } else if (zone === 'I') {
                        orbits.push({orbit: j, orbitZone: "Inner", available: false, orbitType: StellarData.orbitType.Empty})
                    } else if (zone === 'H') {
                        orbits.push({orbit: j, orbitZone: "Habitable", available: false, orbitType: StellarData.orbitType.Empty})
                    } else if (zone === 'O') {
                        orbits.push({orbit: j, orbitZone: "Outer", available: false, orbitType: StellarData.orbitType.Empty})
                    }
                }
            }

            // the orbits collections should not include room for the companion star we need
            // to clear out the inside and outside orbits, as well as place the star at it's
            // assigned orbit
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

            let startOrbit = Math.floor(companionOrbit / 2)
            let endOrbit = companionOrbit
            for (let j = startOrbit; j < endOrbit; j++) {
                orbits[j].available = false
                orbits[j].orbitType = StellarData.orbitType.Empty
            }
        }
    }

    let availableCount = 0
    for (let i = 0; i < orbits.length; i++) {
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
    let output = {}

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

function getMaximumOrbits(starType, starSize) {
    let roll = twoD6()
    if (options.sol) {
        return 10
    }

    if (starSize === StellarData.starSize.III) {
        roll += 4
    } else if (starSize === StellarData.starSize.Ia || starSize === StellarData.starSize.Ib || starSize === StellarData.starSize.II) {
        roll += 8
    }
    if (starType === StellarData.starType.M) {
        roll += -4
    } else if (starType === StellarData.starType.K) {
        roll += -2
    }
    if (roll <= 0) {
        roll = 1
    }

    return roll
}

function getEmptyOrbits(systemData) {
    let roll = d6()
    let result = 0
    if (options.sol) {
        return 1
    }

    if (roll > 4) {
        roll = d6()
        if (roll > 3) {
            result = 3
        } else if (roll > 2) {
            result = 2
        } else {
            result = 1
        }
    }
    if (result > systemData.remainingOrbits) {
        result = systemData.remainingOrbits
    }

    return result
}

function getCapturedPlanets(systemData) {
    let roll = d6()
    let result = 0
    if (options.sol) {
        return 0
    }

    if (roll > 4) {
        roll = d6()

        if (roll > 4) {
            result = 3
        } else if (roll > 2) {
            result = 2
        } else {
            result = 1
        }
    }
    if (result > systemData.remainingOrbits) {
        result = systemData.remainingOrbits
    }

    return result
}

function getGasGiants(systemData) {
    let roll = twoD6()
    let result = 0
    if (options.sol) {
        return 4
    }

    if (roll < 10) {
        roll = twoD6()

        if (roll > 10) {
            result = 5
        } else if (roll > 7) {
            result = 4
        } else if (roll > 5) {
            result = 3
        } else if (roll > 3) {
            result = 2
        } else {
            result = 1
        }
    }
    if (result > systemData.remainingOrbits) {
        result = systemData.remainingOrbits
    }

    return result
}

function getAsteroidBelts(systemData) {
    let roll = twoD6() - systemData.gasGiants
    let result = 0
    if (options.sol) {
        return 1
    }

    if (roll < 7) {
        roll = twoD6()

        if (roll > 6) {
            result = 1
        } else if (roll > 0) {
            result = 2
        } else {
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

export default generator