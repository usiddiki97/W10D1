/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("class DOMNodeCollection {\n  constructor(htmlElements) {\n    this.htmlElements = htmlElements;\n  }\n\n  html(string) {\n    if (string) {\n      this.htmlElements.forEach(el => {\n        el.innerHTML = string;\n      })\n    } else {\n      return this.htmlElements[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.html(\"\");\n  }\n\n  append(childElement) {\n    this.htmlElements.forEach(el => {\n      el.innerHTML += childElement.outerHTML;\n    })\n  }\n\n  attr(key, val) {\n    if (val) {\n      this.htmlElements.forEach(el => {\n        el.setAttribute(key, val);\n      })\n    } else {\n      return this.htmlElements[0].getAttribute(key);\n    }\n  }\n\n  addClass(newClass) {\n    this.htmlElements.forEach(el => {\n      el.classList.add(newClass);\n    })\n  }\n\n  removeClass(oldClass) {\n    this.htmlElements.forEach(el => {\n      el.classList.remove(oldClass);\n    })\n  }\n\n  children() {\n    let children = [];\n    this.htmlElements.forEach(el => {\n      children = children.concat(Array.from(el.children));\n    })\n    return new DOMNodeCollection(children);\n  }\n\n  parent() {\n    let parents = [];\n    this.htmlElements.forEach(el => {\n      let parent = el.parentNode;\n      if (!parents.includes(parent)) {\n        parents.push(parent);\n      }\n    })\n    return new DOMNodeCollection(parents);\n  }\n\n  find(selector) {\n    let elementList = [];\n    this.htmlElements.forEach(el => {\n      const nodes = el.querySelectorAll(selector); \n      elementList = elementList.concat(Array.from(nodes));\n    })\n    return new DOMNodeCollection(elementList);\n  }\n  \n  remove() {\n    this.htmlElements.forEach(el => el.remove());\n  }\n\n  on(action, eventCallback) {\n    this.htmlElements.forEach(node => {\n      node.addEventListener(action, eventCallback);\n      node.callback = eventCallback;\n    })\n  }\n\n  off(action) {\n    this.htmlElements.forEach(node => {\n      node.removeEventListener(action, node.callback);\n    })\n  }\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// core function\n// function $l (selectors) { \n//   const elementList = document.querySelectorAll(selectors);\n//   const htmlElement = Array.from(elementList);\n//   return new DOMNodeCollection(htmlElement);\n// }\n\nfunction $l (arg) { \n  const queue = [];\n\n  if (arg instanceof HTMLElement) {\n    return new (_dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default())([arg]);\n  } else if (arg instanceof Function) {\n    queue.push(arg);\n    document.addEventListener('DOMContentLoaded', arg);\n  } else {\n    const elementList = document.querySelectorAll(arg);\n    const nodes = Array.from(elementList);\n    return new (_dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0___default())(nodes);\n  }\n}\n// They bind to the DOMContentLoaded event(or onreadystatechange on some browsers).They also have \n// a fallback to the regular load event, in case the DOMContentLoaded isn't supported or not\n//  fired for other reasons. On browsers supporting it, they use this call:\n\n// document.addEventListener(\"DOMContentLoaded\", DOMContentLoaded, false);\n\nwindow.$l = $l;\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;