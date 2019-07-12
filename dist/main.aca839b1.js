// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"L7Mw":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

function addElementToSelector(divElement, value, className, uniqueId, clickHandler, functionParameter) {
  var elementToAdd = document.createElement('button');
  elementToAdd.innerHTML = value;
  elementToAdd.classList.add(className);
  elementToAdd.classList.add("ripple");
  elementToAdd.id = uniqueId;
  elementToAdd.addEventListener('click', function () {
    return clickHandler(functionParameter);
  });
  divElement.append(elementToAdd);
}

exports.addElementToSelector = addElementToSelector;

function addSeparator(divElement) {
  var elementToAdd = document.createElement('span');
  elementToAdd.innerHTML = " - ";
  elementToAdd.classList.add("separator");
  divElement.append(elementToAdd);
}

exports.addSeparator = addSeparator;

function resetSelector(divElement, filterClass) {
  if (typeof filterClass === 'string') {
    var oldElements = divElement.getElementsByClassName(filterClass);
    Array.from(oldElements).forEach(function (oldElement) {
      return divElement.removeChild(oldElement);
    });
  } else {
    while (divElement.firstChild) {
      divElement.removeChild(divElement.firstChild);
    }
  }
}

exports.resetSelector = resetSelector;

function removeClassForAllIn(element, classToRemove) {
  Array.from(element.getElementsByClassName(classToRemove)).forEach(function (selectedElement) {
    return selectedElement.classList.remove(classToRemove);
  });
}

exports.removeClassForAllIn = removeClassForAllIn;

function addClassToElement(element, classToAdd) {
  element.classList.add(classToAdd);
}

exports.addClassToElement = addClassToElement;
},{}],"ff/e":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var correspondanceEnFr = {
  "C": "Do",
  "D": "Ré",
  "E": "Mi",
  "F": "Fa",
  "G": "Sol",
  "A": "La",
  "B": "Si"
};
var correspondanceFrEn = {
  "Do": "C",
  "Ré": "D",
  "Mi": "E",
  "Fa": "F",
  "Sol": "G",
  "La": "A",
  "Si": "B"
};
var chordLang = "fr";
var _langSelector = null;
var _langSelectorButton = null;

function initLangButton(langSelector) {
  _langSelector = langSelector;
  _langSelectorButton = document.createElement('button');
  _langSelectorButton.innerHTML = chordLang === "fr" ? "en" : "fr";

  _langSelector.appendChild(_langSelectorButton);

  _langSelectorButton.addEventListener("click", function () {
    return setChordLang(chordLang === "fr" ? "en" : "fr");
  });
}

exports.initLangButton = initLangButton;

function getFrChord(enChord) {
  var frMain = correspondanceEnFr[enChord.charAt(0)];
  return frMain + enChord.substring(1);
}

exports.getFrChord = getFrChord;

function getChord(baseChord) {
  if (chordLang === "fr") {
    return getFrChord(baseChord);
  } else {
    return baseChord;
  }
}

exports.getChord = getChord;

