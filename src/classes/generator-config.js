var StellarData  = require('../data/stellarData')
var Random = require('random-js')
var r = new Random()
var options = {}

function getSystemNatureOverride() {
    if (options.nature) {
        return options.nature
    } else {
        return 1
    }
}

function getStarTypeOverride(primaryType) {
    var roll = r.integer(1, 10000)
    var result = {}

    if (options.sol) {
        roll = 2500 // force G Type
    }

    // ignore primary star since this override assumes a solitary system
    if (roll < 64) {
        result.typeDM = 10
        result.starType = StellarData.starType.B
    } else if (roll < 223) {
        result.typeDM = 60
        result.starType = StellarData.starType.A
    } else if (roll < 1876) {
        result.typeDM = 300
        result.starType = StellarData.starType.F
    } else if (roll < 3160) {
        result.typeDM = 760
        result.starType = StellarData.starType.G
    } else if (roll < 5643) {
        result.typeDM = 1010
        result.starType = StellarData.starType.K
    } else {
        result.typeDM = 5000
        result.starType = StellarData.starType.M
    }

    if (options.sol) {
        result.classification = 2
    } else if (result.starType === StellarData.starType.O) {
        result.classification = r.integer(5,9)
    } else {
        result.classification = r.integer(0,9)
    }
  
    return result  
}

var generatorConfig = {
    initConfig: (optionData) => {
        options = optionData
    },
    options: options,
    getSystemNature: () => {
        return getSystemNatureOverride()
    },
    getStarType: (primaryType) => {
        return getStarTypeOverride(primaryType)
    }
}

module.exports = generatorConfig