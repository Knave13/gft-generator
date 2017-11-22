import fileAstronomics from './fileAstronomics'

var radiuskm = [
    29.9,
    59.8,
    104.7,
    149.6,
    239.3,
    418.9,
    777.9,
    1495.9,
    2932.0,
    5804.0,
    11548.0,
    23038.0,
    46016.0,
    91972.0,
    183885.0,
    367711.0,
    735363.0,
    1470666.0,
    2941274.0,
    5882488.0,
    99,
    99,
    99
]
var radiusau = [
    .2,
    .4,
    .7,
    1.0,
    1.6,
    2.8,
    5.2,
    10.0,
    19.6,
    38.8,
    77.2,
    154.0,
    307.6,
    614.8,
    1229.2,
    2458.0,
    4915.5,
    9830.7,
    19660.9,
    39321.4,
    78643.0,
    157286,
    314572
]
var cloudiness = {
    "None": 0,
    "0": 0,
    "10": 0,
    "20": 10,
    "30": 10,
    "40": 20,
    "50": 30,
    "60": 40,
    "70": 50,
    "80": 60,
    "90": 70,
    "100": 70
}
var greenhouse = [
    0,
    0,
    0,
    0,
    5,
    5,
    10,
    10,
    15,
    15,
    10,
    0,
    0,
    15,
    10,
    0
]
var albedo = {
    "Veldt": 0.1,
    "Desert": 0.2,
    "Water": 0.02,
    "Ice": 0.85,
    "Snow": 0.85,
    "DirtyIce": 0.55,
    "Mountain": 0.15,
    "Clouds": 0.4
}
// var axialTilt = [0, 1.7, 1.6, 1.5, 1.3, 1.2, 1.0, 1.24, 1.16, 1.09, 1.0 ] var
//              0, 17   34    50   66   77   87   93   98   100

var stellarRadiusConstant = 6371.0
var stellarPeriodConstant = 365.24
var suffixes = ['Greek', 'Latin', 'Numeric', 'Roman']
var greekSuffixes = [
    "",
    "Alpha",
    "Beta",
    "Gamma",
    "Delta",
    "Epsilon",
    "Zeta",
    "Theta",
    "Iota",
    "Kappa",
    "Lambda"
]
var latinSuffixes = [
    "",
    "Primus",
    "Secundus",
    "Tertius",
    "Quartus",
    "Quintus",
    "Sextus",
    "Septimus",
    "Octavus",
    "Nonus"
]
var numericSuffixes = [
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
]
var romanSuffixes = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
]
var systemNature = [
    "Empty",
    "Solitary",
    "Binary",
    "Trinary",
    "Quadinary",
    "Quintinary",
    "Sextinary",
    "Septinary",
    "Octinary",
    "Noninary"
]
var atmosphereNames = [
    "None",
    "Trace",
    "Very thin, tainted",
    "Very thin",
    "Thin, tainted",
    "Thin",
    "Standard",
    "Standard, tainted",
    "Dense",
    "Dense, tainted",
    "Exotic",
    "Corrosive",
    "Insidious",
    "Dense, high",
    "Ellipsoid",
    "Thin, low"
]

var StarSize = Object.freeze({
    "Ia": "Ia",
    "Ib": "Ib",
    "II": "II",
    "III": "III",
    "IV": "IV",
    "V": "V",
    "VI": "VI",
    "D": "D"
})

var StarSizeOrder = Object.freeze({
    "Ia": "1",
    "Ib": "2",
    "II": "3",
    "III": "4",
    "IV": "5",
    "V": "6",
    "VI": "7",
    "D": "8"
})

var StarSizeName = Object.freeze({
    "Ia": "Bright Supergiant",
    "Ib": "Weak Supergiant",
    "II": "Bright Giant",
    "III": "Giant",
    "IV": "Subgiant",
    "V": "Main Sequence",
    "VI": "Subdwarf",
    "D": "Dwarf"
})

var StarType = Object.freeze({
    "O": "O",
    "B": "B",
    "A": "A",
    "F": "F",
    "G": "G",
    "K": "K",
    "M": "M"
})