function setChordLang(newLang) {
  chordLang = newLang;
  _langSelectorButton.innerHTML = chordLang === "fr" ? "en" : "fr";
}
},{}],"/7qy":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var pianoChords = JSON.parse("{\n  \"pianoChords\": [\n    {\n      \"type\" : \"C\",\n      \"chords\": [\n        {\n          \"name\": \"C\",\n          \"keys\": [\n            {\"name\": \"C\"},\n            {\"name\": \"E\"},\n            {\"name\": \"G\"}\n          ]\n        },\n        {\n          \"name\": \"Cm\",\n          \"keys\": [\n            {\"name\": \"C\"},\n            {\"name\": \"E\u266D\"},\n            {\"name\": \"G\"}\n          ]\n        },\n        {\n          \"name\": \"C 7\",\n          \"keys\": [\n            {\"name\": \"C\"},\n            {\"name\": \"E\"},\n            {\"name\": \"G\"},\n            {\"name\": \"B\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"Cm 7\",\n          \"keys\": [\n            {\"name\": \"C\"},\n            {\"name\": \"E\u266D\"},\n            {\"name\": \"G\"},\n            {\"name\": \"B\u266D\"}\n          ]\n        },\n\n        {\n          \"name\": \"C#\",\n          \"keys\": [\n            {\"name\": \"C#\"},\n            {\"name\": \"F\"},\n            {\"name\": \"G#\"}\n          ]\n        },\n        {\n          \"name\": \"C#m\",\n          \"keys\": [\n            {\"name\": \"C#\"},\n            {\"name\": \"E\"},\n            {\"name\": \"G#\"}\n          ]\n        },\n        {\n          \"name\": \"C# 7\",\n          \"keys\": [\n            {\"name\": \"C#\"},\n            {\"name\": \"F\"},\n            {\"name\": \"G#\"},\n            {\"name\": \"B\"}\n          ]\n        },\n        {\n          \"name\": \"C# 7m\",\n          \"keys\": [\n            {\"name\": \"C#\"},\n            {\"name\": \"E\"},\n            {\"name\": \"G#\"},\n            {\"name\": \"B\"}\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"D\",\n      \"chords\": [\n        {\n          \"name\": \"D\u266D\",\n          \"keys\": [\n            {\"name\": \"D\u266D\"},\n            {\"name\": \"B\"},\n            {\"name\": \"A\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"D\u266Dm\",\n          \"keys\": [\n            {\"name\": \"D\u266D\"},\n            {\"name\": \"E\"},\n            {\"name\": \"A\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"D\u266D 7\",\n          \"keys\": [\n            {\"name\": \"D\u266D\"},\n            {\"name\": \"B\"},\n            {\"name\": \"A\u266D\"},\n            {\"name\": \"B\"}\n          ]\n        },\n        {\n          \"name\": \"D\u266D 7m\",\n          \"keys\": [\n            {\"name\": \"D\u266D\"},\n            {\"name\": \"E\"},\n            {\"name\": \"A\u266D\"},\n            {\"name\": \"B\"}\n          ]\n        },\n    \n        {\n          \"name\": \"D\",\n          \"keys\": [\n            {\"name\": \"D\"},\n            {\"name\": \"F#\"},\n            {\"name\": \"A\"}\n          ]\n        },\n        {\n          \"name\": \"Dm\",\n          \"keys\": [\n            {\"name\": \"D\"},\n            {\"name\": \"F\"},\n            {\"name\": \"A\"}\n          ]\n        },\n        {\n          \"name\": \"D 7\",\n          \"keys\": [\n            {\"name\": \"D\"},\n            {\"name\": \"F#\"},\n            {\"name\": \"A\"},\n            {\"name\": \"C\"}\n          ]\n        },\n        {\n          \"name\": \"Dm 7\",\n          \"keys\": [\n            {\"name\": \"D\"},\n            {\"name\": \"F\"},\n            {\"name\": \"A\"},\n            {\"name\": \"C\"}\n          ]\n        },\n        \n        {\n          \"name\": \"D#\",\n          \"keys\": [\n            {\"name\": \"D#\"},\n            {\"name\": \"G\"},\n            {\"name\": \"A#\"}\n          ]\n        },\n        {\n          \"name\": \"D#m\",\n          \"keys\": [\n            {\"name\": \"D#\"},\n            {\"name\": \"F#\"},\n            {\"name\": \"A#\"}\n          ]\n        },\n        {\n          \"name\": \"D# 7\",\n          \"keys\": [\n            {\"name\": \"D#\"},\n            {\"name\": \"G\"},\n            {\"name\": \"A#\"},\n            {\"name\": \"C#\"}\n          ]\n        },\n        {\n          \"name\": \"D#m 7\",\n          \"keys\": [\n            {\"name\": \"D#\"},\n            {\"name\": \"F#\"},\n            {\"name\": \"A#\"},\n            {\"name\": \"C#\"}\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"E\",\n      \"chords\": [\n        {\n          \"name\": \"E\u266D\",\n          \"keys\": [\n            {\"name\": \"E\u266D\"},\n            {\"name\": \"G\"},\n            {\"name\": \"B\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"E\u266Dm\",\n          \"keys\": [\n            {\"name\": \"E\u266D\"},\n            {\"name\": \"G\u266D\"},\n            {\"name\": \"B\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"E\u266D 7\",\n          \"keys\": [\n            {\"name\": \"E\u266D\"},\n            {\"name\": \"G\"},\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"E\u266Dm 7\",\n          \"keys\": [\n            {\"name\": \"E\u266D\"},\n            {\"name\": \"G\u266D\"},\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\u266D\"}\n          ]\n        },\n    \n        {\n          \"name\": \"E\",\n          \"keys\": [\n            {\"name\": \"E\"},\n            {\"name\": \"G#\"},\n            {\"name\": \"B\"}\n          ]\n        },\n        {\n          \"name\": \"Em\",\n          \"keys\": [\n            {\"name\": \"E\"},\n            {\"name\": \"G\"},\n            {\"name\": \"B\"}\n          ]\n        },\n        {\n          \"name\": \"E 7\",\n          \"keys\": [\n            {\"name\": \"E\"},\n            {\"name\": \"G#\"},\n            {\"name\": \"B\"},\n            {\"name\": \"D\"}\n          ]\n        },\n        {\n          \"name\": \"Em 7\",\n          \"keys\": [\n            {\"name\": \"E\"},\n            {\"name\": \"G\"},\n            {\"name\": \"B\"},\n            {\"name\": \"D\"}\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"F\",\n      \"chords\": [\n        {\n          \"name\": \"F\",\n          \"keys\": [\n            {\"name\": \"F\"},\n            {\"name\": \"A\"},\n            {\"name\": \"C\"}\n          ]\n        },\n        {\n          \"name\": \"Fm\",\n          \"keys\": [\n            {\"name\": \"F\"},\n            {\"name\": \"A\u266D\"},\n            {\"name\": \"C\"}\n          ]\n        },\n        {\n          \"name\": \"F 7\",\n          \"keys\": [\n            {\"name\": \"F\"},\n            {\"name\": \"A\"},\n            {\"name\": \"C\"},\n            {\"name\": \"E\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"Fm 7\",\n          \"keys\": [\n            {\"name\": \"F\"},\n            {\"name\": \"A\u266D\"},\n            {\"name\": \"C\"},\n            {\"name\": \"E\u266D\"}\n          ]\n        },\n    \n        {\n          \"name\": \"F#\",\n          \"keys\": [\n            {\"name\": \"F#\"},\n            {\"name\": \"A#\"},\n            {\"name\": \"C#\"}\n          ]\n        },\n        {\n          \"name\": \"F#m\",\n          \"keys\": [\n            {\"name\": \"F#\"},\n            {\"name\": \"A\"},\n            {\"name\": \"C#\"}\n          ]\n        },\n        {\n          \"name\": \"F# 7\",\n          \"keys\": [\n            {\"name\": \"F#\"},\n            {\"name\": \"A#\"},\n            {\"name\": \"C#\"},\n            {\"name\": \"E\"}\n          ]\n        },\n        {\n          \"name\": \"F#m 7\",\n          \"keys\": [\n            {\"name\": \"F#\"},\n            {\"name\": \"A\"},\n            {\"name\": \"C#\"},\n            {\"name\": \"E\"}\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"G\",\n      \"chords\": [\n        {\n          \"name\": \"G\u266D\",\n          \"keys\": [\n            {\"name\": \"G\u266D\"},\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"G\u266Dm\",\n          \"keys\": [\n            {\"name\": \"G\u266D\"},\n            {\"name\": \"A\"},\n            {\"name\": \"D\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"G\u266D 7\",\n          \"keys\": [\n            {\"name\": \"G\u266D\"},\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\u266D\"},\n            {\"name\": \"E\"}\n          ]\n        },\n        {\n          \"name\": \"G\u266Dm 7\",\n          \"keys\": [\n            {\"name\": \"G\u266D\"},\n            {\"name\": \"A\"},\n            {\"name\": \"D\u266D\"},\n            {\"name\": \"E\"}\n          ]\n        },\n    \n        \n        {\n          \"name\": \"G\",\n          \"keys\": [\n            {\"name\": \"G\"},\n            {\"name\": \"B\"},\n            {\"name\": \"D\"}\n          ]\n        },\n        {\n          \"name\": \"Gm\",\n          \"keys\": [\n            {\"name\": \"G\"},\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\"}\n          ]\n        },\n        {\n          \"name\": \"G 7\",\n          \"keys\": [\n            {\"name\": \"G\"},\n            {\"name\": \"B\"},\n            {\"name\": \"D\"},\n            {\"name\": \"F\"}\n          ]\n        },\n        {\n          \"name\": \"Gm 7\",\n          \"keys\": [\n            {\"name\": \"G\"},\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\"},\n            {\"name\": \"F\"}\n          ]\n        },\n    \n    \n        {\n          \"name\": \"G#\",\n          \"keys\": [\n            {\"name\": \"G#\"},\n            {\"name\": \"C\"},\n            {\"name\": \"D#\"}\n          ]\n        },\n        {\n          \"name\": \"G#m\",\n          \"keys\": [\n            {\"name\": \"G#\"},\n            {\"name\": \"B\"},\n            {\"name\": \"D#\"}\n          ]\n        },\n        {\n          \"name\": \"G# 7\",\n          \"keys\": [\n            {\"name\": \"G#\"},\n            {\"name\": \"C\"},\n            {\"name\": \"D#\"},\n            {\"name\": \"F#\"}\n          ]\n        },\n        {\n          \"name\": \"G#m 7\",\n          \"keys\": [\n            {\"name\": \"G#\"},\n            {\"name\": \"B\"},\n            {\"name\": \"D#\"},\n            {\"name\": \"F#\"}\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"A\",\n      \"chords\": [\n        {\n          \"name\": \"A\u266D\",\n          \"keys\": [\n            {\"name\": \"A\u266D\"},\n            {\"name\": \"C\"},\n            {\"name\": \"E\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"A\u266Dm\",\n          \"keys\": [\n            {\"name\": \"A\u266D\"},\n            {\"name\": \"B\"},\n            {\"name\": \"E\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"A\u266D 7\",\n          \"keys\": [\n            {\"name\": \"A\u266D\"},\n            {\"name\": \"C\"},\n            {\"name\": \"E\u266D\"},\n            {\"name\": \"G\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"A\u266Dm 7\",\n          \"keys\": [\n            {\"name\": \"A\u266D\"},\n            {\"name\": \"B\"},\n            {\"name\": \"E\u266D\"},\n            {\"name\": \"G\u266D\"}\n          ]\n        },\n    \n        {\n          \"name\": \"A\",\n          \"keys\": [\n            {\"name\": \"A\"},\n            {\"name\": \"C#\"},\n            {\"name\": \"E\"}\n          ]\n        },\n        {\n          \"name\": \"Am\",\n          \"keys\": [\n            {\"name\": \"A\"},\n            {\"name\": \"C\"},\n            {\"name\": \"E\"}\n          ]\n        },\n        {\n          \"name\": \"A 7\",\n          \"keys\": [\n            {\"name\": \"A\"},\n            {\"name\": \"C#\"},\n            {\"name\": \"E\"},\n            {\"name\": \"G\"}\n          ]\n        },\n        {\n          \"name\": \"Am 7\",\n          \"keys\": [\n            {\"name\": \"A\"},\n            {\"name\": \"C\"},\n            {\"name\": \"E\"},\n            {\"name\": \"G\"}\n          ]\n        },\n    \n    \n        {\n          \"name\": \"A#\",\n          \"keys\": [\n            {\"name\": \"A#\"},\n            {\"name\": \"D\"},\n            {\"name\": \"F\"}\n          ]\n        },\n        {\n          \"name\": \"A#m\",\n          \"keys\": [\n            {\"name\": \"A#\"},\n            {\"name\": \"C#\"},\n            {\"name\": \"F\"}\n          ]\n        },\n        {\n          \"name\": \"A# 7\",\n          \"keys\": [\n            {\"name\": \"A#\"},\n            {\"name\": \"D\"},\n            {\"name\": \"F\"},\n            {\"name\": \"G#\"}\n          ]\n        },\n        {\n          \"name\": \"A#m 7\",\n          \"keys\": [\n            {\"name\": \"A#\"},\n            {\"name\": \"C#\"},\n            {\"name\": \"F\"},\n            {\"name\": \"G#\"}\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"B\",\n      \"chords\": [\n        {\n          \"name\": \"B\u266D\",\n          \"keys\": [\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\"},\n            {\"name\": \"F\"}\n          ]\n        },\n        {\n          \"name\": \"B\u266Dm\",\n          \"keys\": [\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\u266D\"},\n            {\"name\": \"F\"}\n          ]\n        },\n        {\n          \"name\": \"B\u266D 7\",\n          \"keys\": [\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\"},\n            {\"name\": \"F\"},\n            {\"name\": \"A\u266D\"}\n          ]\n        },\n        {\n          \"name\": \"B\u266Dm 7\",\n          \"keys\": [\n            {\"name\": \"B\u266D\"},\n            {\"name\": \"D\u266D\"},\n            {\"name\": \"F\"},\n            {\"name\": \"A\u266D\"}\n          ]\n        },\n    \n        {\n          \"name\": \"B\",\n          \"keys\": [\n            {\"name\": \"B\"},\n            {\"name\": \"D#\"},\n            {\"name\": \"F#\"}\n          ]\n        },\n        {\n          \"name\": \"Bm\",\n          \"keys\": [\n            {\"name\": \"B\"},\n            {\"name\": \"D\"},\n            {\"name\": \"F#\"}\n          ]\n        },\n        {\n          \"name\": \"B 7\",\n          \"keys\": [\n            {\"name\": \"B\"},\n            {\"name\": \"D#\"},\n            {\"name\": \"F#\"},\n            {\"name\": \"A\"}\n          ]\n        },\n        {\n          \"name\": \"Bm 7\",\n          \"keys\": [\n            {\"name\": \"B\"},\n            {\"name\": \"D\"},\n            {\"name\": \"F#\"},\n            {\"name\": \"A\"}\n          ]\n        }\n      ]\n    }\n  ]\n}");
exports.pianoChords = pianoChords;
},{}],"cqb6":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.ukuleleChords = ukuleleChords;
},{}],"+9D9":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.guitarChords = guitarChords;
},{}],"T0E0":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var pianoChords_1 = require("../db/pianoChords");

