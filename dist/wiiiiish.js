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
})({"FDOr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wiiiiish = function Wiiiiish(options) {
  var _this = this;

  _classCallCheck(this, Wiiiiish);

  _defineProperty(this, "timeouts", []);

  _defineProperty(this, "wishes", []);

  _defineProperty(this, "addText", function () {
    _this.$wishText.classList.add('is-typing');

    var newIndex = Math.floor(Math.random() * _this.wishes.length);

    while (_this.currentIndex === newIndex) {
      newIndex = Math.floor(Math.random() * _this.wishes.length);
    }

    _this.currentIndex = newIndex;

    var letters = _this.wishes[newIndex].split('');

    var chunks = [];
    letters[0] = "<span>".concat(letters[0], "</span>");
    letters.reduce(function (accumulator, currentValue) {
      var chunk = "".concat(accumulator, "<span>").concat(currentValue, "</span>");
      chunks.push(chunk);
      return chunk;
    });
    chunks.forEach(function (chunk, i) {
      _this.timeouts.push(setTimeout(function () {
        _this.$wishText.innerHTML = chunk;
      }, i * _this.options.pause));
    });
  });

  _defineProperty(this, "clear", function () {
    for (var i = 0; i < _this.timeouts.length; i++) {
      clearTimeout(_this.timeouts[i]);
    }
  });

  _defineProperty(this, "removeText", function () {
    _this.$wishText.innerHTML = '';
  });

  _defineProperty(this, "selectText", function () {
    document.querySelectorAll("".concat(_this.options.targetSelector, " span")).forEach(function (span) {
      span.classList.add('is-selected');
    });
  });

  _defineProperty(this, "updateText", function () {
    _this.$wishText.classList.remove('is-typing');

    _this.selectText();

    _this.clear();

    _this.timeouts = [setTimeout(_this.removeText, _this.options.removalDelay), setTimeout(_this.addText, _this.options.removalDelay + _this.options.addDuration)];
  });

  this.options = Object.assign({
    itemsSelector: '#w-list',
    targetSelector: '#w-container',
    triggerSelector: '#w-trigger',
    removalDelay: 300,
    addDuration: 700,
    pause: 100
  }, options);
  this.$trigger = document.querySelector(this.options.triggerSelector);
  this.$wishText = document.querySelector(this.options.targetSelector);
  document.querySelectorAll("".concat(this.options.itemsSelector, " li")).forEach(function (wish) {
    _this.wishes.push(wish.innerHTML);
  });
  this.$trigger.addEventListener('click', this.updateText, false);
};

exports.default = Wiiiiish;
},{}]},{},["FDOr"], "Wiiiiish")
//# sourceMappingURL=/wiiiiish.js.map