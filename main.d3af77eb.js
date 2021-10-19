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
})({"E0ab":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var stringDefault = "\n.face .nose-tip::after, .face .nose-tip::before, .face .eye::before, .face .mouth .lip > .lip-left::after, .face .mouth .lip > .lip-right::after, .face .mouth .jaw .lower-jaw::after {\n  content: '';\n  display: block;\n}\n\n.face .cheek {\n  z-index: 2;\n}\n";
var _default = stringDefault;
exports.default = _default;
},{}],"OqZs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\nbody {\n  background-color: #ffe035;\n  min-height: 100vh;\n  width: 100vw;\n}\n\n.face {\n  min-height: 35vh;\n  height: 300px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  width: 500px;\n}\n\n.face .nose-tip {\n  border: 10px solid #ffe035;\n  border-bottom-width: 1px;\n  border-left-color: #ffe035;\n  border-right-color: #ffe035;\n  border-top-color: #000;\n  left: 50%;\n  margin-left: -10px;\n  position: absolute;\n  top: 100px;\n  z-index: 2;\n}\n\n.face .nose-tip::after {\n  height: 22px;\n  width: 22px;\n  border: 3px solid #ffe035;\n  border-radius: 0 0 12px 12px / 0 0 20px 20px;\n  border-top-color: transparent;\n  left: -11px;\n  overflow: hidden;\n  position: absolute;\n  top: -11px;\n  z-index: 1;\n}\n\n.face .nose-tip::before {\n  height: 10px;\n  width: 20px;\n  background-color: #000;\n  border-radius: 10px / 5px;\n  left: -10px;\n  position: absolute;\n  top: -16px;\n}\n\n.face .eye {\n  height: 64px;\n  width: 64px;\n  background: #2e2e2e;\n  border: 2px solid #000;\n  border-radius: 100%;\n  left: 50%;\n  margin-left: -32px;\n  position: absolute;\n  top: 70px;\n  transform: translateX(-150px);\n}\n\n.face .eye-right {\n  transform: translateX(150px);\n}\n\n.face .eye::before {\n  height: 30px;\n  width: 30px;\n  background-color: #f5f5f5;\n  border-radius: 50%;\n  left: 5px;\n  position: relative;\n  top: 5px;\n}\n\n.face .cheek .cheek-left, .face .cheek .cheek-right {\n  height: 86px;\n  width: 86px;\n  background-color: #f00;\n  border: 2px solid #000;\n  border-radius: 50%;\n  left: 50%;\n  margin-left: -43px;\n  position: absolute;\n  top: 180px;\n}\n\n.face .cheek-left {\n  transform: translateX(-180px);\n}\n\n.face .cheek-right {\n  transform: translateX(180px);\n}\n\n.face .mouth {\n  height: 200px;\n  width: 220px;\n  left: 50%;\n  margin-left: -110px;\n  position: absolute;\n  top: 135px;\n}\n\n.face .mouth .lip > .lip-left, .face .mouth .lip > .lip-right {\n  height: 30px;\n  width: 110px;\n  background-color: #ffe035;\n  border: 4px solid #000;\n  border-top-color: #ffe035;\n  border-top-right-radius: 60px 30px;\n  border-top-width: 0;\n  border-right-width: 0;\n}\n\n.face .mouth .lip > .lip-left::after, .face .mouth .lip > .lip-right::after {\n  height: 0.01px;\n  width: 100%;\n  border: 2px solid #ffe035;\n  left: 1px;\n  outline: 1px solid #ffe035;\n  position: absolute;\n  top: -3px;\n}\n\n.face .mouth .lip {\n  position: relative;\n  z-index: 1;\n}\n\n.face .mouth .lip > .lip-left {\n  border-bottom-left-radius: 60px 30px;\n  transform: rotate(-20deg);\n}\n\n.face .mouth .lip > .lip-right {\n  border-bottom-left-radius: 60px 30px;\n  transform: translate(110px, -30px) scaleX(-1) rotate(-20deg);\n}\n\n.face .mouth .jaw {\n  height: 220px;\n  width: 100%;\n  border-radius: 50% 50% 0 0 / 25% 25% 0 0;\n  overflow: hidden;\n  position: absolute;\n  top: 8px;\n}\n\n.face .mouth .jaw .lower-jaw {\n  height: 580px;\n  width: 180px;\n  background-color: #9b000a;\n  border: 3px solid #000;\n  border-radius: 50% / 50%;\n  bottom: 0;\n  left: 50%;\n  margin-left: -90px;\n  overflow: hidden;\n  position: absolute;\n}\n\n.face .mouth .jaw .lower-jaw::after {\n  height: 380px;\n  width: 200px;\n  background-color: #ff485f;\n  border-radius: 100px;\n  bottom: -190px;\n  left: 50%;\n  margin-left: -100px;\n  position: absolute;\n}\n";
var _default = string;
exports.default = _default;
},{}],"aqA5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var stringAnimation = "\n@keyframes shakeNose {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n\n.face .nose-tip:hover {\n  animation: shakeNose infinite 300ms linear;\n  transform-origin: center bottom;\n}\n";
var _default = stringAnimation;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _stringDefault = _interopRequireDefault(require("./stringDefault.js"));

var _string = _interopRequireDefault(require("./string.js"));

var _stringAnimation = _interopRequireDefault(require("./stringAnimation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 模块化
var player = {
  id: undefined,
  n: 1,
  intervalTime: 80,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = _string.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _stringDefault.default + _string.default.substr(0, player.n);
    player.eventBind();
    player.play();
  },
  eventBind: function eventBind() {
    /*
    for(let key in player.events) {
        // console.log(player.events);
        // console.log(player.events[key]);
        // console.log(typeof player.events[key]);
        // 防御型编程
         /!* 避免取到原型链上的属性 *!/
        if(player.events.hasOwnProperty(key)){
            const value = player.events[key] // pause /play / slow /...
            document.querySelector(key).onclick = player[value]
        }
    }
    */
    Object.getOwnPropertyNames(player.events).forEach(function (key) {
      // 防御型编程

      /* 避免取到原型链上的属性 */
      var value = player.events[key]; // pause /play / slow /...
      // console.log(player.events);
      // console.log(player.events[key]);
      // console.log(typeof player.events[key]);

      document.querySelector(key).onclick = player[value];
    });
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  run: function run() {
    player.n += 1;

    if (player.n > _string.default.length) {
      player.pause();
      player.ui.demo2.innerHTML += _stringAnimation.default;
      return;
    }

    player.ui.demo.innerText = _string.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _stringDefault.default + _string.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.pause();
    player.id = setInterval(player.run, player.intervalTime);
  },
  slow: function slow() {
    player.pause();
    player.intervalTime = 80;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.intervalTime = 16;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.intervalTime = 0;
    player.play();
  }
};
player.init();
},{"./stringDefault.js":"E0ab","./string.js":"OqZs","./stringAnimation.js":"aqA5"}]},{},["epB2"], null)
//# sourceMappingURL=main.d3af77eb.js.map