var ukuleleChords_1 = require("../db/ukuleleChords");

var guitarChords_1 = require("../db/guitarChords");

function getAllPianoChords() {
  return pianoChords_1.pianoChords.pianoChords;
}

exports.getAllPianoChords = getAllPianoChords;

function getAllUkuleleChords() {
  return ukuleleChords_1.ukuleleChords;
}

exports.getAllUkuleleChords = getAllUkuleleChords;

function getAllGuitarChords() {
  return guitarChords_1.guitarChords;
}

exports.getAllGuitarChords = getAllGuitarChords;
},{"../db/pianoChords":"/7qy","../db/ukuleleChords":"cqb6","../db/guitarChords":"+9D9"}],"hgL1":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var PianoSVG = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"100%\" viewBox=\"0 0 1120 400\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <title>Piano Keyboard</title>\n  <defs></defs>\n    <g id=\"piano-keyboard\">\n      <g id=\"octave-1\">\n        <rect id=\"octave-1-C-key\" class=\"piano-key white-key\" data-piano-key=\"C\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"0\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-1-D-key\" class=\"piano-key white-key\" data-piano-key=\"D\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"80\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-1-E-key\" class=\"piano-key white-key\" data-piano-key=\"E\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"160\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-1-F-key\" class=\"piano-key white-key\" data-piano-key=\"F\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"240\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-1-G-key\" class=\"piano-key white-key\" data-piano-key=\"G\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"320\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-1-A-key\" class=\"piano-key white-key\" data-piano-key=\"A\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"400\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-1-B-key\" class=\"piano-key white-key\" data-piano-key=\"B\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"480\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-1-C#-key\" class=\"piano-key black-key\" data-piano-key=\"C#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"60\" y=\"0\" width=\"40\" height=\"280\"></rect>\n        <rect id=\"octave-1-D#-key\" class=\"piano-key black-key\" data-piano-key=\"D#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"140\" y=\"0\" width=\"40\" height=\"280\"></rect>\n        <rect id=\"octave-1-F#-key\" class=\"piano-key black-key\" data-piano-key=\"F#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"300\" y=\"0\" width=\"40\" height=\"280\"></rect>\n        <rect id=\"octave-1-G#-key\" class=\"piano-key black-key\" data-piano-key=\"G#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"380\" y=\"0\" width=\"40\" height=\"280\"></rect>\n        <rect id=\"octave-1-A#-key\" class=\"piano-key black-key\" data-piano-key=\"A#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"460\" y=\"0\" width=\"40\" height=\"280\"></rect>\n      </g>\n      <g id=\"octave-2\" transform=\"translate(560.000000, 0.000000)\">\n        <rect id=\"octave-2-C-key\" class=\"piano-key white-key\" data-piano-key=\"C\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"0\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-2-D-key\" class=\"piano-key white-key\" data-piano-key=\"D\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"80\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-2-E-key\" class=\"piano-key white-key\" data-piano-key=\"E\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"160\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-2-F-key\" class=\"piano-key white-key\" data-piano-key=\"F\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"240\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-2-G-key\" class=\"piano-key white-key\" data-piano-key=\"G\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"320\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-2-A-key\" class=\"piano-key white-key\" data-piano-key=\"A\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"400\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-2-B-key\" class=\"piano-key white-key\" data-piano-key=\"B\" stroke=\"#555555\" fill=\"#FFFFF7\" x=\"480\" y=\"0\" width=\"80\" height=\"400\"></rect>\n        <rect id=\"octave-2-C#-key\" class=\"piano-key black-key\" data-piano-key=\"C#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"60\" y=\"0\" width=\"40\" height=\"280\"></rect>\n        <rect id=\"octave-2-D#-key\" class=\"piano-key black-key\" data-piano-key=\"D#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"140\" y=\"0\" width=\"40\" height=\"280\"></rect>\n        <rect id=\"octave-2-F#-key\" class=\"piano-key black-key\" data-piano-key=\"F#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"300\" y=\"0\" width=\"40\" height=\"280\"></rect>\n        <rect id=\"octave-2-G#-key\" class=\"piano-key black-key\" data-piano-key=\"G#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"380\" y=\"0\" width=\"40\" height=\"280\"></rect>\n        <rect id=\"octave-2-A#-key\" class=\"piano-key black-key\" data-piano-key=\"A#\" stroke=\"#979797\" fill=\"#4B4B4B\" x=\"460\" y=\"0\" width=\"40\" height=\"280\"></rect>\n      </g>\n    </g>\n</svg>";
exports.PianoSVG = PianoSVG;
},{}],"2+KU":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var PianoKeyboard_1 = require("../../svg/PianoKeyboard");

