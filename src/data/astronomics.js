// Use this object for testing and initializing of the Astronomical Data
var astronomics = {
    findByKey: (db, key, callback) => {
        db
            .collection('astronomics')
            .doc(key)
            .get()
            .then(doc => {
                if (doc.exists) {
                    callback(doc.data())
                } else {
                    console.log('Could not find astronomical data: ', key)
                    callback(null)
                }
            })
    },
    initializeData: (db, callback) => {
        loadData(db, (dataLoaded) => {
            callback(dataLoaded)
        })
    }
}

function loadData(db, callback) {
    let astro = db.collection('astronomics')
    astro
        .get()
        .then((data) => {
            if (data.size === 480) {
                callback(false)
            } else {
                astro
                    .doc('A0D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 0,
                        magnitude: 10.50,
                        luminosity: 0.005,
                        temperature: 14000,
                        radii: 0.017,
                        mass: 0.36,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A1D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 1,
                        magnitude: 10.81,
                        luminosity: 0.00453,
                        temperature: 13260,
                        radii: 0.0166,
                        mass: 0.366,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A2D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 2,
                        magnitude: 11.12,
                        luminosity: 0.00406,
                        temperature: 12520,
                        radii: 0.0162,
                        mass: 0.372,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A3D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 3,
                        magnitude: 11.43,
                        luminosity: 0.00359,
                        temperature: 11780,
                        radii: 0.0158,
                        mass: 0.378,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A4D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 4,
                        magnitude: 11.74,
                        luminosity: 0.00312,
                        temperature: 11040,
                        radii: 0.0154,
                        mass: 0.384,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A5D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 5,
                        magnitude: 12.05,
                        luminosity: 0.00265,
                        temperature: 10300,
                        radii: 0.015,
                        mass: 0.39,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A6D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 6,
                        magnitude: 12.36,
                        luminosity: 0.00218,
                        temperature: 9560,
                        radii: 0.0146,
                        mass: 0.396,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A7D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 7,
                        magnitude: 12.67,
                        luminosity: 0.00171,
                        temperature: 8820,
                        radii: 0.0142,
                        mass: 0.402,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A8D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 8,
                        magnitude: 12.98,
                        luminosity: 0.00124,
                        temperature: 8080,
                        radii: 0.0138,
                        mass: 0.408,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A9D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'A',
                        classification: 9,
                        magnitude: 13.29,
                        luminosity: 0.00077,
                        temperature: 7340,
                        radii: 0.0134,
                        mass: 0.414,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B0D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 0,
                        magnitude: 8.10,
                        luminosity: 0.046,
                        temperature: 25000,
                        radii: 0.018,
                        mass: 0.26,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B1D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 1,
                        magnitude: 8.34,
                        luminosity: 0.0419,
                        temperature: 23900,
                        radii: 0.0179,
                        mass: 0.27,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B2D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 2,
                        magnitude: 8.58,
                        luminosity: 0.0378,
                        temperature: 22800,
                        radii: 0.0178,
                        mass: 0.28,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B3D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 3,
                        magnitude: 8.82,
                        luminosity: 0.0337,
                        temperature: 21700,
                        radii: 0.0177,
                        mass: 0.29,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B4D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 4,
                        magnitude: 9.06,
                        luminosity: 0.0296,
                        temperature: 20600,
                        radii: 0.0176,
                        mass: 0.3,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B5D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 5,
                        magnitude: 9.30,
                        luminosity: 0.0255,
                        temperature: 19500,
                        radii: 0.0175,
                        mass: 0.31,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B6D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 6,
                        magnitude: 9.54,
                        luminosity: 0.0214,
                        temperature: 18400,
                        radii: 0.0174,
                        mass: 0.32,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B7D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 7,
                        magnitude: 9.78,
                        luminosity: 0.0173,
                        temperature: 17300,
                        radii: 0.0173,
                        mass: 0.33,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B8D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 8,
                        magnitude: 10.02,
                        luminosity: 0.0132,
                        temperature: 16200,
                        radii: 0.0172,
                        mass: 0.34,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B9D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'B',
                        classification: 9,
                        magnitude: 10.26,
                        luminosity: 0.0091,
                        temperature: 15100,
                        radii: 0.0171,
                        mass: 0.35,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F0D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 0,
                        magnitude: 13.60,
                        luminosity: 0.0003,
                        temperature: 6600,
                        radii: 0.013,
                        mass: 0.42,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F1D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 1,
                        magnitude: 13.77,
                        luminosity: 0.000276,
                        temperature: 6390,
                        radii: 0.0129,
                        mass: 0.441,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F2D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 2,
                        magnitude: 13.94,
                        luminosity: 0.000252,
                        temperature: 6180,
                        radii: 0.0128,
                        mass: 0.462,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F3D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 3,
                        magnitude: 14.11,
                        luminosity: 0.000228,
                        temperature: 5970,
                        radii: 0.0127,
                        mass: 0.483,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F4D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 4,
                        magnitude: 14.28,
                        luminosity: 0.000204,
                        temperature: 5760,
                        radii: 0.0126,
                        mass: 0.504,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F5D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 5,
                        magnitude: 14.45,
                        luminosity: 0.00018,
                        temperature: 5550,
                        radii: 0.0125,
                        mass: 0.525,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F6D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 6,
                        magnitude: 14.62,
                        luminosity: 0.000156,
                        temperature: 5340,
                        radii: 0.0124,
                        mass: 0.546,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F7D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 7,
                        magnitude: 14.79,
                        luminosity: 0.000132,
                        temperature: 5130,
                        radii: 0.0123,
                        mass: 0.567,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F8D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 8,
                        magnitude: 14.96,
                        luminosity: 0.000108,
                        temperature: 4920,
                        radii: 0.0122,
                        mass: 0.588,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F9D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'F',
                        classification: 9,
                        magnitude: 15.13,
                        luminosity: 0.000084,
                        temperature: 4710,
                        radii: 0.0121,
                        mass: 0.609,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G0D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 0,
                        magnitude: 15.30,
                        luminosity: 0.000060,
                        temperature: 4500,
                        radii: 0.012,
                        mass: 0.63,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G1D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 1,
                        magnitude: 15.33,
                        luminosity: 0.000094,
                        temperature: 4400,
                        radii: 0.0117,
                        mass: 0.65,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G2D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 2,
                        magnitude: 15.36,
                        luminosity: 0.000128,
                        temperature: 4300,
                        radii: 0.0114,
                        mass: 0.67,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G3D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 3,
                        magnitude: 15.39,
                        luminosity: 0.000162,
                        temperature: 4200,
                        radii: 0.0111,
                        mass: 0.69,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G4D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 4,
                        magnitude: 15.42,
                        luminosity: 0.000196,
                        temperature: 4100,
                        radii: 0.0108,
                        mass: 0.71,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G5D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 5,
                        magnitude: 15.45,
                        luminosity: 0.00023,
                        temperature: 4000,
                        radii: 0.0105,
                        mass: 0.73,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G6D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 6,
                        magnitude: 15.48,
                        luminosity: 0.000264,
                        temperature: 3900,
                        radii: 0.0102,
                        mass: 0.75,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G7D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 7,
                        magnitude: 15.51,
                        luminosity: 0.000298,
                        temperature: 3800,
                        radii: 0.0099,
                        mass: 0.77,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G8D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 8,
                        magnitude: 15.54,
                        luminosity: 0.000332,
                        temperature: 3700,
                        radii: 0.0096,
                        mass: 0.79,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G9D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'G',
                        classification: 9,
                        magnitude: 15.57,
                        luminosity: 0.000366,
                        temperature: 3600,
                        radii: 0.0093,
                        mass: 0.81,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K0D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 0,
                        magnitude: 15.60,
                        luminosity: 0.0004,
                        temperature: 3500,
                        radii: 0.009,
                        mass: 0.83,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K1D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 1,
                        magnitude: 15.63,
                        luminosity: 0.000363,
                        temperature: 3420,
                        radii: 0.0087,
                        mass: 0.858,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K2D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 2,
                        magnitude: 15.66,
                        luminosity: 0.000326,
                        temperature: 3340,
                        radii: 0.0084,
                        mass: 0.886,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K3D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 3,
                        magnitude: 15.69,
                        luminosity: 0.000289,
                        temperature: 3260,
                        radii: 0.0081,
                        mass: 0.914,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K4D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 4,
                        magnitude: 15.72,
                        luminosity: 0.000252,
                        temperature: 3180,
                        radii: 0.0078,
                        mass: 0.942,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K5D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 5,
                        magnitude: 15.75,
                        luminosity: 0.000215,
                        temperature: 3100,
                        radii: 0.0075,
                        mass: 0.97,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K6D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 6,
                        magnitude: 15.78,
                        luminosity: 0.000178,
                        temperature: 3020,
                        radii: 0.0072,
                        mass: 0.998,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K7D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 7,
                        magnitude: 15.81,
                        luminosity: 0.000141,
                        temperature: 2940,
                        radii: 0.0069,
                        mass: 1.026,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K8D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 8,
                        magnitude: 15.84,
                        luminosity: 0.000104,
                        temperature: 2860,
                        radii: 0.0066,
                        mass: 1.054,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K9D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'K',
                        classification: 9,
                        magnitude: 15.87,
                        luminosity: 0.000067,
                        temperature: 2780,
                        radii: 0.0063,
                        mass: 1.082,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M0D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 0,
                        magnitude: 15.9,
                        luminosity: 0.00003,
                        temperature: 2700,
                        radii: 0.006,
                        mass: 1.11,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M1D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 1,
                        magnitude: 15.9311,
                        luminosity: 0.0000289,
                        temperature: 2644.44,
                        radii: 0.00566667,
                        mass: 1.15444,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M2D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 2,
                        magnitude: 15.9622,
                        luminosity: 0.0000278,
                        temperature: 2588.89,
                        radii: 0.00533333,
                        mass: 1.19889,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M3D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 3,
                        magnitude: 15.9933,
                        luminosity: 0.0000267,
                        temperature: 2533.33,
                        radii: 0.005,
                        mass: 1.24333,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M4D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 4,
                        magnitude: 16.0244,
                        luminosity: 0.0000256,
                        temperature: 2477.78,
                        radii: 0.00466667,
                        mass: 1.28778,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M5D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 5,
                        magnitude: 16.0556,
                        luminosity: 0.0000244,
                        temperature: 2422.22,
                        radii: 0.00433333,
                        mass: 1.33222,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M6D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 6,
                        magnitude: 16.0867,
                        luminosity: 0.0000233,
                        temperature: 2366.67,
                        radii: 0.004,
                        mass: 1.37667,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M7D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 7,
                        magnitude: 16.1178,
                        luminosity: 0.0000222,
                        temperature: 2311.11,
                        radii: 0.00366667,
                        mass: 1.42111,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M8D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 8,
                        magnitude: 16.1489,
                        luminosity: 0.0000211,
                        temperature: 2255.56,
                        radii: 0.00333333,
                        mass: 1.46556,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M9D')
                    .set({
                        sizeCode: 'D',
                        typeCode: 'M',
                        classification: 9,
                        magnitude: 16.18,
                        luminosity: 0.00002,
                        temperature: 2200,
                        radii: 0.003,
                        mass: 1.51,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A0Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 0,
                        magnitude: -7.8,
                        luminosity: 107000,
                        temperature: 9000,
                        radii: 135,
                        mass: 18,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A1Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 1,
                        magnitude: -7.74,
                        luminosity: 101800,
                        temperature: 8800,
                        radii: 137.8,
                        mass: 17.4,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A2Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 2,
                        magnitude: -7.68,
                        luminosity: 96600,
                        temperature: 8600,
                        radii: 140.6,
                        mass: 16.8,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A3Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 3,
                        magnitude: -7.62,
                        luminosity: 91400,
                        temperature: 8400,
                        radii: 143.4,
                        mass: 16.2,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A4Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 4,
                        magnitude: -7.56,
                        luminosity: 86200,
                        temperature: 8200,
                        radii: 146.2,
                        mass: 15.6,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A5Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 5,
                        magnitude: -7.5,
                        luminosity: 81000,
                        temperature: 8000,
                        radii: 149,
                        mass: 15,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A6Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 6,
                        magnitude: -7.44,
                        luminosity: 77000,
                        temperature: 7780,
                        radii: 154,
                        mass: 14.6,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A7Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 7,
                        magnitude: -7.38,
                        luminosity: 73000,
                        temperature: 7560,
                        radii: 159,
                        mass: 14.2,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A8Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 8,
                        magnitude: -7.32,
                        luminosity: 69000,
                        temperature: 7340,
                        radii: 164,
                        mass: 13.8,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('A9Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'A',
                        classification: 9,
                        magnitude: -7.26,
                        luminosity: 65000,
                        temperature: 7120,
                        radii: 169,
                        mass: 13.4,
                        zones: 'xx-----IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B0Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 0,
                        magnitude: -9.6,
                        luminosity: 560000,
                        temperature: 22000,
                        radii: 52,
                        mass: 60,
                        zones: 'x-------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B1Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 1,
                        magnitude: -9.38,
                        luminosity: 488800,
                        temperature: 20440,
                        radii: 56.6,
                        mass: 54,
                        zones: 'x-------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B2Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 2,
                        magnitude: -9.16,
                        luminosity: 417600,
                        temperature: 18880,
                        radii: 61.2,
                        mass: 48,
                        zones: 'x-------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B3Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 3,
                        magnitude: -8.94,
                        luminosity: 346400,
                        temperature: 17320,
                        radii: 65.8,
                        mass: 42,
                        zones: 'x-------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B4Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 4,
                        magnitude: -8.72,
                        luminosity: 275200,
                        temperature: 15760,
                        radii: 70.4,
                        mass: 36,
                        zones: 'x-------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B5Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 5,
                        magnitude: -8.5,
                        luminosity: 204000,
                        temperature: 14200,
                        radii: 75,
                        mass: 30,
                        zones: 'x------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B6Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 6,
                        magnitude: -8.36,
                        luminosity: 184600,
                        temperature: 13160,
                        radii: 87,
                        mass: 27.6,
                        zones: 'x------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B7Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 7,
                        magnitude: -8.22,
                        luminosity: 165200,
                        temperature: 12120,
                        radii: 99,
                        mass: 25.2,
                        zones: 'x------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B8Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 8,
                        magnitude: -8.08,
                        luminosity: 145800,
                        temperature: 11080,
                        radii: 111,
                        mass: 22.8,
                        zones: 'x------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B9Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'B',
                        classification: 9,
                        magnitude: -7.94,
                        luminosity: 126400,
                        temperature: 10040,
                        radii: 123,
                        mass: 20.4,
                        zones: 'x------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('F0Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 0,
                        magnitude: -7.2,
                        luminosity: 61000,
                        temperature: 6900,
                        radii: 174,
                        mass: 13,
                        zones: 'xxx---IIIIIIHOOOOOOO'
                    })
                astro
                    .doc('F1Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 1,
                        magnitude: -7.16,
                        luminosity: 59000,
                        temperature: 6740,
                        radii: 180,
                        mass: 12.8,
                        zones: 'xxx---IIIIIIHOOOOOOO'
                    })
                astro
                    .doc('F2Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 2,
                        magnitude: -7.12,
                        luminosity: 57000,
                        temperature: 6580,
                        radii: 186,
                        mass: 12.6,
                        zones: 'xxx---IIIIIIHOOOOOOO'
                    })
                astro
                    .doc('F3Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 3,
                        magnitude: -7.08,
                        luminosity: 55000,
                        temperature: 6420,
                        radii: 192,
                        mass: 12.4,
                        zones: 'xxx---IIIIIIHOOOOOOO'
                    })
                astro
                    .doc('F4Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 4,
                        magnitude: -7.04,
                        luminosity: 53000,
                        temperature: 6260,
                        radii: 198,
                        mass: 12.2,
                        zones: 'xxx---IIIIIIHOOOOOOO'
                    })
                astro
                    .doc('F5Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 5,
                        magnitude: -7,
                        luminosity: 51000,
                        temperature: 6100,
                        radii: 204,
                        mass: 12,
                        zones: 'xxx---IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('F6Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 6,
                        magnitude: -7.06,
                        luminosity: 54200,
                        temperature: 5960,
                        radii: 222.8,
                        mass: 12,
                        zones: 'xxx---IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('F7Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 7,
                        magnitude: -7.12,
                        luminosity: 57400,
                        temperature: 5820,
                        radii: 241.6,
                        mass: 12,
                        zones: 'xxx---IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('F8Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 8,
                        magnitude: -7.18,
                        luminosity: 60600,
                        temperature: 5680,
                        radii: 260.4,
                        mass: 12,
                        zones: 'xxx---IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('F9Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'F',
                        classification: 9,
                        magnitude: -7.24,
                        luminosity: 63800,
                        temperature: 5540,
                        radii: 279.2,
                        mass: 12,
                        zones: 'xxx---IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('G0Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 0,
                        magnitude: -7.3,
                        luminosity: 67000,
                        temperature: 5400,
                        radii: 298,
                        mass: 12,
                        zones: 'xxxx---IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G1Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 1,
                        magnitude: -7.36,
                        luminosity: 71400,
                        temperature: 5260,
                        radii: 329.2,
                        mass: 12.2,
                        zones: 'xxxx---IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G2Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 2,
                        magnitude: -7.42,
                        luminosity: 75800,
                        temperature: 5120,
                        radii: 360.4,
                        mass: 12.4,
                        zones: 'xxxx---IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G3Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 3,
                        magnitude: -7.48,
                        luminosity: 80200,
                        temperature: 4980,
                        radii: 391.6,
                        mass: 12.6,
                        zones: 'xxxx---IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G4Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 4,
                        magnitude: -7.54,
                        luminosity: 84600,
                        temperature: 4840,
                        radii: 422.8,
                        mass: 12.8,
                        zones: 'xxxx---IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G5Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 5,
                        magnitude: -7.6,
                        luminosity: 89000,
                        temperature: 4700,
                        radii: 454,
                        mass: 13,
                        zones: 'xxxxx--IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G6Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 6,
                        magnitude: -7.62,
                        luminosity: 90600,
                        temperature: 4560,
                        radii: 494,
                        mass: 13.2,
                        zones: 'xxxxx--IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G7Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 7,
                        magnitude: -7.64,
                        luminosity: 92200,
                        temperature: 4420,
                        radii: 534,
                        mass: 13.4,
                        zones: 'xxxxx--IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G8Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 8,
                        magnitude: -7.66,
                        luminosity: 93800,
                        temperature: 4280,
                        radii: 574,
                        mass: 13.6,
                        zones: 'xxxxx--IIIIIHOOOOOOO'
                    })
                astro
                    .doc('G9Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'G',
                        classification: 9,
                        magnitude: -7.68,
                        luminosity: 95400,
                        temperature: 4140,
                        radii: 614,
                        mass: 13.8,
                        zones: 'xxxxx--IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K0Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 0,
                        magnitude: -7.7,
                        luminosity: 97000,
                        temperature: 4000,
                        radii: 654,
                        mass: 14,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K1Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 1,
                        magnitude: -7.72,
                        luminosity: 99000,
                        temperature: 3860,
                        radii: 725.2,
                        mass: 14.8,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K2Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 2,
                        magnitude: -7.74,
                        luminosity: 101000,
                        temperature: 3720,
                        radii: 796.4,
                        mass: 15.6,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K3Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 3,
                        magnitude: -7.76,
                        luminosity: 103000,
                        temperature: 3580,
                        radii: 867.6,
                        mass: 16.4,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K4Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 4,
                        magnitude: -7.78,
                        luminosity: 105000,
                        temperature: 3440,
                        radii: 938.8,
                        mass: 17.2,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K5Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 5,
                        magnitude: -7.8,
                        luminosity: 107000,
                        temperature: 3300,
                        radii: 1010,
                        mass: 18,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K6Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 6,
                        magnitude: -7.82,
                        luminosity: 109000,
                        temperature: 3200,
                        radii: 1101.4,
                        mass: 18.4,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K7Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 7,
                        magnitude: -7.84,
                        luminosity: 111000,
                        temperature: 3100,
                        radii: 1192.8,
                        mass: 18.8,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K8Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 8,
                        magnitude: -7.86,
                        luminosity: 113000,
                        temperature: 3000,
                        radii: 1284.2,
                        mass: 19.2,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('K9Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'K',
                        classification: 9,
                        magnitude: -7.88,
                        luminosity: 115000,
                        temperature: 2900,
                        radii: 1375.6,
                        mass: 19.6,
                        zones: 'xxxxxx-IIIIIHOOOOOOO'
                    })
                astro
                    .doc('M0Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 0,
                        magnitude: -7.9,
                        luminosity: 117000,
                        temperature: 2800,
                        radii: 1467,
                        mass: 20,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M1Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 1,
                        magnitude: -7.92,
                        luminosity: 119400,
                        temperature: 2640,
                        radii: 1777.6,
                        mass: 21,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M2Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 2,
                        magnitude: -7.94,
                        luminosity: 121800,
                        temperature: 2480,
                        radii: 2088.2,
                        mass: 22,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M3Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 3,
                        magnitude: -7.96,
                        luminosity: 124200,
                        temperature: 2320,
                        radii: 2398.8,
                        mass: 23,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M4Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 4,
                        magnitude: -7.98,
                        luminosity: 126600,
                        temperature: 2160,
                        radii: 2709.4,
                        mass: 24,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M5Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 5,
                        magnitude: -8,
                        luminosity: 129000,
                        temperature: 2000,
                        radii: 3020,
                        mass: 25,
                        zones: 'xxxxxxxxIIIIHOOOOOOO'
                    })
                astro
                    .doc('M6Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 6,
                        magnitude: -8.025,
                        luminosity: 132000,
                        temperature: 1975,
                        radii: 3139.75,
                        mass: 26.25,
                        zones: 'xxxxxxxxIIIIHOOOOOOO'
                    })
                astro
                    .doc('M7Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 7,
                        magnitude: -8.05,
                        luminosity: 135000,
                        temperature: 1950,
                        radii: 3259.5,
                        mass: 27.5,
                        zones: 'xxxxxxxxIIIIHOOOOOOO'
                    })
                astro
                    .doc('M8Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 8,
                        magnitude: -8.075,
                        luminosity: 138000,
                        temperature: 1925,
                        radii: 3379.25,
                        mass: 28.75,
                        zones: 'xxxxxxxxIIIIHOOOOOOO'
                    })
                astro
                    .doc('M9Ia')
                    .set({
                        sizeCode: 'Ia',
                        typeCode: 'M',
                        classification: 9,
                        magnitude: -8.1,
                        luminosity: 141000,
                        temperature: 1900,
                        radii: 3499,
                        mass: 30,
                        zones: 'xxxxxxxxIIIIHOOOOOOO'
                    })
                astro
                    .doc('A0Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 0,
                        magnitude: -5.7,
                        luminosity: 15000,
                        temperature: 9100,
                        radii: 50,
                        mass: 16,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('A1Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 1,
                        magnitude: -5.64,
                        luminosity: 14340,
                        temperature: 8900,
                        radii: 51,
                        mass: 15.4,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('A2Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 2,
                        magnitude: -5.58,
                        luminosity: 13680,
                        temperature: 8700,
                        radii: 52,
                        mass: 14.8,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('A3Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 3,
                        magnitude: -5.52,
                        luminosity: 13020,
                        temperature: 8500,
                        radii: 53,
                        mass: 14.2,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('A4Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 4,
                        magnitude: -5.46,
                        luminosity: 12360,
                        temperature: 8300,
                        radii: 54,
                        mass: 13.6,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('A5Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 5,
                        magnitude: -5.4,
                        luminosity: 11700,
                        temperature: 8100,
                        radii: 55,
                        mass: 13,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('A6Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 6,
                        magnitude: -5.3,
                        luminosity: 10840,
                        temperature: 7880,
                        radii: 55.8,
                        mass: 12.8,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('A7Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 7,
                        magnitude: -5.2,
                        luminosity: 9980,
                        temperature: 7660,
                        radii: 56.6,
                        mass: 12.6,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('A8Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 8,
                        magnitude: -5.1,
                        luminosity: 9120,
                        temperature: 7440,
                        radii: 57.4,
                        mass: 12.4,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('A9Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'A',
                        classification: 9,
                        magnitude: -5,
                        luminosity: 8260,
                        temperature: 7220,
                        radii: 58.2,
                        mass: 12.2,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B0Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 0,
                        magnitude: -8.8,
                        luminosity: 270000,
                        temperature: 24000,
                        radii: 30,
                        mass: 50,
                        zones: '--------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B1Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 1,
                        magnitude: -8.42,
                        luminosity: 225340,
                        temperature: 22100,
                        radii: 31,
                        mass: 45,
                        zones: '--------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B2Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 2,
                        magnitude: -8.04,
                        luminosity: 180680,
                        temperature: 20200,
                        radii: 32,
                        mass: 40,
                        zones: '--------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B3Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 3,
                        magnitude: -7.66,
                        luminosity: 136020,
                        temperature: 18300,
                        radii: 33,
                        mass: 35,
                        zones: '--------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B4Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 4,
                        magnitude: -7.28,
                        luminosity: 91360,
                        temperature: 16400,
                        radii: 34,
                        mass: 30,
                        zones: '--------IIIIIHOOOOOO'
                    })
                astro
                    .doc('B5Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 5,
                        magnitude: -6.9,
                        luminosity: 46700,
                        temperature: 14500,
                        radii: 35,
                        mass: 25,
                        zones: '------IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B6Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 6,
                        magnitude: -6.66,
                        luminosity: 40360,
                        temperature: 13420,
                        radii: 38,
                        mass: 23.2,
                        zones: '------IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B7Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 7,
                        magnitude: -6.42,
                        luminosity: 34020,
                        temperature: 12340,
                        radii: 41,
                        mass: 21.4,
                        zones: '------IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B8Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 8,
                        magnitude: -6.18,
                        luminosity: 27680,
                        temperature: 11260,
                        radii: 44,
                        mass: 19.6,
                        zones: '------IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B9Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'B',
                        classification: 9,
                        magnitude: -5.94,
                        luminosity: 21340,
                        temperature: 10180,
                        radii: 47,
                        mass: 17.8,
                        zones: '------IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('F0Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 0,
                        magnitude: -4.9,
                        luminosity: 7400,
                        temperature: 7000,
                        radii: 59,
                        mass: 12,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F1Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 1,
                        magnitude: -4.82,
                        luminosity: 6940,
                        temperature: 6860,
                        radii: 59.2,
                        mass: 11.6,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F2Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 2,
                        magnitude: -4.74,
                        luminosity: 6480,
                        temperature: 6720,
                        radii: 59.4,
                        mass: 11.2,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F3Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 3,
                        magnitude: -4.66,
                        luminosity: 6020,
                        temperature: 6580,
                        radii: 59.6,
                        mass: 10.8,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F4Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 4,
                        magnitude: -4.58,
                        luminosity: 5560,
                        temperature: 6440,
                        radii: 59.8,
                        mass: 10.4,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F5Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 5,
                        magnitude: -4.5,
                        luminosity: 5100,
                        temperature: 6300,
                        radii: 60,
                        mass: 10,
                        zones: '----IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F6Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 6,
                        magnitude: -4.54,
                        luminosity: 5300,
                        temperature: 6160,
                        radii: 64.8,
                        mass: 10,
                        zones: '----IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F7Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 7,
                        magnitude: -4.58,
                        luminosity: 5500,
                        temperature: 6020,
                        radii: 69.6,
                        mass: 10,
                        zones: '----IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F8Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 8,
                        magnitude: -4.62,
                        luminosity: 5700,
                        temperature: 5880,
                        radii: 74.4,
                        mass: 10,
                        zones: '----IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F9Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'F',
                        classification: 9,
                        magnitude: -4.66,
                        luminosity: 5900,
                        temperature: 5740,
                        radii: 79.2,
                        mass: 10,
                        zones: '----IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G0Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 0,
                        magnitude: -4.7,
                        luminosity: 6100,
                        temperature: 5600,
                        radii: 84,
                        mass: 10,
                        zones: 'x---IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G1Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 1,
                        magnitude: -4.76,
                        luminosity: 6500,
                        temperature: 5450,
                        radii: 92.8,
                        mass: 10.4,
                        zones: 'x---IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G2Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 2,
                        magnitude: -4.82,
                        luminosity: 6900,
                        temperature: 5300,
                        radii: 101.6,
                        mass: 10.8,
                        zones: 'x---IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G3Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 3,
                        magnitude: -4.88,
                        luminosity: 7300,
                        temperature: 5150,
                        radii: 110.4,
                        mass: 11.2,
                        zones: 'x---IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G4Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 4,
                        magnitude: -4.94,
                        luminosity: 7700,
                        temperature: 5000,
                        radii: 119.2,
                        mass: 11.6,
                        zones: 'x---IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G5Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 5,
                        magnitude: -5,
                        luminosity: 8100,
                        temperature: 4850,
                        radii: 128,
                        mass: 12,
                        zones: 'xx---IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G6Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 6,
                        magnitude: -5.08,
                        luminosity: 8820,
                        temperature: 4700,
                        radii: 145.6,
                        mass: 12.2,
                        zones: 'xx---IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G7Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 7,
                        magnitude: -5.16,
                        luminosity: 9540,
                        temperature: 4550,
                        radii: 163.2,
                        mass: 12.4,
                        zones: 'xx---IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G8Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 8,
                        magnitude: -5.24,
                        luminosity: 10260,
                        temperature: 4400,
                        radii: 180.8,
                        mass: 12.6,
                        zones: 'xx---IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('G9Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'G',
                        classification: 9,
                        magnitude: -5.32,
                        luminosity: 10980,
                        temperature: 4250,
                        radii: 198.4,
                        mass: 12.8,
                        zones: 'xx---IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('K0Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 0,
                        magnitude: -5.4,
                        luminosity: 11700,
                        temperature: 4100,
                        radii: 216,
                        mass: 13,
                        zones: 'xxxx-IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('K1Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 1,
                        magnitude: -5.52,
                        luminosity: 13440,
                        temperature: 3980,
                        radii: 251.2,
                        mass: 13.6,
                        zones: 'xxxx-IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('K2Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 2,
                        magnitude: -5.64,
                        luminosity: 15180,
                        temperature: 3860,
                        radii: 286.4,
                        mass: 14.2,
                        zones: 'xxxx-IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('K3Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 3,
                        magnitude: -5.76,
                        luminosity: 16920,
                        temperature: 3740,
                        radii: 321.6,
                        mass: 14.8,
                        zones: 'xxxx-IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('K4Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 4,
                        magnitude: -5.88,
                        luminosity: 18660,
                        temperature: 3620,
                        radii: 356.8,
                        mass: 15.4,
                        zones: 'xxxx-IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('K5Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 5,
                        magnitude: -6,
                        luminosity: 20400,
                        temperature: 3500,
                        radii: 392,
                        mass: 16,
                        zones: 'xxxxx-IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('K6Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 6,
                        magnitude: -6.18,
                        luminosity: 25520,
                        temperature: 3380,
                        radii: 485,
                        mass: 16,
                        zones: 'xxxxx-IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('K7Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 7,
                        magnitude: -6.36,
                        luminosity: 30640,
                        temperature: 3260,
                        radii: 578,
                        mass: 16,
                        zones: 'xxxxx-IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('K8Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 8,
                        magnitude: -6.54,
                        luminosity: 35760,
                        temperature: 3140,
                        radii: 671,
                        mass: 16,
                        zones: 'xxxxx-IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('K9Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'K',
                        classification: 9,
                        magnitude: -6.72,
                        luminosity: 40880,
                        temperature: 3020,
                        radii: 764,
                        mass: 16,
                        zones: 'xxxxx-IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M0Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 0,
                        magnitude: -6.9,
                        luminosity: 46000,
                        temperature: 2900,
                        radii: 857,
                        mass: 16,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M1Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 1,
                        magnitude: -7.04,
                        luminosity: 54600,
                        temperature: 2760,
                        radii: 1100.2,
                        mass: 16.8,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M2Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 2,
                        magnitude: -7.18,
                        luminosity: 63200,
                        temperature: 2620,
                        radii: 1343.4,
                        mass: 17.6,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M3Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 3,
                        magnitude: -7.32,
                        luminosity: 71800,
                        temperature: 2480,
                        radii: 1586.6,
                        mass: 18.4,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M4Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 4,
                        magnitude: -7.46,
                        luminosity: 80400,
                        temperature: 2340,
                        radii: 1829.8,
                        mass: 19.2,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M5Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 5,
                        magnitude: -7.6,
                        luminosity: 89000,
                        temperature: 2200,
                        radii: 2073,
                        mass: 20,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M6Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 6,
                        magnitude: -7.675,
                        luminosity: 96000,
                        temperature: 2150,
                        radii: 2273.75,
                        mass: 21.25,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M7Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 7,
                        magnitude: -7.75,
                        luminosity: 103000,
                        temperature: 2100,
                        radii: 2474.5,
                        mass: 22.5,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M8Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 8,
                        magnitude: -7.825,
                        luminosity: 110000,
                        temperature: 2050,
                        radii: 2675.25,
                        mass: 23.75,
                        zones: 'xxxxxxxIIIIIHOOOOOOO'
                    })
                astro
                    .doc('M9Ib')
                    .set({
                        sizeCode: 'Ib',
                        typeCode: 'M',
                        classification: 9,
                        magnitude: -7.9,
                        luminosity: 117000,
                        temperature: 2000,
                        radii: 2876,
                        mass: 25,
                        zones: 'xxxxxxxxIIIIHOOOOOOO'
                    })
                astro
                    .doc('A0II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 0,
                        magnitude: -3.6,
                        luminosity: 2200,
                        temperature: 9300,
                        radii: 18,
                        mass: 14,
                        zones: '---IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('A1II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 1,
                        magnitude: -3.39,
                        luminosity: 1930,
                        temperature: 9080,
                        radii: 17.2,
                        mass: 13.4,
                        zones: '---IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('A2II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 2,
                        magnitude: -3.18,
                        luminosity: 1660,
                        temperature: 8860,
                        radii: 16.4,
                        mass: 12.8,
                        zones: '---IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('A3II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 3,
                        magnitude: -2.97,
                        luminosity: 1390,
                        temperature: 8640,
                        radii: 15.6,
                        mass: 12.2,
                        zones: '---IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('A4II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 4,
                        magnitude: -2.76,
                        luminosity: 1120,
                        temperature: 8420,
                        radii: 14.8,
                        mass: 11.6,
                        zones: '---IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('A5II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 5,
                        magnitude: -2.55,
                        luminosity: 850,
                        temperature: 8200,
                        radii: 14,
                        mass: 11,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A6II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 6,
                        magnitude: -2.476,
                        luminosity: 800,
                        temperature: 7980,
                        radii: 14.4,
                        mass: 10.8,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A7II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 7,
                        magnitude: -2.402,
                        luminosity: 750,
                        temperature: 7760,
                        radii: 14.8,
                        mass: 10.6,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A8II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 8,
                        magnitude: -2.328,
                        luminosity: 700,
                        temperature: 7540,
                        radii: 15.2,
                        mass: 10.4,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A9II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'A',
                        classification: 9,
                        magnitude: -2.254,
                        luminosity: 650,
                        temperature: 7320,
                        radii: 15.6,
                        mass: 10.2,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('B0II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 0,
                        magnitude: -8.3,
                        luminosity: 170000,
                        temperature: 25000,
                        radii: 22,
                        mass: 30,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B1II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 1,
                        magnitude: -7.82,
                        luminosity: 139720,
                        temperature: 23020,
                        radii: 21.6,
                        mass: 28,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B2II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 2,
                        magnitude: -7.34,
                        luminosity: 109440,
                        temperature: 21040,
                        radii: 21.2,
                        mass: 26,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B3II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 3,
                        magnitude: -6.86,
                        luminosity: 79160,
                        temperature: 19060,
                        radii: 20.8,
                        mass: 24,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B4II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 4,
                        magnitude: -6.38,
                        luminosity: 48880,
                        temperature: 17080,
                        radii: 20.4,
                        mass: 22,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B5II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 5,
                        magnitude: -5.9,
                        luminosity: 18600,
                        temperature: 15100,
                        radii: 20,
                        mass: 20,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B6II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 6,
                        magnitude: -5.44,
                        luminosity: 15320,
                        temperature: 13940,
                        radii: 19.6,
                        mass: 18.8,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B7II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 7,
                        magnitude: -4.98,
                        luminosity: 12040,
                        temperature: 12780,
                        radii: 19.2,
                        mass: 17.6,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B8II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 8,
                        magnitude: -4.52,
                        luminosity: 8760,
                        temperature: 11620,
                        radii: 18.8,
                        mass: 16.4,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B9II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'B',
                        classification: 9,
                        magnitude: -4.06,
                        luminosity: 5480,
                        temperature: 10460,
                        radii: 18.4,
                        mass: 15.2,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('F0II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 0,
                        magnitude: -2.18,
                        luminosity: 600,
                        temperature: 7100,
                        radii: 16,
                        mass: 10,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F1II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 1,
                        magnitude: -2.144,
                        luminosity: 582,
                        temperature: 6960,
                        radii: 16.4,
                        mass: 9.62,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F2II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 2,
                        magnitude: -2.108,
                        luminosity: 564,
                        temperature: 6820,
                        radii: 16.8,
                        mass: 9.24,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F3II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 3,
                        magnitude: -2.072,
                        luminosity: 546,
                        temperature: 6680,
                        radii: 17.2,
                        mass: 8.86,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F4II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 4,
                        magnitude: -2.036,
                        luminosity: 528,
                        temperature: 6540,
                        radii: 17.6,
                        mass: 8.48,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F5II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 5,
                        magnitude: -2,
                        luminosity: 510,
                        temperature: 6400,
                        radii: 18,
                        mass: 8.1,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F6II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 6,
                        magnitude: -2.02,
                        luminosity: 520,
                        temperature: 6260,
                        radii: 19.4,
                        mass: 8.1,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F7II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 7,
                        magnitude: -2.04,
                        luminosity: 530,
                        temperature: 6120,
                        radii: 20.8,
                        mass: 8.1,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F8II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 8,
                        magnitude: -2.06,
                        luminosity: 540,
                        temperature: 5980,
                        radii: 22.2,
                        mass: 8.1,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('F9II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'F',
                        classification: 9,
                        magnitude: -2.08,
                        luminosity: 550,
                        temperature: 5840,
                        radii: 23.6,
                        mass: 8.1,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G0II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 0,
                        magnitude: -2.1,
                        luminosity: 560,
                        temperature: 5700,
                        radii: 25,
                        mass: 8.1,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G1II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 1,
                        magnitude: -2.16,
                        luminosity: 596,
                        temperature: 5560,
                        radii: 27.4,
                        mass: 8.48,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G2II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 2,
                        magnitude: -2.22,
                        luminosity: 632,
                        temperature: 5420,
                        radii: 29.8,
                        mass: 8.86,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G3II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 3,
                        magnitude: -2.28,
                        luminosity: 668,
                        temperature: 5280,
                        radii: 32.2,
                        mass: 9.24,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G4II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 4,
                        magnitude: -2.34,
                        luminosity: 704,
                        temperature: 5140,
                        radii: 34.6,
                        mass: 9.62,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G5II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 5,
                        magnitude: -2.4,
                        luminosity: 740,
                        temperature: 5000,
                        radii: 37,
                        mass: 10,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G6II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 6,
                        magnitude: -2.44,
                        luminosity: 770,
                        temperature: 4860,
                        radii: 40.4,
                        mass: 10.2,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G7II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 7,
                        magnitude: -2.48,
                        luminosity: 800,
                        temperature: 4720,
                        radii: 43.8,
                        mass: 10.4,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G8II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 8,
                        magnitude: -2.52,
                        luminosity: 830,
                        temperature: 4580,
                        radii: 47.2,
                        mass: 10.6,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('G9II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'G',
                        classification: 9,
                        magnitude: -2.56,
                        luminosity: 860,
                        temperature: 4440,
                        radii: 50.6,
                        mass: 10.8,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('K0II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 0,
                        magnitude: -2.6,
                        luminosity: 890,
                        temperature: 4300,
                        radii: 54,
                        mass: 11,
                        zones: 'x-IIIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K1II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 1,
                        magnitude: -2.82,
                        luminosity: 1202,
                        temperature: 4170,
                        radii: 68,
                        mass: 11.6,
                        zones: 'x-IIIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K2II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 2,
                        magnitude: -3.04,
                        luminosity: 1514,
                        temperature: 4040,
                        radii: 82,
                        mass: 12.2,
                        zones: 'x-IIIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K3II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 3,
                        magnitude: -3.26,
                        luminosity: 1826,
                        temperature: 3910,
                        radii: 96,
                        mass: 12.8,
                        zones: 'x-IIIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K4II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 4,
                        magnitude: -3.48,
                        luminosity: 2138,
                        temperature: 3780,
                        radii: 110,
                        mass: 13.4,
                        zones: 'x-IIIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K5II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 5,
                        magnitude: -3.7,
                        luminosity: 2450,
                        temperature: 3650,
                        radii: 124,
                        mass: 14,
                        zones: 'xx-IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K6II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 6,
                        magnitude: -3.84,
                        luminosity: 2880,
                        temperature: 3540,
                        radii: 146.6,
                        mass: 14,
                        zones: 'xx-IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K7II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 7,
                        magnitude: -3.98,
                        luminosity: 3310,
                        temperature: 3430,
                        radii: 169.2,
                        mass: 14,
                        zones: 'xx-IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K8II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 8,
                        magnitude: -4.12,
                        luminosity: 3740,
                        temperature: 3320,
                        radii: 191.8,
                        mass: 14,
                        zones: 'xx-IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('K9II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'K',
                        classification: 9,
                        magnitude: -4.26,
                        luminosity: 4170,
                        temperature: 3210,
                        radii: 214.4,
                        mass: 14,
                        zones: 'xx-IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('M0II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 0,
                        magnitude: -4.4,
                        luminosity: 4600,
                        temperature: 3100,
                        radii: 237,
                        mass: 14,
                        zones: 'xxxxIIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('M1II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 1,
                        magnitude: -4.65,
                        luminosity: 6660,
                        temperature: 2960,
                        radii: 332,
                        mass: 14.4,
                        zones: 'xxxxIIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('M2II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 2,
                        magnitude: -4.9,
                        luminosity: 8720,
                        temperature: 2820,
                        radii: 427,
                        mass: 14.8,
                        zones: 'xxxxIIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('M3II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 3,
                        magnitude: -5.15,
                        luminosity: 10780,
                        temperature: 2680,
                        radii: 522,
                        mass: 15.2,
                        zones: 'xxxxIIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('M4II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 4,
                        magnitude: -5.4,
                        luminosity: 12840,
                        temperature: 2540,
                        radii: 617,
                        mass: 15.6,
                        zones: 'xxxxIIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('M5II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 5,
                        magnitude: -5.65,
                        luminosity: 14900,
                        temperature: 2400,
                        radii: 712,
                        mass: 16,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M6II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 6,
                        magnitude: -5.675,
                        luminosity: 15225,
                        temperature: 2325,
                        radii: 766.75,
                        mass: 16.5,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M7II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 7,
                        magnitude: -5.7,
                        luminosity: 15550,
                        temperature: 2250,
                        radii: 821.5,
                        mass: 17,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M8II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 8,
                        magnitude: -5.725,
                        luminosity: 15875,
                        temperature: 2175,
                        radii: 876.25,
                        mass: 17.5,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('M9II')
                    .set({
                        sizeCode: 'II',
                        typeCode: 'M',
                        classification: 9,
                        magnitude: -5.75,
                        luminosity: 16200,
                        temperature: 2100,
                        radii: 931,
                        mass: 18,
                        zones: 'xxxxxxIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('A0III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 0,
                        magnitude: -1.36,
                        luminosity: 280,
                        temperature: 9500,
                        radii: 6.2,
                        mass: 12,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A1III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 1,
                        magnitude: -1.108,
                        luminosity: 242,
                        temperature: 9260,
                        radii: 5.88,
                        mass: 11.4,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A2III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 2,
                        magnitude: -0.856,
                        luminosity: 204,
                        temperature: 9020,
                        radii: 5.56,
                        mass: 10.8,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A3III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 3,
                        magnitude: -0.604,
                        luminosity: 166,
                        temperature: 8780,
                        radii: 5.24,
                        mass: 10.2,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A4III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 4,
                        magnitude: -0.352,
                        luminosity: 128,
                        temperature: 8540,
                        radii: 4.92,
                        mass: 9.6,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('A5III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 5,
                        magnitude: -0.1,
                        luminosity: 90,
                        temperature: 8300,
                        radii: 4.6,
                        mass: 9,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A6III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 6,
                        magnitude: 0.01,
                        luminosity: 82.6,
                        temperature: 8080,
                        radii: 4.62,
                        mass: 8.8,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A7III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 7,
                        magnitude: 0.12,
                        luminosity: 75.2,
                        temperature: 7860,
                        radii: 4.64,
                        mass: 8.6,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A8III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 8,
                        magnitude: 0.23,
                        luminosity: 67.8,
                        temperature: 7640,
                        radii: 4.66,
                        mass: 8.4,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A9III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'A',
                        classification: 9,
                        magnitude: 0.34,
                        luminosity: 60.4,
                        temperature: 7420,
                        radii: 4.68,
                        mass: 8.2,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('B0III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 0,
                        magnitude: -7.8,
                        luminosity: 107000,
                        temperature: 26000,
                        radii: 16,
                        mass: 25,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B1III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 1,
                        magnitude: -6.94,
                        luminosity: 86940,
                        temperature: 23840,
                        radii: 14.8,
                        mass: 23,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B2III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 2,
                        magnitude: -6.08,
                        luminosity: 66880,
                        temperature: 21680,
                        radii: 13.6,
                        mass: 21,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B3III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 3,
                        magnitude: -5.22,
                        luminosity: 46820,
                        temperature: 19520,
                        radii: 12.4,
                        mass: 19,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B4III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 4,
                        magnitude: -4.36,
                        luminosity: 26760,
                        temperature: 17360,
                        radii: 11.2,
                        mass: 17,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B5III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 5,
                        magnitude: -3.5,
                        luminosity: 6700,
                        temperature: 15200,
                        radii: 10,
                        mass: 15,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B6III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 6,
                        magnitude: -3.072,
                        luminosity: 5416,
                        temperature: 14060,
                        radii: 9.24,
                        mass: 14.4,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B7III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 7,
                        magnitude: -2.644,
                        luminosity: 4132,
                        temperature: 12920,
                        radii: 8.48,
                        mass: 13.8,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B8III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 8,
                        magnitude: -2.216,
                        luminosity: 2848,
                        temperature: 11780,
                        radii: 7.72,
                        mass: 13.2,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B9III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'B',
                        classification: 9,
                        magnitude: -1.788,
                        luminosity: 1564,
                        temperature: 10640,
                        radii: 6.96,
                        mass: 12.6,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('F0III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 0,
                        magnitude: 0.45,
                        luminosity: 53,
                        temperature: 7200,
                        radii: 4.7,
                        mass: 8,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F1III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 1,
                        magnitude: 0.5,
                        luminosity: 51,
                        temperature: 7060,
                        radii: 4.8,
                        mass: 7.4,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F2III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 2,
                        magnitude: 0.55,
                        luminosity: 49,
                        temperature: 6920,
                        radii: 4.9,
                        mass: 6.8,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F3III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 3,
                        magnitude: 0.6,
                        luminosity: 47,
                        temperature: 6780,
                        radii: 5,
                        mass: 6.2,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F4III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 4,
                        magnitude: 0.65,
                        luminosity: 45,
                        temperature: 6640,
                        radii: 5.1,
                        mass: 5.6,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F5III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 5,
                        magnitude: 0.7,
                        luminosity: 43,
                        temperature: 6500,
                        radii: 5.2,
                        mass: 5,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F6III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 6,
                        magnitude: 0.664,
                        luminosity: 44.4,
                        temperature: 6360,
                        radii: 5.58,
                        mass: 4.5,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F7III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 7,
                        magnitude: 0.628,
                        luminosity: 45.8,
                        temperature: 6220,
                        radii: 5.96,
                        mass: 4,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F8III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 8,
                        magnitude: 0.592,
                        luminosity: 47.2,
                        temperature: 6080,
                        radii: 6.34,
                        mass: 3.5,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F9III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'F',
                        classification: 9,
                        magnitude: 0.556,
                        luminosity: 48.6,
                        temperature: 5940,
                        radii: 6.72,
                        mass: 3,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G0III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 0,
                        magnitude: 0.52,
                        luminosity: 50,
                        temperature: 5800,
                        radii: 7.1,
                        mass: 2.5,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G1III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 1,
                        magnitude: 0.432,
                        luminosity: 55,
                        temperature: 5660,
                        radii: 7.88,
                        mass: 2.64,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G2III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 2,
                        magnitude: 0.344,
                        luminosity: 60,
                        temperature: 5520,
                        radii: 8.66,
                        mass: 2.78,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G3III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 3,
                        magnitude: 0.256,
                        luminosity: 65,
                        temperature: 5380,
                        radii: 9.44,
                        mass: 2.92,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G4III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 4,
                        magnitude: 0.168,
                        luminosity: 70,
                        temperature: 5240,
                        radii: 10.22,
                        mass: 3.06,
                        zones: '-IIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G5III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 5,
                        magnitude: 0.08,
                        luminosity: 75,
                        temperature: 5100,
                        radii: 11,
                        mass: 3.2,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('G6III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 6,
                        magnitude: 0.03,
                        luminosity: 79,
                        temperature: 4980,
                        radii: 12,
                        mass: 3.36,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('G7III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 7,
                        magnitude: -0.02,
                        luminosity: 83,
                        temperature: 4860,
                        radii: 13,
                        mass: 3.52,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('G8III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 8,
                        magnitude: -0.07,
                        luminosity: 87,
                        temperature: 4740,
                        radii: 14,
                        mass: 3.68,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('G9III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'G',
                        classification: 9,
                        magnitude: -0.12,
                        luminosity: 91,
                        temperature: 4620,
                        radii: 15,
                        mass: 3.84,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('K0III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 0,
                        magnitude: -0.17,
                        luminosity: 95,
                        temperature: 4500,
                        radii: 16,
                        mass: 4,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('K1III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 1,
                        magnitude: -0.436,
                        luminosity: 140,
                        temperature: 4360,
                        radii: 21.2,
                        mass: 4.2,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('K2III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 2,
                        magnitude: -0.702,
                        luminosity: 185,
                        temperature: 4220,
                        radii: 26.4,
                        mass: 4.4,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('K3III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 3,
                        magnitude: -0.968,
                        luminosity: 230,
                        temperature: 4080,
                        radii: 31.6,
                        mass: 4.6,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('K4III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 4,
                        magnitude: -1.234,
                        luminosity: 275,
                        temperature: 3940,
                        radii: 36.8,
                        mass: 4.8,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('K5III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 5,
                        magnitude: -1.5,
                        luminosity: 320,
                        temperature: 3800,
                        radii: 42,
                        mass: 5,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('K6III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 6,
                        magnitude: -1.58,
                        luminosity: 350,
                        temperature: 3720,
                        radii: 46.2,
                        mass: 5.26,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('K7III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 7,
                        magnitude: -1.66,
                        luminosity: 380,
                        temperature: 3640,
                        radii: 50.4,
                        mass: 5.52,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('K8III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 8,
                        magnitude: -1.74,
                        luminosity: 410,
                        temperature: 3560,
                        radii: 54.6,
                        mass: 5.78,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('K9III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'K',
                        classification: 9,
                        magnitude: -1.82,
                        luminosity: 440,
                        temperature: 3480,
                        radii: 58.8,
                        mass: 6.04,
                        zones: '-IIIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('M0III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 0,
                        magnitude: -1.9,
                        luminosity: 470,
                        temperature: 3400,
                        radii: 63,
                        mass: 6.3,
                        zones: 'x-IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('M1III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 1,
                        magnitude: -2.24,
                        luminosity: 832,
                        temperature: 3250,
                        radii: 96,
                        mass: 6.52,
                        zones: 'x-IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('M2III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 2,
                        magnitude: -2.58,
                        luminosity: 1194,
                        temperature: 3100,
                        radii: 129,
                        mass: 6.74,
                        zones: 'x-IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('M3III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 3,
                        magnitude: -2.92,
                        luminosity: 1556,
                        temperature: 2950,
                        radii: 162,
                        mass: 6.96,
                        zones: 'x-IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('M4III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 4,
                        magnitude: -3.26,
                        luminosity: 1918,
                        temperature: 2800,
                        radii: 195,
                        mass: 7.18,
                        zones: 'x-IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('M5III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 5,
                        magnitude: -3.6,
                        luminosity: 2280,
                        temperature: 2650,
                        radii: 228,
                        mass: 7.4,
                        zones: 'xxxxIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('M6III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 6,
                        magnitude: -3.65,
                        luminosity: 2382.5,
                        temperature: 2537.5,
                        radii: 261,
                        mass: 7.85,
                        zones: 'xxxxIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('M7III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 7,
                        magnitude: -3.7,
                        luminosity: 2485,
                        temperature: 2425,
                        radii: 294,
                        mass: 8.3,
                        zones: 'xxxxIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('M8III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 8,
                        magnitude: -3.75,
                        luminosity: 2587.5,
                        temperature: 2312.5,
                        radii: 327,
                        mass: 8.75,
                        zones: 'xxxxIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('M9III')
                    .set({
                        sizeCode: 'III',
                        typeCode: 'M',
                        classification: 9,
                        magnitude: -3.8,
                        luminosity: 2690,
                        temperature: 2200,
                        radii: 360,
                        mass: 9.2,
                        zones: 'xxxxxIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('A0IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 0,
                        magnitude: -0.7,
                        luminosity: 156,
                        temperature: 9700,
                        radii: 4.5,
                        mass: 6,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A1IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 1,
                        magnitude: -0.39,
                        luminosity: 132.2,
                        temperature: 9440,
                        radii: 4.14,
                        mass: 5.6,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A2IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 2,
                        magnitude: -0.08,
                        luminosity: 108.4,
                        temperature: 9180,
                        radii: 3.78,
                        mass: 5.2,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A3IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 3,
                        magnitude: 0.23,
                        luminosity: 84.6,
                        temperature: 8920,
                        radii: 3.42,
                        mass: 4.8,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A4IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 4,
                        magnitude: 0.54,
                        luminosity: 60.8,
                        temperature: 8660,
                        radii: 3.06,
                        mass: 4.4,
                        zones: '-IIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A5IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 5,
                        magnitude: 0.85,
                        luminosity: 37,
                        temperature: 8400,
                        radii: 2.7,
                        mass: 4,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A6IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 6,
                        magnitude: 0.996,
                        luminosity: 33.4,
                        temperature: 8180,
                        radii: 2.7,
                        mass: 3.7,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A7IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 7,
                        magnitude: 1.142,
                        luminosity: 29.8,
                        temperature: 7960,
                        radii: 2.7,
                        mass: 3.4,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A8IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 8,
                        magnitude: 1.288,
                        luminosity: 26.2,
                        temperature: 7740,
                        radii: 2.7,
                        mass: 3.1,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A9IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'A',
                        classification: 9,
                        magnitude: 1.434,
                        luminosity: 22.6,
                        temperature: 7520,
                        radii: 2.7,
                        mass: 2.8,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B0IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 0,
                        magnitude: -7.5,
                        luminosity: 81000,
                        temperature: 27000,
                        radii: 13,
                        mass: 20,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B1IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 1,
                        magnitude: -6.62,
                        luminosity: 65200,
                        temperature: 24680,
                        radii: 11.46,
                        mass: 18,
                        zones: '-------IIIIIHOOOOOOO'
                    })
                astro
                    .doc('B2IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 2,
                        magnitude: -5.74,
                        luminosity: 49400,
                        temperature: 22360,
                        radii: 9.92,
                        mass: 16,
                        zones: '------IIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B3IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 3,
                        magnitude: -4.86,
                        luminosity: 33600,
                        temperature: 20040,
                        radii: 8.38,
                        mass: 14,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B4IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 4,
                        magnitude: -3.98,
                        luminosity: 17800,
                        temperature: 17720,
                        radii: 6.84,
                        mass: 12,
                        zones: '-----IIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B5IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 5,
                        magnitude: -3.1,
                        luminosity: 2000,
                        temperature: 15400,
                        radii: 5.3,
                        mass: 10,
                        zones: '----IIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('B6IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 6,
                        magnitude: -2.62,
                        luminosity: 1631.2,
                        temperature: 14260,
                        radii: 5.14,
                        mass: 9.2,
                        zones: '----IIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('B7IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 7,
                        magnitude: -2.14,
                        luminosity: 1262.4,
                        temperature: 13120,
                        radii: 4.98,
                        mass: 8.4,
                        zones: '---IIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('B8IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 8,
                        magnitude: -1.66,
                        luminosity: 893.6,
                        temperature: 11980,
                        radii: 4.82,
                        mass: 7.6,
                        zones: '--IIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('B9IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'B',
                        classification: 9,
                        magnitude: -1.18,
                        luminosity: 524.8,
                        temperature: 10840,
                        radii: 4.66,
                        mass: 6.8,
                        zones: '--IIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('F0IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 0,
                        magnitude: 1.58,
                        luminosity: 19,
                        temperature: 7300,
                        radii: 2.7,
                        mass: 2.5,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F1IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 1,
                        magnitude: 1.684,
                        luminosity: 17.6,
                        temperature: 7160,
                        radii: 2.68,
                        mass: 2.4,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F2IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 2,
                        magnitude: 1.788,
                        luminosity: 16.2,
                        temperature: 7020,
                        radii: 2.66,
                        mass: 2.3,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F3IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 3,
                        magnitude: 1.892,
                        luminosity: 14.8,
                        temperature: 6880,
                        radii: 2.64,
                        mass: 2.2,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F4IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 4,
                        magnitude: 1.996,
                        luminosity: 13.4,
                        temperature: 6740,
                        radii: 2.62,
                        mass: 2.1,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F5IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 5,
                        magnitude: 2.1,
                        luminosity: 12,
                        temperature: 6600,
                        radii: 2.6,
                        mass: 2,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F6IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 6,
                        magnitude: 2.228,
                        luminosity: 10.9,
                        temperature: 6460,
                        radii: 2.58,
                        mass: 1.95,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F7IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 7,
                        magnitude: 2.356,
                        luminosity: 9.8,
                        temperature: 6320,
                        radii: 2.56,
                        mass: 1.9,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F8IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 8,
                        magnitude: 2.484,
                        luminosity: 8.7,
                        temperature: 6180,
                        radii: 2.54,
                        mass: 1.85,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F9IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'F',
                        classification: 9,
                        magnitude: 2.612,
                        luminosity: 7.6,
                        temperature: 6040,
                        radii: 2.52,
                        mass: 1.8,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G0IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 0,
                        magnitude: 2.74,
                        luminosity: 6.5,
                        temperature: 5900,
                        radii: 2.5,
                        mass: 1.75,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G1IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 1,
                        magnitude: 2.8,
                        luminosity: 6.18,
                        temperature: 5760,
                        radii: 2.56,
                        mass: 1.8,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G2IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 2,
                        magnitude: 2.86,
                        luminosity: 5.86,
                        temperature: 5620,
                        radii: 2.62,
                        mass: 1.85,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G3IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 3,
                        magnitude: 2.92,
                        luminosity: 5.54,
                        temperature: 5480,
                        radii: 2.68,
                        mass: 1.9,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G4IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 4,
                        magnitude: 2.98,
                        luminosity: 5.22,
                        temperature: 5340,
                        radii: 2.74,
                        mass: 1.95,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G5IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 5,
                        magnitude: 3.04,
                        luminosity: 4.9,
                        temperature: 5200,
                        radii: 2.8,
                        mass: 2,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G6IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 6,
                        magnitude: 3.052,
                        luminosity: 4.854,
                        temperature: 5100,
                        radii: 2.9,
                        mass: 2.06,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G7IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 7,
                        magnitude: 3.064,
                        luminosity: 4.808,
                        temperature: 5000,
                        radii: 3,
                        mass: 2.12,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G8IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 8,
                        magnitude: 3.076,
                        luminosity: 4.762,
                        temperature: 4900,
                        radii: 3.1,
                        mass: 2.18,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G9IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'G',
                        classification: 9,
                        magnitude: 3.088,
                        luminosity: 4.716,
                        temperature: 4800,
                        radii: 3.2,
                        mass: 2.24,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K0IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 0,
                        magnitude: 3.1,
                        luminosity: 4.67,
                        temperature: 4700,
                        radii: 3.3,
                        mass: 2.3,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K1IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 1,
                        magnitude: 3.112,
                        luminosity: 4.624,
                        temperature: 4600,
                        radii: 3.4,
                        mass: 2.36,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K2IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 2,
                        magnitude: 4.1,
                        luminosity: 5.67,
                        temperature: 4701,
                        radii: 4.3,
                        mass: 3.3,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K3IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 3,
                        magnitude: 4.112,
                        luminosity: 5.624,
                        temperature: 4601,
                        radii: 4.4,
                        mass: 3.36,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K4IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 4,
                        magnitude: 5.1,
                        luminosity: 6.67,
                        temperature: 4702,
                        radii: 5.3,
                        mass: 4.3,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K5IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 5,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('K6IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 6,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('K7IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 7,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('K8IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 8,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('K9IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'K',
                        classification: 9,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M0IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 0,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M1IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 1,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M2IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 2,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M3IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 3,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M4IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 4,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M5IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 5,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M6IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 6,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M7IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 7,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M8IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 8,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('M9IV')
                    .set({
                        sizeCode: 'IV',
                        typeCode: 'M',
                        classification: 9,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A0V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 0,
                        magnitude: -0.1,
                        luminosity: 90,
                        temperature: 9900,
                        radii: 3.2,
                        mass: 3.2,
                        zones: 'IIIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A1V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 1,
                        magnitude: 0.28,
                        luminosity: 75.2,
                        temperature: 9620,
                        radii: 2.92,
                        mass: 2.98,
                        zones: 'IIIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A2V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 2,
                        magnitude: 0.66,
                        luminosity: 60.4,
                        temperature: 9340,
                        radii: 2.64,
                        mass: 2.76,
                        zones: 'IIIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A3V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 3,
                        magnitude: 1.04,
                        luminosity: 45.6,
                        temperature: 9060,
                        radii: 2.36,
                        mass: 2.54,
                        zones: 'IIIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A4V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 4,
                        magnitude: 1.42,
                        luminosity: 30.8,
                        temperature: 8780,
                        radii: 2.08,
                        mass: 2.32,
                        zones: 'IIIIIIIHOOOOOOOOOOOO'
                    })
                astro
                    .doc('A5V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 5,
                        magnitude: 1.8,
                        luminosity: 16,
                        temperature: 8500,
                        radii: 1.8,
                        mass: 2.1,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A6V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 6,
                        magnitude: 1.94,
                        luminosity: 14.42,
                        temperature: 8280,
                        radii: 1.78,
                        mass: 2.02,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A7V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 7,
                        magnitude: 2.08,
                        luminosity: 12.84,
                        temperature: 8060,
                        radii: 1.76,
                        mass: 1.94,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A8V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 8,
                        magnitude: 2.22,
                        luminosity: 11.26,
                        temperature: 7840,
                        radii: 1.74,
                        mass: 1.86,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A9V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'A',
                        classification: 9,
                        magnitude: 2.36,
                        luminosity: 9.68,
                        temperature: 7620,
                        radii: 1.72,
                        mass: 1.78,
                        zones: 'IIIIIIHOOOOOOOOOOOOO'
                    })
                astro
                    .doc('B0V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 0,
                        magnitude: -7.1,
                        luminosity: 56000,
                        temperature: 28000,
                        radii: 10,
                        mass: 18,
                        zones: '------IIIIIIHOOOOOOO'
                    })
                astro
                    .doc('B1V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 1,
                        magnitude: -6.222,
                        luminosity: 45080,
                        temperature: 25500,
                        radii: 8.88,
                        mass: 15.7,
                        zones: '------IIIIIIHOOOOOOO'
                    })
                astro
                    .doc('B2V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 2,
                        magnitude: -5.344,
                        luminosity: 34160,
                        temperature: 23000,
                        radii: 7.76,
                        mass: 13.4,
                        zones: '-----IIIIIIHOOOOOOOO'
                    })
                astro
                    .doc('B3V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 3,
                        magnitude: -4.466,
                        luminosity: 23240,
                        temperature: 20500,
                        radii: 6.64,
                        mass: 11.1,
                        zones: '----IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B4V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 4,
                        magnitude: -3.588,
                        luminosity: 12320,
                        temperature: 18000,
                        radii: 5.52,
                        mass: 8.8,
                        zones: '----IIIIIIHOOOOOOOOO'
                    })
                astro
                    .doc('B5V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 5,
                        magnitude: -2.71,
                        luminosity: 1400,
                        temperature: 15500,
                        radii: 4.4,
                        mass: 6.5,
                        zones: '---IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('B6V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 6,
                        magnitude: -2.188,
                        luminosity: 1138,
                        temperature: 14380,
                        radii: 4.16,
                        mass: 5.84,
                        zones: '---IIIIIIHOOOOOOOOOO'
                    })
                astro
                    .doc('B7V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 7,
                        magnitude: -1.666,
                        luminosity: 876,
                        temperature: 13260,
                        radii: 3.92,
                        mass: 5.18,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('B8V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 8,
                        magnitude: -1.144,
                        luminosity: 614,
                        temperature: 12140,
                        radii: 3.68,
                        mass: 4.52,
                        zones: '--IIIIIIHOOOOOOOOOOO'
                    })
                astro
                    .doc('B9V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'B',
                        classification: 9,
                        magnitude: -0.622,
                        luminosity: 352,
                        temperature: 11020,
                        radii: 3.44,
                        mass: 3.86,
                        zones: '-IIIIIIHOOOOOOOOOOO '
                    })
                astro
                    .doc('F0V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 0,
                        magnitude: 2.5,
                        luminosity: 8.1,
                        temperature: 7400,
                        radii: 1.7,
                        mass: 1.7,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F1V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 1,
                        magnitude: 2.68,
                        luminosity: 7.18,
                        temperature: 7260,
                        radii: 1.64,
                        mass: 1.62,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F2V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 2,
                        magnitude: 2.86,
                        luminosity: 6.26,
                        temperature: 7120,
                        radii: 1.58,
                        mass: 1.54,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F3V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 3,
                        magnitude: 3.04,
                        luminosity: 5.34,
                        temperature: 6980,
                        radii: 1.52,
                        mass: 1.46,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F4V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 4,
                        magnitude: 3.22,
                        luminosity: 4.42,
                        temperature: 6840,
                        radii: 1.46,
                        mass: 1.38,
                        zones: 'IIIIIHOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F5V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 5,
                        magnitude: 3.4,
                        luminosity: 3.5,
                        temperature: 6700,
                        radii: 1.4,
                        mass: 1.3,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F6V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 6,
                        magnitude: 3.634,
                        luminosity: 3.042,
                        temperature: 6560,
                        radii: 1.326,
                        mass: 1.248,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F7V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 7,
                        magnitude: 3.868,
                        luminosity: 2.584,
                        temperature: 6420,
                        radii: 1.252,
                        mass: 1.196,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F8V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 8,
                        magnitude: 4.102,
                        luminosity: 2.126,
                        temperature: 6280,
                        radii: 1.178,
                        mass: 1.144,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F9V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'F',
                        classification: 9,
                        magnitude: 4.336,
                        luminosity: 1.668,
                        temperature: 6140,
                        radii: 1.104,
                        mass: 1.092,
                        zones: 'IIIIHOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G0V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 0,
                        magnitude: 4.57,
                        luminosity: 1.21,
                        temperature: 6000,
                        radii: 1.03,
                        mass: 1.04,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G1V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 1,
                        magnitude: 4.696,
                        luminosity: 1.102,
                        temperature: 5900,
                        radii: 1.006,
                        mass: 1.02,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G2V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 2,
                        magnitude: 4.822,
                        luminosity: 0.994,
                        temperature: 5800,
                        radii: 0.982,
                        mass: 1,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G3V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 3,
                        magnitude: 4.948,
                        luminosity: 0.886,
                        temperature: 5700,
                        radii: 0.958,
                        mass: 0.98,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G4V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 4,
                        magnitude: 5.074,
                        luminosity: 0.778,
                        temperature: 5600,
                        radii: 0.934,
                        mass: 0.96,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G5V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 5,
                        magnitude: 5.2,
                        luminosity: 0.67,
                        temperature: 5500,
                        radii: 0.91,
                        mass: 0.94,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G6V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 6,
                        magnitude: 5.3,
                        luminosity: 0.62,
                        temperature: 5380,
                        radii: 0.9096,
                        mass: 0.917,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G7V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 7,
                        magnitude: 5.4,
                        luminosity: 0.57,
                        temperature: 5260,
                        radii: 0.9092,
                        mass: 0.894,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G8V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 8,
                        magnitude: 5.5,
                        luminosity: 0.52,
                        temperature: 5140,
                        radii: 0.9088,
                        mass: 0.871,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G9V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'G',
                        classification: 9,
                        magnitude: 5.6,
                        luminosity: 0.47,
                        temperature: 5020,
                        radii: 0.9084,
                        mass: 0.848,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K0V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 0,
                        magnitude: 5.7,
                        luminosity: 0.42,
                        temperature: 4900,
                        radii: 0.908,
                        mass: 0.825,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K1V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 1,
                        magnitude: 6.04,
                        luminosity: 0.352,
                        temperature: 4740,
                        radii: 0.8396,
                        mass: 0.774,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K2V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 2,
                        magnitude: 6.38,
                        luminosity: 0.284,
                        temperature: 4580,
                        radii: 0.7712,
                        mass: 0.723,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K3V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 3,
                        magnitude: 6.72,
                        luminosity: 0.216,
                        temperature: 4420,
                        radii: 0.7028,
                        mass: 0.672,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K4V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 4,
                        magnitude: 7.06,
                        luminosity: 0.148,
                        temperature: 4260,
                        radii: 0.6344,
                        mass: 0.621,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K5V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 5,
                        magnitude: 7.4,
                        luminosity: 0.08,
                        temperature: 4100,
                        radii: 0.566,
                        mass: 0.57,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K6V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 6,
                        magnitude: 7.57,
                        luminosity: 0.072,
                        temperature: 3980,
                        radii: 0.5626,
                        mass: 0.5538,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K7V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 7,
                        magnitude: 7.74,
                        luminosity: 0.064,
                        temperature: 3860,
                        radii: 0.5592,
                        mass: 0.5376,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K8V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 8,
                        magnitude: 7.91,
                        luminosity: 0.056,
                        temperature: 3740,
                        radii: 0.5558,
                        mass: 0.5214,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K9V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'K',
                        classification: 9,
                        magnitude: 8.08,
                        luminosity: 0.048,
                        temperature: 3620,
                        radii: 0.5524,
                        mass: 0.5052,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M0V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 0,
                        magnitude: 8.25,
                        luminosity: 0.04,
                        temperature: 3500,
                        radii: 0.549,
                        mass: 0.489,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M1V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 1,
                        magnitude: 8.64,
                        luminosity: 0.0334,
                        temperature: 3360,
                        radii: 0.5108,
                        mass: 0.4574,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M2V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 2,
                        magnitude: 9.03,
                        luminosity: 0.0268,
                        temperature: 3220,
                        radii: 0.4726,
                        mass: 0.4258,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M3V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 3,
                        magnitude: 9.42,
                        luminosity: 0.0202,
                        temperature: 3080,
                        radii: 0.4344,
                        mass: 0.3942,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M4V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 4,
                        magnitude: 9.81,
                        luminosity: 0.0136,
                        temperature: 2940,
                        radii: 0.3962,
                        mass: 0.3626,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M5V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 5,
                        magnitude: 10.2,
                        luminosity: 0.007,
                        temperature: 2800,
                        radii: 0.358,
                        mass: 0.331,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M6V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 6,
                        magnitude: 11.125,
                        luminosity: 0.0055,
                        temperature: 2675,
                        radii: 0.31875,
                        mass: 0.302,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M7V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 7,
                        magnitude: 12.05,
                        luminosity: 0.004,
                        temperature: 2550,
                        radii: 0.2795,
                        mass: 0.273,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M8V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 8,
                        magnitude: 12.975,
                        luminosity: 0.0025,
                        temperature: 2425,
                        radii: 0.24025,
                        mass: 0.244,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M9V')
                    .set({
                        sizeCode: 'V',
                        typeCode: 'M',
                        classification: 9,
                        magnitude: 13.9,
                        luminosity: 0.001,
                        temperature: 2300,
                        radii: 0.201,
                        mass: 0.215,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('A0VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 0,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A1VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 1,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A2VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 2,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A3VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 3,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A4VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 4,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A5VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 5,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A6VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 6,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A7VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 7,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A8VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 8,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('A9VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'A',
                        classification: 9,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B0VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 0,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B1VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 1,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B2VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 2,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B3VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 3,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B4VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 4,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B5VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 5,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B6VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 6,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B7VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 7,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B8VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 8,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('B9VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'B',
                        classification: 9,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('F0VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 0,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('F1VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 1,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('F2VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 2,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('F3VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 3,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('F4VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 4,
                        magnitude: 0,
                        luminosity: 0,
                        temperature: 0,
                        radii: 0,
                        mass: 0,
                        zones: '--------------------'
                    })
                astro
                    .doc('F5VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 5,
                        magnitude: 4.8,
                        luminosity: 0.977,
                        temperature: 6800,
                        radii: 1.14,
                        mass: 0.8,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F6VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 6,
                        magnitude: 5.034,
                        luminosity: 0.846,
                        temperature: 6660,
                        radii: 1.116,
                        mass: 0.76,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F7VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 7,
                        magnitude: 5.268,
                        luminosity: 0.715,
                        temperature: 6520,
                        radii: 1.092,
                        mass: 0.72,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F8VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 8,
                        magnitude: 5.502,
                        luminosity: 0.584,
                        temperature: 6380,
                        radii: 1.068,
                        mass: 0.68,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('F9VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'F',
                        classification: 9,
                        magnitude: 5.736,
                        luminosity: 0.453,
                        temperature: 6240,
                        radii: 1.044,
                        mass: 0.64,
                        zones: 'IIIHOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G0VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 0,
                        magnitude: 5.97,
                        luminosity: 0.322,
                        temperature: 6100,
                        radii: 1.02,
                        mass: 0.6,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G1VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 1,
                        magnitude: 6.096,
                        luminosity: 0.2948,
                        temperature: 6000,
                        radii: 0.926,
                        mass: 0.5856,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G2VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 2,
                        magnitude: 6.222,
                        luminosity: 0.2676,
                        temperature: 5900,
                        radii: 0.832,
                        mass: 0.5712,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G3VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 3,
                        magnitude: 6.348,
                        luminosity: 0.2404,
                        temperature: 5800,
                        radii: 0.738,
                        mass: 0.5568,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G4VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 4,
                        magnitude: 6.474,
                        luminosity: 0.2132,
                        temperature: 5700,
                        radii: 0.644,
                        mass: 0.5424,
                        zones: 'IIHOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G5VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 5,
                        magnitude: 6.6,
                        luminosity: 0.186,
                        temperature: 5600,
                        radii: 0.55,
                        mass: 0.528,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G6VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 6,
                        magnitude: 6.7,
                        luminosity: 0.1722,
                        temperature: 5480,
                        radii: 0.52,
                        mass: 0.5084,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G7VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 7,
                        magnitude: 6.8,
                        luminosity: 0.1584,
                        temperature: 5360,
                        radii: 0.49,
                        mass: 0.4888,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G8VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 8,
                        magnitude: 6.9,
                        luminosity: 0.1446,
                        temperature: 5240,
                        radii: 0.46,
                        mass: 0.4692,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('G9VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'G',
                        classification: 9,
                        magnitude: 7,
                        luminosity: 0.1308,
                        temperature: 5120,
                        radii: 0.43,
                        mass: 0.4496,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K0VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 0,
                        magnitude: 7.1,
                        luminosity: 0.117,
                        temperature: 5000,
                        radii: 0.4,
                        mass: 0.43,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K1VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 1,
                        magnitude: 7.44,
                        luminosity: 0.0986,
                        temperature: 4840,
                        radii: 0.3816,
                        mass: 0.41,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K2VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 2,
                        magnitude: 7.78,
                        luminosity: 0.0802,
                        temperature: 4680,
                        radii: 0.3632,
                        mass: 0.39,
                        zones: 'IHOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K3VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 3,
                        magnitude: 8.12,
                        luminosity: 0.0618,
                        temperature: 4520,
                        radii: 0.3448,
                        mass: 0.37,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K4VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 4,
                        magnitude: 8.46,
                        luminosity: 0.0434,
                        temperature: 4360,
                        radii: 0.3264,
                        mass: 0.35,
                        zones: 'HOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K5VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 5,
                        magnitude: 8.8,
                        luminosity: 0.025,
                        temperature: 4200,
                        radii: 0.308,
                        mass: 0.33,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K6VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 6,
                        magnitude: 8.97,
                        luminosity: 0.0222,
                        temperature: 4080,
                        radii: 0.2976,
                        mass: 0.2948,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K7VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 7,
                        magnitude: 9.14,
                        luminosity: 0.0194,
                        temperature: 3960,
                        radii: 0.2872,
                        mass: 0.2596,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K8VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 8,
                        magnitude: 9.31,
                        luminosity: 0.0166,
                        temperature: 3840,
                        radii: 0.2768,
                        mass: 0.2244,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('K9VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'K',
                        classification: 9,
                        magnitude: 9.48,
                        luminosity: 0.0138,
                        temperature: 3720,
                        radii: 0.2664,
                        mass: 0.1892,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M0VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 0,
                        magnitude: 9.65,
                        luminosity: 0.011,
                        temperature: 3600,
                        radii: 0.256,
                        mass: 0.154,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M1VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 1,
                        magnitude: 10.04,
                        luminosity: 0.0092,
                        temperature: 3460,
                        radii: 0.2256,
                        mass: 0.144,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M2VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 2,
                        magnitude: 10.43,
                        luminosity: 0.0074,
                        temperature: 3320,
                        radii: 0.1952,
                        mass: 0.134,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M3VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 3,
                        magnitude: 10.82,
                        luminosity: 0.0056,
                        temperature: 3180,
                        radii: 0.1648,
                        mass: 0.124,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M4VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 4,
                        magnitude: 11.21,
                        luminosity: 0.0038,
                        temperature: 3040,
                        radii: 0.1344,
                        mass: 0.114,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M5VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 5,
                        magnitude: 11.6,
                        luminosity: 0.002,
                        temperature: 2900,
                        radii: 0.104,
                        mass: 0.104,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M6VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 6,
                        magnitude: 12.525,
                        luminosity: 0.001515,
                        temperature: 2775,
                        radii: 0.09125,
                        mass: 0.0925,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M7VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 7,
                        magnitude: 13.45,
                        luminosity: 0.00103,
                        temperature: 2650,
                        radii: 0.0785,
                        mass: 0.081,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M8VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 8,
                        magnitude: 14.375,
                        luminosity: 0.000545,
                        temperature: 2525,
                        radii: 0.06575,
                        mass: 0.0695,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })
                astro
                    .doc('M9VI')
                    .set({
                        sizeCode: 'VI',
                        typeCode: 'M',
                        classification: 9,
                        magnitude: 15.3,
                        luminosity: 0.00006,
                        temperature: 2400,
                        radii: 0.053,
                        mass: 0.058,
                        zones: 'OOOOOOOOOOOOOOOOOOOO'
                    })

                astro
                    .get()
                    .then((data) => {
                        callback(true)
                    })
            }
        })
}

module.exports = astronomics