var StarTypeOrder = Object.freeze({
    "O": "1",
    "B": "2",
    "A": "3",
    "F": "4",
    "G": "5",
    "K": "6",
    "M": "7"
})

var StarTypeColor = Object.freeze({
    "O": "White",
    "B": "Light Blue",
    "A": "Blue",
    "F": "Green",
    "G": "Yellow",
    "K": "Orange",
    "M": "Red"
})

var StarOrbitType = Object.freeze({"Primary": "Primary", "Close": "Close", "Near": "Near", "Far": "Far", "Extended": "Extended"})

var Zone = Object.freeze({"Unavailable": 0, "Inner": 1, "Habitable": 2, "Outer": 3})

var ZoneCode = Object.freeze({"-": 0, "I": 1, "H": 2, "O": 3})

var OrbitType = Object.freeze({
    "Star": "Star",
    "Empty": "Empty",
    "Unavailable": "Unavailable",
    "Planet": "Planet",
    "GasGiant": "Gas Giant",
    "Asteroid": "Asteroid Belt",
    "Planetoid": "Planetoid",
    "Satellite": "Moon",
    "Ring": "Ring"
})

var stellarData = {
    planetaryData: (diameter, orbit, density, stellarMass, orbitalOffset, callback) => {
        var orbitalDistance = radiusau[orbit] + orbitalOffset
        var data = {
            "radius": diameter / 2.0,
            "density": density,
            "volume": Math.pow(diameter / stellarRadiusConstant, 3),
            "mass": density * Math.pow(diameter / stellarRadiusConstant, 3),
            "area": Math.pow(diameter / stellarRadiusConstant, 2),
            "gravity": (density * Math.pow(diameter / stellarRadiusConstant, 3)) * ((stellarRadiusConstant * stellarRadiusConstant) / (diameter * diameter)),
            "period": Math.sqrt(Math.pow(orbitalDistance, 3) / stellarMass),
            "periodDays": Math.sqrt(Math.pow(orbitalDistance, 3) / stellarMass) * stellarPeriodConstant
        }

        callback(data)
    },
    stellarDataByKey: (starKey) => {
        return getStellarDataByKey(starKey)
    },
    stellarData: (typeCode, classification, sizeCode, callback) => {
        var key = typeCode + classification + sizeCode
        return getStellarDataByKey(key)
    },
    stellarSize: (size, callback) => {
        callback(StarSize[size])
    },
    stellarSizeName: (size, callback) => {
        callback(StarSizeName[size])
    },
    stellarType: (color, callback) => {
        callback(StarType[color])
    },
    stellarTypeColor: (color, callback) => {
        callback(StarTypeColor[color])
    },
    suffix: (suffixType, order, callback) => {
        var output = greekSuffixes
        if (suffixType === suffixes[0]) {
            output = greekSuffixes
        } else if (suffixType === suffixes[1]) {
            output = latinSuffixes
        } else if (suffixType === suffixes[2]) {
            output = numericSuffixes
        } else if (suffixType === suffixes[3]) {
            output = romanSuffixes
        }
        callback(output[order])
    },
    starOrbitType: StarOrbitType,
    starType: StarType,
    starTypeOrder: StarTypeOrder,
    starTypeColor: StarTypeColor,
    starSize: StarSize,
    starSizeOrder: StarSizeOrder,
    starSizeName: StarSizeName,
    latinSuffix: latinSuffixes,
    greekSuffix: greekSuffixes,
    numericSuffix: numericSuffixes,
    romanSuffix: romanSuffixes,
    suffixTypes: suffixes,
    atmospheres: atmosphereNames,
    orbitType: OrbitType,
    nature: systemNature,
    radiusau: radiusau,
    radiuskm: radiuskm,
    cloudiness: cloudiness,
    greenhouse: greenhouse,
    albedo: albedo,
    kelvin: -273.15,
    stellarRadiusConstant: stellarRadiusConstant,
    stellarPeriodConstant: stellarPeriodConstant,
    planetaryZone: (zone, callback) => {
        if (!isNaN(zone)) {
            callback(Zone[zone])
        } else {
            // if they pass the code
            callback(ZoneCode[zone])
        }
    }
}

function getStellarDataByKey(key) {
    return fileAstronomics.findByKey(key)
}

export default stellarData