var Serializer = new XMLSerializer();
var blackListBlackKeys = ["D♭", "E♭", "G♭", "A♭", "B♭"];
var corBlackKeysEn = {
  "C#": "D♭",
  "D♭": "C#",
  "D#": "E♭",
  "E♭": "D#",
  "F#": "G♭",
  "G♭": "F#",
  "G#": "A♭",
  "A♭": "G#",
  "A#": "B♭",
  "B♭": "A#"
};
var keyOrder = {
  C: 1,
  "C#": 2,
  D: 3,
  "D#": 4,
  E: 5,
  F: 6,
  "F#": 7,
  G: 8,
  "G#": 9,
  A: 10,
  "A#": 11,
  B: 12
};

function renderSvg(element, chord) {
  var piano = new DOMParser().parseFromString(PianoKeyboard_1.PianoSVG, 'text/xml'); // La première touche est forcément sur le premier octave

  var firstKey = chord.keys[0].name;

  if (blackListBlackKeys.includes(firstKey)) {
    firstKey = corBlackKeysEn[firstKey];
  }

  var keyToSelect = "octave-1-" + firstKey + "-key";
  piano.getElementById(keyToSelect).setAttribute("fill", "#ff0000");
  var isOctave2 = false;

  for (var i = 1; i < chord.keys.length; i++) {
    var currentKey = chord.keys[i].name;

    if (!isOctave2 && keyOrder[firstKey.charAt(0)] > keyOrder[currentKey.charAt(0)]) {
      isOctave2 = true;
    }

    if (blackListBlackKeys.includes(currentKey)) {
      currentKey = corBlackKeysEn[currentKey];
    }

    keyToSelect = isOctave2 ? "octave-2-" : "octave-1-";
    keyToSelect += currentKey + "-key";
    piano.getElementById(keyToSelect).setAttribute("fill", "#ff0000");
  }

  element.innerHTML = Serializer.serializeToString(piano);
}

