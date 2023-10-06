/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DOMNodeCollection {\n    constructor(nodes) {\n        this.nodes = nodes;\n    }\n\n    each(cb) {\n        this.nodes.forEach(cb);\n    }\n\n    html(content) {\n        if (typeof content === \"string\") {\n            // sets innerHTML of each HTMLElement\n            this.each(node => node.innerHTML = content);\n        } else if (this.nodes.length > 0) {\n            // gets the innerHTML of the first HTMLElement in array\n            return this.nodes[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.html('');\n    }\n\n    append(input) {\n        if (input instanceof DOMNodeCollection) {\n            this.each(node => {\n                input.nodes.forEach(childNode => {\n                    node.appendChild(childNode.cloneNode(true));\n                })\n            })\n        } else if (input instanceof HTMLElement) {\n            this.each(node => {\n                node.appendChild(input.cloneNode(true));\n            });\n        } else if (typeof input === \"string\") {\n            this.each(node => {\n                node.innerHTML += input;\n            })\n        }\n    }\n\n    attr(attr, val) {\n        if (val === undefined && this.nodes.length > 0) {\n            return this.nodes[0].getAttribute(attr);\n        } else {\n            this.each(node => node.setAttribute(attr, val));\n        }\n    }\n\n    addClass(className) {\n        if (className instanceof Array) {\n            this.each(node => {\n                className.forEach(name => {\n                    node.classList.add(name);\n                })\n            })\n        } else {\n            this.each(node => node.classList.add(className));\n        }\n    }\n\n    removeClass(className) {\n        if (className instanceof Array) {\n            this.each(node => {\n                className.forEach(name => {\n                    node.classList.remove(name);\n                })\n            })\n        } else {\n            this.each(node => node.classList.remove(className));\n        }\n    }\n\n    children(selector) {\n        let childNodes = [];\n        this.each(node => {\n            const childNodeList = node.children;\n            childNodes = childNodes.concat(Array.from(childNodeList));\n        });\n\n        if (typeof selector === \"string\") {\n            childNodes = childNodes.filter(childNode => childNode.matches(selector));\n        }\n        return new DOMNodeCollection(childNodes);\n    }\n\n    parent(selector) {\n        let parentNodes = [];\n        this.each(node => {\n            const parentNode = node.parentElement\n            if (!parentNodes.includes(parentNode)) {\n                parentNodes.push(parentNode);\n            }\n        })\n        if (typeof selector === \"string\") {\n            parentNodes = parentNodes.filter(parentNode => parentNode.matches(selector));\n        }\n        return new DOMNodeCollection(parentNodes);\n    }\n\n    find(selector) {\n        let found = [];\n        this.each(node => {\n            const descendants = node.querySelectorAll(selector);\n            found = found.concat(Array.from(descendants));\n        })\n        return new DOMNodeCollection(found);\n    }\n\n    remove(selector) {\n        let rejected = (typeof selector === \"string\" ? this.find(selector) : this)\n        rejected.each(node => node.remove());\n    }\n\n    on(eventName, handler) {\n        this.each(node => {\n            node.addEventListener(eventName, handler);\n            const eventKey = `jqlite-${eventName}`;\n            if (!node[eventKey]) node[eventKey] = [];\n            node[eventKey].push(handler);\n        })\n    }\n\n    off(eventName) {\n        this.each(node => {\n            const eventKey = `jqlite-${eventName}`;\n            const handlers = node[eventKey];\n            if (handlers) {\n                handlers.forEach(handler => {\n                    node.removeEventListener(eventName, handler);\n                })\n            }\n            handlers = [];            \n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMNodeCollection);\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n\nwindow.$l = function(input) {\n    // If input is a CSS selector, return matching elements\n    if (typeof input === \"string\") {\n        const nodeList = document.querySelectorAll(input);\n        const nodesArray = Array.from(nodeList);\n        return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nodesArray);\n\n    // If input is an HTMLElement, wrap it in DOMNodeCollection\n    } else if (input instanceof HTMLElement) {\n        return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([input]);\n    }\n}\n\nwindow.DOMNodeCollection = _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;