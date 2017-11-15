var StellarData  = require('../data/stellarData')
var GenConfig = require('./generator-config')
var Random = require('random-js')
var r = new Random()
var options = {}

var generator = {
  generateStarSystem: (galaxyId, name, optionData) => {
    GenConfig.initConfig(optionData)
    var nature = getSystemNature()
    var starSystem = {}
    var primaryStar = {}
    var starData = getStarType(null)
    var hasNearCompanion = false
    var coords = {x:0,y:0,z:0}
    var generatorDetails = {}
    options = optionData

    starSystem.galaxyId = galaxyId
    starSystem.name = name
    starSystem.coords = coords
    starSystem.starCount = nature
    starSystem.nature = StellarData.nature[nature]

    starData = getPrimarySize(starData)
    starData = validateStar(starData)

    primaryStar.typeCode = starData.starType
    primaryStar.sizeCode = starData.starSize
    primaryStar.classification = starData.classification
    primaryStar.starKeyCode = starData.starType + starData.classification + starData.starSize
    primaryStar.primary = true
    primaryStar.orbitType = StellarData.starOrbitType.Primary
    starSystem.primaryStarKeyCode = primaryStar.typeCode + primaryStar.classification + primaryStar.sizeCode

    starSystem.primaryStar = primaryStar
    generatorDetails.starList = []

    if (nature > 1) {
        primaryStar.suffix = StellarData.latinSuffix[1]
    }
    generatorDetails.starList.push(primaryStar)
    primaryStar.companions = []
    // for a star system that is not solitary
    for (var i=1; i<nature; i++) {
        // these companion stars are primary companions
        var companionStar = {}

        var companionData = getStarType(primaryStar)
        companionData = getCompanionSize(companionData, starData.sizeDM)
        companionData = validateStar(companionData)

        companionStar.typeCode = companionData.starType
        companionStar.sizeCode = companionData.starSize
        companionStar.classification = companionData.classification
        companionStar.starKeyCode = companionData.starType + companionData.classification + companionData.starSize
        companionStar.suffix = StellarData.latinSuffix[i+1]

        var companionOrbit = getCompanionOrbit(companionData.orbitsDM, hasNearCompanion)
        if (companionOrbit.orbitType === 'Near') {
            hasNearCompanion = true
        }

        primaryStar.companions.push({ starId: companionStar._id, companionOrbit: companionOrbit.orbitType, orbit: companionOrbit.orbit})
        starSystem.companionStars.push({
            companionStar: companionStar,
            companionOrbit: companionOrbit.orbitType, 
            name: starSystem.name + ' ' + StellarData.latinSuffix[i+1],
            isdOuterCompanion: true
        })
        generatorDetails.starList.push(companionStar)

        // if the compantion type is far, roll for an extended companion
        if (companionOrbit.orbitType === StellarData.starOrbitType.Far) {
            var extendedCompanion = getExtendedCompanion(companionData)
            if (extendedCompanion) {
            // we have an extended companion, process it
            extendedCompanion.suffix = StellarData.latinSuffix[1 + starSystem.starCount++]

            companionStar.companions.push({ starId: extendedCompanion._id, companionOrbit: extendedCompanion.orbitType, orbit: extendedCompanion.orbit, isOuterCompanion: true})
            starSystem.companionStars.push({
                starId: extendedCompanion._id, 
                companionType: 
                extendedCompanion.orbitType, 
                name: starSystem.name + ' ' + extendedCompanion.suffix,
                companionStarType: extendedCompanion.typeCode,
                companionStarSize: extendedCompanion.sizeCode,
                companionStarClassification: extendedCompanion.classification,
                isOuterCompanion: true
            })

            generatorDetails.starList.push(extendedCompanion)
            }
        }
    }
    generatorDetails.dateCreated = new Date()
    generatorDetails.createdBy = 'system'

    starSystem.generatorDetails = generatorDetails
    // console.log(JSON.stringify(starSystem, null, 2))
    // console.log('Star System Genration complete')

    return starSystem
    }
}

function getExtendedCompanion(starData) {
    var companionData = {}
    if (getSystemNature() > 1) {
        companionData = getStarType(starData)
        companionData = getCompanionSize(companionData, starData.sizeDM)

        var companionOrbit = getCompanionOrbit(companionData.orbitsDM - 4, false)

        var newCompanion = {}
        newCompanion.typeCode = companionData.starType
        newCompanion.sizeCode = companionData.starSize
        newCompanion.classification = companionData.classification
        newCompanion.starKeyCode = companionData.starType + companionData.classification + companionData.starSize
        newCompanion.orbit = companionOrbit.orbit
        newCompanion.orbitType = companionOrbit.orbitType + " Extended"
        newCompanion.isOuterCompanion = true

        return newCompanion
    } else {
        return null
    }
}

function getCompanionOrbit(orbitsDM, hasNearCompanion) {
    var roll = twoD6() + orbitsDM
    var result = {}

    if (hasNearCompanion) {
        result.orbitType = StellarData.starOrbitType.Far
    } else if (roll < 4) {
        result.orbitType = StellarData.starOrbitType.Close
    } else if (roll < 7) {
        result.orbitType = StellarData.starOrbitType.Near
        result.orbit = roll - 3
    } else if (roll < 12) {
        result.orbitType = StellarData.starOrbitType.Near
        result.orbit = roll - 3 + d6()
    } else {
        result.orbitType = StellarData.starOrbitType.Far
    }

    return result
}