exports.renderSvg = renderSvg;
},{"../../svg/PianoKeyboard":"hgL1"}],"IDG3":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var chordsHelper_1 = require("../../helpers/chordsHelper");

var pianoSvgHandler_1 = require("./pianoSvgHandler");

var selectorHandler_1 = require("../selectorHandler");

var pianoChordsTypeList = null;

function initPiano() {
  pianoChordsTypeList = chordsHelper_1.getAllPianoChords();
  initPianoChordTypeSelector();
}

exports.initPiano = initPiano;

function initPianoChordTypeSelector() {
  selectorHandler_1.handleInstrumentClick('Piano', pianoChordsTypeList.map(function (element) {
    return {
      name: element.type,
      parameter: element
    };
  }), handlePianoChordTypeClick);
}

function handlePianoChordTypeClick(type) {
  selectorHandler_1.handleChordTypeClick("type" + type.type, type.chords.map(function (chord) {
    return {
      name: chord.name,
      parameter: chord
    };
  }), handlePianoChordClick);
}

function handlePianoChordClick(chord) {
  selectorHandler_1.handleChordClick("chord" + chord.name, pianoSvgHandler_1.renderSvg, [chord]);
}
},{"../../helpers/chordsHelper":"T0E0","./pianoSvgHandler":"2+KU","../selectorHandler":"djcK"}],"dBZ/":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var chordEnFr_1 = require("../../helpers/chordEnFr");

