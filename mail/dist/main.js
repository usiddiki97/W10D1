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

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _message_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\n\nconst Inbox = {\n    render: () => {\n        const container = document.createElement(\"ul\");\n        container.className = \"messages\";\n        const inboxMessages = _message_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInboxMessages();\n        inboxMessages.forEach(message => {\n            const messageNode = Inbox.renderMessage(message);\n            container.appendChild(messageNode);\n        })\n\n        return container;\n    },\n    renderMessage: message => {\n        const liMessage = document.createElement(\"li\");\n        liMessage.className = \"message\";\n        liMessage.innerHTML = `\n        <span class=\"from\"> ${message.from} </span>\n        <span class=\"subject\"> ${message.subject} </span>\n        <span class=\"body\"> ${message.body} </span>\n        `;\n        return liMessage;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inbox);\n\n//# sourceURL=webpack://mail/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n\n\n\nconst routes = {\n    inbox: _inbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    window.location.hash = \"inbox\";\n    \n    const content = document.querySelector(\".content\");\n    const contentRouter = new _router__WEBPACK_IMPORTED_MODULE_0__[\"default\"](content, routes);\n    contentRouter.start();\n    \n    const sidebarNav = document.querySelector(\".sidebar-nav\");\n    sidebarNav.addEventListener(\"click\", (e) => {\n        if (e.target.matches(\"a, button\")) {\n            const location = e.target.innerText.toLowerCase();\n            window.location.hash = location;\n        }\n    })\n})\n\n//# sourceURL=webpack://mail/./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet messages = {\n    sent: [\n        {\n            to: \"friend@mail.com\",\n            subject: \"Check this out\",\n            body: \"It's so cool\"\n        },\n        { to: \"person@mail.com\", subject: \"zzz\", body: \"so booring\" }\n    ],\n    inbox: [\n        {\n            from: \"grandma@mail.com\",\n            subject: \"Fwd: Fwd: Fwd: Check this out\",\n            body:\n                \"Stay at home mom discovers cure for leg cramps. Doctors hate her\"\n        },\n        {\n            from: \"person@mail.com\",\n            subject: \"Questionnaire\",\n            body: \"Take this free quiz win $1000 dollars\"\n        }\n    ]\n};\n\nconst MessageStore = {\n    getInboxMessages: () => messages.inbox,\n    getSentMessages: () => messages.sent\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageStore);\n\n//# sourceURL=webpack://mail/./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Router {\n    constructor(node, routes) {\n        this.node = node;\n        this.routes = routes;\n    }\n\n    start() {\n        // immediately updates DOM\n        this.render();\n        // makes the Router update DOM every time has fragment changes\n        window.addEventListener(\"hashchange\", this.render.bind(this));\n    }\n\n    activeRoute() {\n        // gets name of current active route without the #\n        const componentName = window.location.hash.slice(1);\n        return this.routes[componentName];\n    }\n\n    clear() {\n        this.node.innerHTML = \"\";\n    }   \n\n    render() {\n        // clears anything leftover from previous route\n        this.clear();\n        // gets current component\n        const component = this.activeRoute();\n        if (component) {\n            const container = component.render();\n            this.node.appendChild(container);\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n//# sourceURL=webpack://mail/./src/router.js?");

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