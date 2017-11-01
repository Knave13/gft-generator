import Random from 'random-js'
var r = new Random()

var _vowel = [ 
  "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "a", "e", "i", "y" ]
var _phoneticsSuffix = [
   "ct",
   "dd",
   "gg",
   "ld", "lg", "lk", "ll", "lm", "ln", "lc", "lt", "ls",
   "ph", "pp",
   "rb", "rc", "rd", "rf", "rg", "rk", "rl", "rm", "rn", "rp", "rr", "rs", "rt", "rv",
   "sc", "sh", "sk", "sm", "sp", "ss", "st",
   "th"]
var _phoneticsPrefix = [
   "bl", "br",
   "ch", "cl", "cr",
   "dr", "dw",
   "fl", "fr",
   "gl", "gr",
   "kl", "kr", "kn",
   "ph", "pl", "pr", 
   "qu",
   "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw",
   "th", "tr",
   "wh", "wr"]
var _consonant = [ 
   "b",
   "c",
   "d",
   "f",
   "g",
   "h",
   "j",
   "k",
   "l", "l", "l",
   "m",
   "n",
   "p",
   "qu",
   "r", "r", "r",
   "s", "s", "s",
   "t", "t",
   "v",
   "w",
   "x",
   "y",
   "z"]
var _swearWords = [
"shit", "fuck", "cock", "damn", "penis", "cunt", "twot", "prick", "ass", "butt", "puss", 
                    "anus", "anal", "tit", "boob", "breast", "hell", "snatch", "dick", "fuk", "cok", "breast", "pube",
                    "virgin", "pubic", "snatch", "nip", "tush", "bitch", "arse", "boll", "jap", "nip", "gook", "homo",
                    "chink", "clit", "cum", "slut", "slag", "dego", "dildo", "dyke", "dike", "fag", "gay", "kike", "skank", 
                    "hootch", "hooch", "kyke", "lesbo", "jesus", "mick", "muff", "nig", "nut", "negro", "black", "piss",
                    "pecker", "pussi", "queef", "qeef", "scrot", "spic", "smeg", "spick", "vajina", "vag", "whore", "wop",
                    "bra", "prik", "sex", "penus", "penas"]

var _vowelCount = _vowel.length
var _consonantCount = _consonant.length
var _suffixCount = _phoneticsSuffix.length
var _prefixCount = _phoneticsPrefix.length

var getNameSegment = (callback) => {
  var name = ""
  var roll = r.integer(1,20)
  if (roll < 5) { // v(c,s)[v(c,s)[v(c,s)]]
    name += _vowel[r.integer(0, _vowelCount - 1)]
    if (r.bool()) {
      name += _consonant[r.integer(0, _consonantCount - 1)]
      if (r.bool()) {
        name += _consonant[r.integer(0, _consonantCount - 1)]
        if (r.bool()) {
            name += _vowel[r.integer(0, _vowelCount - 1)]
        }
      }
    } else {
      name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
    }
    name += _vowel[r.integer(0, _vowelCount - 1)]
    if (r.bool()) {
      if (r.bool()) {
        name += _consonant[r.integer(0, _consonantCount - 1)]
      } else {
        name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
      }
      if (r.bool()) {
        name += _vowel[r.integer(0, _vowelCount - 1)]
        if (r.bool()) {
          name += _consonant[r.integer(0, _consonantCount - 1)]
        } else {
          name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
        }
      }
      if (r.bool()) {
        name += _vowel[r.integer(0, _vowelCount - 1)]
      }
    }
  } else if (roll < 10) { // cv(c,s)[v[(c,s)]]
    name += _consonant[r.integer(0, _consonantCount - 1)]
    name += _vowel[r.integer(0, _vowelCount - 1)]
    if (r.bool()) {
      name += _consonant[r.integer(0, _consonantCount - 1)]
      if (r.bool()) {
        name += _consonant[r.integer(0, _consonantCount - 1)]
      }
    } else {
      name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
    }
    if (r.bool()) {
      name += _vowel[r.integer(0, _vowelCount - 1)]
    }
  } else if (roll < 15) { // pv(c,s)[v(c,s)] 
    name += _phoneticsPrefix[r.integer(0, _prefixCount - 1)]
    name += _vowel[r.integer(0, _vowelCount - 1)]
    if (r.bool()) {
      name += _consonant[r.integer(0, _consonantCount - 1)]
      if (r.bool()) {
          name += _consonant[r.integer(0, _consonantCount - 1)]
          name += _vowel[r.integer(0, _vowelCount - 1)]
      }
    } else {
      name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
    }
    if (r.bool()) {
      name += _vowel[r.integer(0, _vowelCount - 1)]
      if (r.bool()) {
        if (r.bool()) {
            name += _consonant[r.integer(0, _consonantCount - 1)]
        } else {
          name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
          if (r.bool()) {
            name += _vowel[r.integer(0, _vowelCount - 1)]
          }
        }
      }
    }
  } else if (roll < 18) { // pv((c,s),v(c,s))[v(c,s)]
    name += _phoneticsPrefix[r.integer(0, _prefixCount - 1)]
    name += _vowel[r.integer(0, _vowelCount - 1)]
    if (r.bool()) {
      if (r.bool()) {
        name += _consonant[r.integer(0, _consonantCount - 1)]
      } else {
        name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
      }
    } else {
      name += _vowel[r.integer(0, _vowelCount - 1)]
      if (r.bool()) {
        name += _consonant[r.integer(0, _consonantCount - 1)]
        if (r.bool()) {
          name += _consonant[r.integer(0, _consonantCount - 1)]
        }
      } else {
        name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
      }
    }
    if (r.bool()) {
      name += _vowel[r.integer(0, _vowelCount - 1)]
      if (r.bool()) {
          name += _consonant[r.integer(0, _consonantCount - 1)]
      } else {
        name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
        if (r.bool()) {
          name += _vowel[r.integer(0, _vowelCount - 1)]
        }
      }
    }
  } else { // vs[v(c,s)[v(c,s)]]
    name += _vowel[r.integer(0, _vowelCount - 1)]
    name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
    name += _vowel[r.integer(0, _vowelCount - 1)]
    if (r.bool())
    {
      if (r.bool()) {
        name += _consonant[r.integer(0, _consonantCount - 1)]
      } else {
        name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
      }
      if (r.bool()) {
        name += _vowel[r.integer(0, _vowelCount - 1)]
        if (r.bool()) {
          name += _consonant[r.integer(0, _consonantCount - 1)]
        } else {
          name += _phoneticsSuffix[r.integer(0, _suffixCount - 1)]
        }
        if (r.bool()) {
          name += _vowel[r.integer(0, _vowelCount - 1)]
        }
      }
    }
  }

  callback(name)
}

var getName = (callback) => {
  var valid = false
  var name = ""
  while (!valid) {
    getNameSegment((name) => {
      name = capitalizeFirstLetter(name)
      var clean = true
      var swearWord = ""
      for (var i=0; i<_swearWords.length; i++) {
        swearWord = _swearWords[i]
        if (name.toLowerCase().indexOf(swearWord) > -1) {
          clean = false
          break
        }
      }

      valid = clean
      if (valid) {
        return callback(name)
      }
    })
  }
}

var capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

var generator = {
  name: (callback) => {
    process.nextTick(() => {
      getName(callback)
    })
  },
  getName: () => {
    var newName
    getName((name) => {
      newName = name
    })
    process.nextTick(() => {})
    return newName
  }
}

module.exports = generator