var _chord = null;
var _element = null;
var _renderDiv = null;
var _pagesDiv = null;
var _currentPosition = 0;

function initUkuleleRender(element, chord) {
  _chord = chord;
  _element = element;
  _currentPosition = 0;

  while (_element.firstChild) {
    _element.removeChild(_element.firstChild);
  }

  _renderDiv = document.createElement('div');
  _renderDiv.id = "renderUkulele";
  _pagesDiv = document.createElement('div');
  _pagesDiv.id = "pagesUkulele";

  _element.appendChild(_renderDiv);

  _element.appendChild(_pagesDiv);

  var elementsToAdd = '';
  elementsToAdd += '<mwc-button raised id="prev">Previous</mwc-button>';
  elementsToAdd += '<span id="pagesNumber"></span>';
  elementsToAdd += '<mwc-button raised id="next">Next</mwc-button>';
  _pagesDiv.innerHTML = elementsToAdd;
  var buttonPrev = document.getElementById('prev');
  var buttonNext = document.getElementById('next');
  if (buttonNext !== null) buttonNext.addEventListener('click', nextPageHandler);
  if (buttonPrev !== null) buttonPrev.addEventListener('click', prevPageHandler);
  ukuleleRender(_currentPosition);
}

exports.initUkuleleRender = initUkuleleRender;

function ukuleleRender(currentPosition) {
  if (currentPosition >= _chord.positions.length) return;
  var chordPosition = _chord.positions[currentPosition];
  var frets = chordPosition.frets.join('');
  var fingers = chordPosition.fingers.join('');
  var position = chordPosition.baseFret;
  _renderDiv.innerHTML = '<uke-chord frets="' + frets + '" fingers="' + fingers + '" position="' + position + '" name="' + chordEnFr_1.getChord(_chord.key) + _chord.suffix + '"></uke-chord>';
  renderButton(currentPosition);
}

function renderButton(currentPosition) {
  var buttonPrev = document.getElementById('prev');
  var buttonNext = document.getElementById('next');
  var elementsToAdd = '';

  if (currentPosition === 0) {
    buttonPrev.setAttribute("disabled", '');
    buttonNext.removeAttribute('disabled');
  } else if (currentPosition === _chord.positions.length - 1) {
    buttonNext.setAttribute("disabled", '');
    buttonPrev.removeAttribute('disabled');
  } else {
    buttonNext.removeAttribute('disabled');
    buttonPrev.removeAttribute('disabled');
  }

  document.getElementById('pagesNumber').innerHTML = currentPosition + 1 + "/" + _chord.positions.length;
}

function nextPageHandler() {
  _currentPosition += 1;
  ukuleleRender(_currentPosition);
}

function prevPageHandler() {
  _currentPosition -= 1;
  ukuleleRender(_currentPosition);
}
},{"../../helpers/chordEnFr":"ff/e"}],"yJ9n":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var chordsHelper_1 = require("../../helpers/chordsHelper");

var selectorHandler_1 = require("../selectorHandler");

var ukuleleSvgHandler_1 = require("./ukuleleSvgHandler");

var ukuleleChords = null;

function initUkulele() {
  ukuleleChords = chordsHelper_1.getAllUkuleleChords();
  initUkuleleChordTypeSelector();
}

exports.initUkulele = initUkulele;