function validateStar(star) {
    // if the star is size IV and K5 to M9 then made the star size V
    if (star.starSize === StellarData.starSize.IV &&
        ((star.starType === StellarData.starType.K && star.classification >= 5) || star.starType === StellarData.starType.M)) {
        star.starSize = StellarData.starSize.V
    } else if (star.starSize === StellarData.starSize.VI &&
        (star.starType === StellarData.starType.B || star.starType === StellarData.starType.A ||
        (star.starType === StellarData.starType.F && star.classification < 5))) {
        star.starSize = StellarData.starSize.V
    }

    return star
}

// function getCoords(index, callback) {
//   var coords
//   Coords.find({ id: index}, function getData(err, data) {
//     if (err) {
//       console.log('Unable to find system coordinates for index:', index)
//     }
//     coords = data
//   })
//   process.nextTick(function () {
//     return callback(coords)
//   })
// }

function getSystemNature() {
    if (GenConfig.getSystemNature() !== null) {
        return GenConfig.getSystemNature()
    }
    console.log('should not get here')
    var roll = twoD6()

    if (roll < 8) {
        return 1
    } else if (roll < 12) {
        return 2
    } else {
        return 3
    }
}

function getStarType(primaryType) {
    if (GenConfig.getStarType) {
        return GenConfig.getStarType(primaryType)
    }
    var roll = r.integer(1, 10000)
    var result = {}

    if (primaryType) {
        // companion star
        roll = roll + primaryType.typeDM
        result.typeDM = 0
        if (roll < 14) {
        result.typeDM = 10
        result.starType = StellarData.starType.B
        } else if (roll < 75) {
        result.typeDM = 60
        result.starType = StellarData.starType.A
        } else if (roll < 476) {
        result.typeDM = 300
        result.starType = StellarData.starType.F
        } else if (roll < 1333) {
        result.typeDM = 760
        result.starType = StellarData.starType.G
        } else if (roll < 2843) {
        result.typeDM = 1010
        result.starType = StellarData.starType.K
        } else {
        result.typeDM = 5000
        result.starType = StellarData.starType.M
        }

    } else {
        // primary star
        if (roll < 14) {
        result.typeDM = 10
        result.starType = StellarData.starType.B
        } else if (roll < 53) {
        result.typeDM = 60
        result.starType = StellarData.starType.A
        } else if (roll < 476) {
        result.typeDM = 300
        result.starType = StellarData.starType.F
        } else if (roll < 1160) {
        result.typeDM = 760
        result.starType = StellarData.starType.G
        } else if (roll < 2943) {
        result.typeDM = 1010
        result.starType = StellarData.starType.K
        } else {
        result.typeDM = 5000
        result.starType = StellarData.starType.M
        }
    }
    if (result.starType === StellarData.starType.O) {
        result.classification = r.integer(5,9)
    } else {
        result.classification = r.integer(0,9)
    }
    
    return result  
}

function getPrimarySize(primaryStar) {
    var roll = r.integer(1, 1000)
    var result = primaryStar
    console.log(JSON.stringify(GenConfig.options, null, 2))
    if (options.sol) {
        roll = 950
    }

    if (roll < 10) {
        result.sizeDM = 0
        result.starSize = StellarData.starSize.Ia
        result.orbitsDM = 8
    } else if (roll < 30) {
        result.sizeDM = 1
        result.starSize = StellarData.starSize.Ib
        result.orbitsDM = 8
    } else if (roll < 60) {
        result.sizeDM = 2
        result.starSize = StellarData.starSize.II
        result.orbitsDM = 8
    } else if (roll < 120) {
        result.sizeDM = 3
        result.starSize = StellarData.starSize.III
        result.orbitsDM = 4
    } else if (roll < 400) {
        result.sizeDM = 4
        result.starSize = StellarData.starSize.IV
        result.orbitsDM = 0
    } else if (roll < 910) {
        result.sizeDM = 4 + d6() // 5-10
        result.starSize = StellarData.starSize.V
        result.orbitsDM = 0
    } else if (roll < 970) {
        result.sizeDM = 11
        result.starSize = StellarData.starSize.VI
        result.orbitsDM = 0
    } else {
        result.sizeDM = 12
        result.starSize = StellarData.starSize.D
        result.orbitsDM = 0
    }

    if (primaryStar.starType === StellarData.starType.M ||
        primaryStar.starType === StellarData.starType.K) {
        result.orbitsDM += -4
    }

    return result
}

function getCompanionSize(star, sizeDM) {
    var roll = twoD6()
    var subRoll = r.integer(1, 100)
    roll += sizeDM
    
    var result = star
    if (roll === 2 && subRoll < 10) {
        result.sizeDM = 0
        result.starSize = StellarData.starSize.Ia
        result.orbitsDM = 8
    } else if (roll === 2 && subRoll < 30) {
        result.sizeDM = 1
        result.starSize = StellarData.starSize.Ib
        result.orbitsDM = 8
    } else if (roll === 2) {
        result.sizeDM = 2
        result.starSize = StellarData.starSize.II
        result.orbitsDM = 8
    } else if (roll === 3) {
        result.sizeDM = 3
        result.starSize = StellarData.starSize.III
        result.orbitsDM = 4
    } else if (roll === 4) {
        result.sizeDM = 4
        result.starSize = StellarData.starSize.IV
        result.orbitsDM = 0
    } else if (roll < 9) {
        result.sizeDM = 4 + d6() // 5-10
        result.starSize = StellarData.starSize.V
        result.orbitsDM = 0
    } else if (roll < 11) {
        result.sizeDM = 11
        result.starSize = StellarData.starSize.VI
        result.orbitsDM = 0
    } else {
        result.sizeDM = 12
        result.starSize = StellarData.starSize.D
        result.orbitsDM = 0
    }

    return result
}

function twoD6() {
    return r.die(6) + r.die(6)
}

function d6() {
    return r.die(6)
}

export default generator