function initUkuleleChordTypeSelector() {
  selectorHandler_1.handleInstrumentClick('Ukulele', ukuleleChords.keys.map(function (element) {
    return {
      name: element,
      parameter: element
    };
  }), handleUkuleleChordTypeClick);
}

function handleUkuleleChordTypeClick(chord) {
  selectorHandler_1.handleChordTypeClick("type" + chord, ukuleleChords.suffixes.map(function (suffix) {
    return {
      name: chord + suffix,
      parameter: {
        "chord": chord,
        "suffix": suffix
      }
    };
  }), handleUkuleleChordClick);
}

function handleUkuleleChordClick(chord) {
  var chordToRender = ukuleleChords.chords[chord.chord].find(function (ukuleleChord) {
    return ukuleleChord.suffix === chord.suffix;
  });
  selectorHandler_1.handleChordClick("chord" + chord.chord + chord.suffix, ukuleleSvgHandler_1.initUkuleleRender, [chordToRender]);
}
},{"../../helpers/chordsHelper":"T0E0","../selectorHandler":"djcK","./ukuleleSvgHandler":"dBZ/"}],"T0pH":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var chordEnFr_1 = require("../../helpers/chordEnFr");

var _chord = null;
var _element = null;
var _renderDiv = null;
var _pagesDiv = null;
var _currentPosition = 0;

function initGuitarRender(element, chord) {
  _chord = chord;
  _element = element;
  _currentPosition = 0;

  while (_element.firstChild) {
    _element.removeChild(_element.firstChild);
  }

  _renderDiv = document.createElement('div');
  _renderDiv.id = "renderGuitar";
  _pagesDiv = document.createElement('div');
  _pagesDiv.id = "pagesUkulele";

  _element.appendChild(_renderDiv);

  _element.appendChild(_pagesDiv);

  var elementsToAdd = '';
  elementsToAdd += '<mwc-button raised id="prev">Previous</mwc-button>';
  elementsToAdd += '<span id="pagesNumber"></span>';
  elementsToAdd += '<mwc-button raised id="next">Next</mwc-button>';
  _pagesDiv.innerHTML = elementsToAdd;
  var buttonPrev = document.getElementById('prev');
  var buttonNext = document.getElementById('next');
  if (buttonNext !== null) buttonNext.addEventListener('click', nextPageHandler);
  if (buttonPrev !== null) buttonPrev.addEventListener('click', prevPageHandler);
  guitarRender(_currentPosition);
}

exports.initGuitarRender = initGuitarRender;

function guitarRender(currentPosition) {
  if (currentPosition >= _chord.positions.length) return;
  var chordPosition = _chord.positions[currentPosition];
  var frets = "";
  chordPosition.frets.forEach(function (fret) {
    return frets += fret === -1 ? 'x' : fret;
  });
  var fingers = chordPosition.fingers.join('');
  var position = chordPosition.baseFret;
  console.log(frets);
  _renderDiv.innerHTML = '<p></p>base fret : ' + chordPosition.baseFret + '</p> <tab-chord value="' + frets + '" name="' + chordEnFr_1.getChord(_chord.key) + _chord.suffix + '"></tab-chord>';
  renderButton(currentPosition);
}

function renderButton(currentPosition) {
  var buttonPrev = document.getElementById('prev');
  var buttonNext = document.getElementById('next');

  if (currentPosition === 0) {
    buttonPrev.setAttribute("disabled", '');
    buttonNext.removeAttribute('disabled');
  } else if (currentPosition === _chord.positions.length - 1) {
    buttonNext.setAttribute("disabled", '');
    buttonPrev.removeAttribute('disabled');
  } else {
    buttonNext.removeAttribute('disabled');
    buttonPrev.removeAttribute('disabled');
  }

  document.getElementById('pagesNumber').innerHTML = currentPosition + 1 + "/" + _chord.positions.length;
}

function nextPageHandler() {
  _currentPosition += 1;
  guitarRender(_currentPosition);
}

function prevPageHandler() {
  _currentPosition -= 1;
  guitarRender(_currentPosition);
}
},{"../../helpers/chordEnFr":"ff/e"}],"XIi/":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var chordsHelper_1 = require("../../helpers/chordsHelper");

var selectorHandler_1 = require("../selectorHandler");

var guitarSvgHandler_1 = require("./guitarSvgHandler");

var guitarChords = null;

function initGuitar() {
  guitarChords = chordsHelper_1.getAllGuitarChords();
  initGuitarChordTypeSelector();
}

exports.initGuitar = initGuitar;

function initGuitarChordTypeSelector() {
  selectorHandler_1.handleInstrumentClick('Guitar', guitarChords.keys.map(function (element) {
    return {
      name: element,
      parameter: element
    };
  }), handleGuitarChordTypeClick);
}

function handleGuitarChordTypeClick(chord) {
  selectorHandler_1.handleChordTypeClick("type" + chord, guitarChords.suffixes.map(function (suffix) {
    return {
      name: chord + suffix,
      parameter: {
        "chord": chord,
        "suffix": suffix
      }
    };
  }), handleGuitarChordClick);
}

function handleGuitarChordClick(chord) {
  var chordToRender = guitarChords.chords[chord.chord].find(function (guitarChord) {
    return guitarChord.suffix === chord.suffix;
  });
  console.log(chordToRender);
  selectorHandler_1.handleChordClick("chord" + chord.chord + chord.suffix, guitarSvgHandler_1.initGuitarRender, [chordToRender]);
}
},{"../../helpers/chordsHelper":"T0E0","../selectorHandler":"djcK","./guitarSvgHandler":"T0pH"}],"djcK":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var selectorHelper_1 = require("../helpers/selectorHelper");

var chordEnFr_1 = require("../helpers/chordEnFr");

var pianoHandler_1 = require("./piano/pianoHandler");

var ukuleleHandler_1 = require("./ukulele/ukuleleHandler");

var guitarHandler_1 = require("./guitar/guitarHandler");

var _instrumentSelector = null;
var _chordShow = null;
var _chordSelector = null;
var _chordTypeSelector = null;

function init(instrumentSelector, chordTypeSelector, chordSelector, chordShow) {
  _instrumentSelector = instrumentSelector;
  _chordTypeSelector = chordTypeSelector;
  _chordSelector = chordSelector;
  _chordShow = chordShow;
}

exports.init = init;

function initInstrumentSelector() {
  selectorHelper_1.addElementToSelector(_instrumentSelector, 'Piano', "instrument", "Piano", pianoHandler_1.initPiano, null);
  selectorHelper_1.addElementToSelector(_instrumentSelector, 'Ukulele', "instrument", "Ukulele", ukuleleHandler_1.initUkulele, null);
  selectorHelper_1.addElementToSelector(_instrumentSelector, 'Guitar', "instrument", "Guitar", guitarHandler_1.initGuitar, null);
}

exports.initInstrumentSelector = initInstrumentSelector;

function handleInstrumentClick(instrument, chordTypeInit, onClickHandler) {
  selectorHelper_1.removeClassForAllIn(_instrumentSelector, "selected");
  selectorHelper_1.addClassToElement(document.getElementById(instrument), 'selected');
  selectorHelper_1.resetSelector(_chordTypeSelector, "separator");
  selectorHelper_1.resetSelector(_chordTypeSelector, 'chordType');

  for (var index = 0; index < chordTypeInit.length; index++) {
    var chordName = chordTypeInit[index];
    selectorHelper_1.addElementToSelector(_chordTypeSelector, chordEnFr_1.getChord(chordName.name), "chordType", "type" + chordName.name, onClickHandler, chordName.parameter);
    if (index !== chordTypeInit.length - 1) selectorHelper_1.addSeparator(_chordTypeSelector);
  }
}

exports.handleInstrumentClick = handleInstrumentClick;

function handleChordTypeClick(newTypeSelected, chordsInit, onClickHandler) {
  selectorHelper_1.removeClassForAllIn(_chordTypeSelector, "selected");
  selectorHelper_1.addClassToElement(document.getElementById(newTypeSelected), 'selected');
  selectorHelper_1.resetSelector(_chordSelector, 'chord');
  selectorHelper_1.resetSelector(_chordSelector, "separator");

  for (var index = 0; index < chordsInit.length; index++) {
    var chord = chordsInit[index];
    selectorHelper_1.addElementToSelector(_chordSelector, chordEnFr_1.getChord(chord.name), "chord", "chord" + chord.name, onClickHandler, chord.parameter);
    if (index !== chordsInit.length - 1) selectorHelper_1.addSeparator(_chordSelector);
  }
}

exports.handleChordTypeClick = handleChordTypeClick;

function handleChordClick(newChordSelected, renderFunction, parameter) {
  selectorHelper_1.removeClassForAllIn(_chordSelector, "selected");
  selectorHelper_1.addClassToElement(document.getElementById(newChordSelected), 'selected');
  renderFunction.apply(void 0, [_chordShow].concat(parameter));
}

exports.handleChordClick = handleChordClick;
},{"../helpers/selectorHelper":"L7Mw","../helpers/chordEnFr":"ff/e","./piano/pianoHandler":"IDG3","./ukulele/ukuleleHandler":"yJ9n","./guitar/guitarHandler":"XIi/"}],"ZCfc":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var selectorHandler_1 = require("./handlers/selectorHandler");

var chordEnFr_1 = require("./helpers/chordEnFr");

var langSelector = document.getElementById('langSelector');
var instrumentSelector = document.getElementById('instrumentSelector');
var chordTypeSelector = document.getElementById('chordTypeSelector');
var chordSelector = document.getElementById('chordSelector');
var chordShow = document.getElementById('chordShow');
chordEnFr_1.initLangButton(langSelector);
selectorHandler_1.init(instrumentSelector, chordTypeSelector, chordSelector, chordShow);
selectorHandler_1.initInstrumentSelector();
},{"./handlers/selectorHandler":"djcK","./helpers/chordEnFr":"ff/e"}]},{},["ZCfc"], null)
//# sourceMappingURL=/chords-vanilla/main.aca839b1.js.map