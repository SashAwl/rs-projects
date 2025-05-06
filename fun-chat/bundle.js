/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding-right: 10px;
  padding-left: 10px;
}

.header,
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  margin-top: 50px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 20px;
}

.header {
  flex-wrap: wrap;
}
@media (width <= 768px) {
  .header .heading {
    flex-grow: 1;
    align-self: center;
    order: 1;
    width: 100%;
    text-align: center;
  }
  .header .user__name {
    order: 2;
  }
  .header .header__buttons {
    order: 2;
  }
}

.header__buttons {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.footer {
  justify-content: space-around;
}

.footer__link {
  color: black;
  text-decoration: none;
}

.main {
  display: flex;
  flex-grow: 1;
  gap: 20px;
  justify-content: space-between;
}
@media (width <= 768px) {
  .main {
    flex-direction: column;
  }
}

.contacts,
.messages {
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 20px;
}

.contacts {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  height: 66vh;
}
.contacts__search {
  width: 100%;
  height: 2.5rem;
  padding-left: 4px;
  border-radius: 8px;
  font-size: 20px;
}
.contacts__list {
  overflow: auto;
  height: 100%;
  font-size: 20px;
}
.contacts__item {
  display: flex;
  gap: 4px;
  align-items: center;
}
.contacts__status {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: rgb(175, 76, 76);
}
.contacts__name {
  cursor: pointer;
}
@media (width <= 768px) {
  .contacts {
    flex: none;
    height: 15vh;
  }
}

.messages {
  display: flex;
  flex-direction: column;
  flex-grow: 3;
}
.messages__type-form {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid grey;
}
.messages__type {
  flex-grow: 0.8;
  padding-left: 4px;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 20px;
}
.messages__selected-user {
  display: flex;
  justify-content: space-around;
  height: 60px;
  padding-bottom: 15px;
  border-bottom: 1px solid grey;
}
.messages__history {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
  font-size: 25px;
}
.messages__history__list {
  align-items: end;
  justify-content: end;
  padding-right: 15px;
}
.messages__item {
  width: 80%;
  padding: 0 35px;
  border-radius: 12px;
  background-color: #efefef;
}
.messages__item__details {
  display: flex;
  gap: 40px;
  justify-content: end;
  font-size: 17px;
  font-style: italic;
}
.messages__item__time {
  margin-bottom: -5px;
  font-size: 15px;
  text-align: right;
}
.messages__item__text {
  text-align: right;
}

.button {
  cursor: pointer;
  padding: 6px 20px;
  border-radius: 35px;
  font-size: 20px;
}
.button-submit, .button-about, .button-back, .button-close-error {
  width: fit-content;
  margin: 0 auto;
}

/** Authentification */
.auth__form {
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%;
  padding: 55px;
  border-radius: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}
.auth__form-item {
  height: 30px;
  padding-left: 10px;
  font-size: 20px;
}
@media (width <= 1440px) {
  .auth__form {
    width: 40%;
  }
}
@media (width <= 768px) {
  .auth__form {
    width: 70%;
  }
}
.auth__label {
  font-size: 30px;
}
.auth__background {
  width: 100vw;
  height: 100vh;
  background-color: #e9edda;
}
.auth__valid-error {
  color: red;
}

.about {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  font-size: 20px;
  text-align: center;
}

/** Modal */
.error {
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%;
  padding: 23px;
  border: 1px solid grey;
  border-radius: 15px;
  text-align: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}
.error__heading {
  color: red;
}
@media (width <= 1440px) {
  .error {
    width: 40%;
  }
}
@media (width <= 768px) {
  .error {
    width: 70%;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["body {\n  margin: 0;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 1440px;\n  height: 100vh;\n  margin: 0 auto;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.header,\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 50px 0;\n  margin-top: 50px;\n  padding: 10px 20px;\n  border: 1px solid black;\n  border-radius: 20px;\n}\n\n.header {\n  flex-wrap: wrap;\n\n  @media (width <= 768px) {\n    .heading {\n      flex-grow: 1;\n      align-self: center;\n      order: 1;\n      width: 100%;\n      text-align: center;\n    }\n\n    .user__name {\n      order: 2;\n    }\n\n    .header__buttons {\n      order: 2;\n    }\n  }\n}\n\n.header__buttons {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer {\n  justify-content: space-around;\n}\n\n.footer__link {\n  color: black;\n  text-decoration: none;\n}\n\n.main {\n  display: flex;\n  flex-grow: 1;\n  gap: 20px;\n  justify-content: space-between;\n\n  @media (width <= 768px) {\n    flex-direction: column;\n  }\n}\n\n.contacts,\n.messages {\n  padding: 10px 20px;\n  border: 1px solid black;\n  border-radius: 20px;\n}\n\n.contacts {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 10px;\n  height: 66vh;\n\n  &__search {\n    width: 100%;\n    height: 2.5rem;\n    padding-left: 4px;\n    border-radius: 8px;\n    font-size: 20px;\n  }\n\n  &__list {\n    overflow: auto;\n    height: 100%;\n    font-size: 20px;\n  }\n\n  &__item {\n    display: flex;\n    gap: 4px;\n    align-items: center;\n  }\n\n  &__status {\n    width: 8px;\n    height: 8px;\n    border-radius: 100%;\n    background-color: rgb(175 76 76);\n  }\n\n  &__name {\n    cursor: pointer;\n  }\n\n  @media (width <= 768px) {\n    flex: none;\n    height: 15vh;\n  }\n}\n\n.messages {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 3;\n\n  &__type-form {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    padding-top: 15px;\n    border-top: 1px solid grey;\n  }\n\n  &__type {\n    flex-grow: 0.8;\n    padding-left: 4px;\n    border: 1px solid black;\n    border-radius: 8px;\n    font-size: 20px;\n  }\n\n  &__selected-user {\n    display: flex;\n    justify-content: space-around;\n    height: 60px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid grey;\n  }\n\n  &__history {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    gap: 15px;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 15px;\n    font-size: 25px;\n\n    &__list {\n      align-items: end;\n      justify-content: end;\n      padding-right: 15px;\n    }\n  }\n\n  &__item {\n    width: 80%;\n    padding: 0 35px;\n    border-radius: 12px;\n    background-color: #efefef;\n\n    &__details {\n      display: flex;\n      gap: 40px;\n      justify-content: end;\n      font-size: 17px;\n      font-style: italic;\n    }\n\n    &__time {\n      margin-bottom: -5px;\n      font-size: 15px;\n      text-align: right;\n    }\n\n    &__text {\n      text-align: right;\n    }\n  }\n}\n\n.button {\n  cursor: pointer;\n  padding: 6px 20px;\n  border-radius: 35px;\n  font-size: 20px;\n\n  &-submit,\n  &-about,\n  &-back,\n  &-close-error {\n    width: fit-content;\n    margin: 0 auto;\n  }\n}\n\n/** Authentification */\n\n.auth {\n  &__form {\n    position: fixed;\n    z-index: 2;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -75%);\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 20%;\n    padding: 55px;\n    border-radius: 15px;\n    background-color: white;\n    box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;\n\n    &-item {\n      height: 30px;\n      padding-left: 10px;\n      font-size: 20px;\n    }\n\n    @media (width <= 1440px) {\n      width: 40%;\n    }\n\n    @media (width <= 768px) {\n      width: 70%;\n    }\n  }\n\n  &__label {\n    font-size: 30px;\n  }\n\n  &__background {\n    width: 100vw;\n    height: 100vh;\n    background-color: #e9edda;\n  }\n\n  &__valid-error {\n    color: red;\n  }\n}\n\n.about {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 100px;\n  font-size: 20px;\n  text-align: center;\n}\n\n/** Modal */\n.error {\n  position: fixed;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -75%);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 20%;\n  padding: 23px;\n  border: 1px solid grey;\n  border-radius: 15px;\n  text-align: center;\n  background-color: white;\n  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;\n\n  &__heading {\n    color: red;\n  }\n\n  @media (width <= 1440px) {\n    width: 40%;\n  }\n\n  @media (width <= 768px) {\n    width: 70%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   sendMessage: () => (/* binding */ sendMessage),
/* harmony export */   subscribeToMessages: () => (/* binding */ subscribeToMessages)
/* harmony export */ });
const socket = new WebSocket('ws://localhost:4000');
const listeners = [];
socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    listeners.forEach((listener) => listener(data));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);
function subscribeToMessages(listener) {
    listeners.push(listener);
}
function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
    }
    else {
        socket.addEventListener('open', () => {
            socket.send(JSON.stringify(message));
        }, { once: true });
    }
}


/***/ }),

/***/ "./src/api/requests.ts":
/*!*****************************!*\
  !*** ./src/api/requests.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllAuthentificatedUsers: () => (/* binding */ getAllAuthentificatedUsers),
/* harmony export */   getMessageHistory: () => (/* binding */ getMessageHistory),
/* harmony export */   getUnautorizedUsers: () => (/* binding */ getUnautorizedUsers),
/* harmony export */   goLogin: () => (/* binding */ goLogin),
/* harmony export */   goLogout: () => (/* binding */ goLogout),
/* harmony export */   sendMessageToUser: () => (/* binding */ sendMessageToUser)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api/api.ts");
/* harmony import */ var _vue_components_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue/components/create-element */ "./src/vue/components/create-element.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/state */ "./src/state/state.ts");



function sendMessageToUser(userName, textMessage) {
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)({
        id: Date.now().toString(),
        type: 'MSG_SEND',
        payload: {
            message: {
                to: userName,
                text: textMessage,
            },
        },
    });
}
function getAllAuthentificatedUsers() {
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)({
        id: Date.now().toString(),
        type: 'USER_ACTIVE',
        payload: null,
    });
}
function getUnautorizedUsers() {
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)({
        id: Date.now().toString(),
        type: 'USER_INACTIVE',
        payload: null,
    });
}
function getMessageHistory(loginUser) {
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)({
        id: Date.now().toString(),
        type: 'MSG_FROM_USER',
        payload: {
            user: {
                login: loginUser,
            },
        },
    });
}
function validateAuthForm(data) {
    const errors = [];
    if (!data.login.trim()) {
        errors.push('Login is required');
    }
    else if (data.login.trim().length < 3) {
        errors.push('Login must contain at least 3 characters');
    }
    if (!data.password) {
        errors.push('Password is required');
    }
    else if (data.password.length < 6) {
        errors.push('Password must contain at least 6 characters');
    }
    else if (data.password.trim().length === 0) {
        errors.push('The password cannot consist only of spaces');
    }
    return errors;
}
function showAuthError(errors) {
    const form = document.querySelector('.button-submit');
    const erorrsText = (0,_vue_components_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: 'p',
        classes: ['auth__valid-error'],
        text: `${Array.isArray(errors) ? errors === null || errors === void 0 ? void 0 : errors.join('. ') : errors}`,
    });
    form === null || form === void 0 ? void 0 : form.after(erorrsText);
}
function goLogout() {
    const user = (0,_state_state__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();
    if (!user) {
        return;
    }
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)({
        id: Date.now().toString(),
        type: 'USER_LOGOUT',
        payload: {
            user: { login: user.login, password: user.password },
        },
    });
}
function goLogin(userData) {
    const errors = validateAuthForm(userData);
    if (errors.length > 0) {
        const errorsText = document.querySelector('.auth__valid-error');
        if (errorsText) {
            errorsText.remove();
        }
        showAuthError(errors);
        return;
    }
    (0,_state_state__WEBPACK_IMPORTED_MODULE_2__.setCurrentUser)(userData);
    (0,_api__WEBPACK_IMPORTED_MODULE_0__.sendMessage)({
        id: Date.now().toString(),
        type: 'USER_LOGIN',
        payload: {
            user: { login: userData.login, password: userData.password },
        },
    });
}



/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeUsers: () => (/* binding */ activeUsers),
/* harmony export */   currentUser: () => (/* binding */ currentUser),
/* harmony export */   getActiveUsers: () => (/* binding */ getActiveUsers),
/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),
/* harmony export */   getUserStatus: () => (/* binding */ getUserStatus),
/* harmony export */   getUsers: () => (/* binding */ getUsers),
/* harmony export */   setActiveUsers: () => (/* binding */ setActiveUsers),
/* harmony export */   setCurrentUser: () => (/* binding */ setCurrentUser),
/* harmony export */   setUsers: () => (/* binding */ setUsers),
/* harmony export */   users: () => (/* binding */ users)
/* harmony export */ });
let currentUser;
let users = [];
let activeUsers = [];

function setCurrentUser(user) {
    currentUser = user;
}
function getCurrentUser() {
    return currentUser;
}
function setUsers(usersResponse) {
    users = [...usersResponse];
}
function getUsers() {
    return users;
}
function setActiveUsers(usersResponse) {
    activeUsers = [...usersResponse];
}
function getActiveUsers() {
    return activeUsers;
}
function getUserStatus() {
    const activeUserNames = activeUsers.map((user) => user.login);
    const inactiveUsers = users.filter((user) => {
        return !activeUserNames.includes(user.login);
    });
    return [...activeUsers, ...inactiveUsers];
}


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/vue/components/create-anchor-element.ts":
/*!*****************************************************!*\
  !*** ./src/vue/components/create-anchor-element.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnchorElement: () => (/* binding */ createAnchorElement)
/* harmony export */ });
function createAnchorElement(options) {
    const { text = '', href = '', target = '', parent, classes = [] } = options;
    const element = document.createElement('a');
    element.textContent = text;
    element.setAttribute('href', href);
    element.setAttribute('target', target);
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    if (parent != null) {
        parent.appendChild(element);
    }
    return element;
}


/***/ }),

/***/ "./src/vue/components/create-element.ts":
/*!**********************************************!*\
  !*** ./src/vue/components/create-element.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
function createElement(options) {
    const { tag = 'div', text = '', parent, classes = [] } = options;
    const element = document.createElement(tag);
    element.textContent = text;
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    if (parent != null) {
        parent.appendChild(element);
    }
    return element;
}


/***/ }),

/***/ "./src/vue/components/create-input-element.ts":
/*!****************************************************!*\
  !*** ./src/vue/components/create-input-element.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInputElement: () => (/* binding */ createInputElement)
/* harmony export */ });
function createInputElement(options) {
    const { type = '', placeholder = '', parent, classes = [] } = options;
    const element = document.createElement('input');
    element.setAttribute('type', type);
    element.setAttribute('placeholder', placeholder);
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    if (parent != null) {
        parent.appendChild(element);
    }
    return element;
}


/***/ }),

/***/ "./src/vue/components/create-message.ts":
/*!**********************************************!*\
  !*** ./src/vue/components/create-message.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showSendedMessage: () => (/* binding */ showSendedMessage)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/vue/components/create-element.ts");

function showSendedMessage({ userName, userText, time, deliveryStatus, readStatus, editStatus, }) {
    const messages = document.querySelector('.messages__history');
    const initialText = document.querySelector('.messages__history__text');
    const oldMessage = document.querySelector('.messages__type');
    if (oldMessage instanceof HTMLTextAreaElement) {
        oldMessage.value = '';
    }
    if (messages && messages instanceof HTMLElement) {
        if (initialText) {
            initialText.remove();
            messages.classList.add('messages__history__list');
        }
        const messageItem = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'div',
            classes: ['messages__item'],
            parent: messages,
        });
        (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'h5',
            text: userName,
            classes: ['messages__item__name'],
            parent: messageItem,
        });
        (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'p',
            text: userText,
            classes: ['messages__item__text'],
            parent: messageItem,
        });
        (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'p',
            text: formatTime(time),
            classes: ['messages__item__time'],
            parent: messageItem,
        });
        const details = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'div',
            classes: ['messages__item__details'],
            parent: messageItem,
        });
        (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'p',
            text: `${deliveryStatus ? '' : 'not'} delivered`,
            classes: ['messages__item__detail'],
            parent: details,
        });
        (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'p',
            text: `${editStatus ? '' : 'not'} edited`,
            classes: ['messages__item__detail'],
            parent: details,
        });
        (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'p',
            text: `${readStatus ? '' : 'not'} readed`,
            classes: ['messages__item__detail'],
            parent: details,
        });
    }
}
function formatTime(time) {
    const date = new Date(time);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year}, ${hours}:${minutes}`;
}


/***/ }),

/***/ "./src/vue/components/create-textarea-element.ts":
/*!*******************************************************!*\
  !*** ./src/vue/components/create-textarea-element.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTextareaElement: () => (/* binding */ createTextareaElement)
/* harmony export */ });
function createTextareaElement(options) {
    const { rows = '', cols = '', placeholder = '', name = '', parent, classes = [], } = options;
    const element = document.createElement('textarea');
    element.setAttribute('rows', rows);
    element.setAttribute('cols', cols);
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholder);
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    if (parent != null) {
        parent.appendChild(element);
    }
    return element;
}


/***/ }),

/***/ "./src/vue/components/modal-error.ts":
/*!*******************************************!*\
  !*** ./src/vue/components/modal-error.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showErrorModal: () => (/* binding */ showErrorModal)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/vue/components/create-element.ts");

function showErrorModal(error) {
    const modal = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['error'],
        parent: document.body,
    });
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'h3',
        text: 'Error!',
        classes: ['error__heading'],
        parent: modal,
    });
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'p',
        text: `Error: ${error}`,
        classes: ['error__text'],
        parent: modal,
    });
    const closeButton = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'button',
        classes: ['button', 'button-close-error'],
        text: 'OK',
        parent: modal,
    });
    closeButton.focus();
    closeButton.addEventListener('click', () => {
        modal.remove();
    });
    closeButton.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            modal.remove();
        }
    }, { once: true });
    return modal;
}


/***/ }),

/***/ "./src/vue/pages/about.ts":
/*!********************************!*\
  !*** ./src/vue/pages/about.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showAbout: () => (/* binding */ showAbout)
/* harmony export */ });
/* harmony import */ var _components_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/create-element */ "./src/vue/components/create-element.ts");
/* harmony import */ var _components_create_anchor_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/create-anchor-element */ "./src/vue/components/create-anchor-element.ts");


function showAbout(goToBack) {
    const about = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['about'],
        parent: document.body,
    });
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'h1',
        text: 'Fun chat',
        classes: ['heading'],
        parent: about,
    });
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'p',
        text: 'The app is designed to demonstrate the Fun Chat assignment as part of the RSSchool JS/FE 2024 course.',
        classes: ['heading'],
        parent: about,
    });
    (0,_components_create_anchor_element__WEBPACK_IMPORTED_MODULE_1__.createAnchorElement)({
        text: 'Author SashAwl',
        href: 'https://github.com/SashAwl',
        classes: ['about__link'],
        parent: about,
    });
    const backButton = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'button',
        text: 'Back',
        classes: ['button', 'button-back'],
        parent: about,
    });
    backButton.addEventListener('click', () => {
        goToBack();
    });
    return about;
}


/***/ }),

/***/ "./src/vue/pages/auth.ts":
/*!*******************************!*\
  !*** ./src/vue/pages/auth.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAuthForm: () => (/* binding */ createAuthForm)
/* harmony export */ });
/* harmony import */ var _components_create_input_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/create-input-element */ "./src/vue/components/create-input-element.ts");
/* harmony import */ var _components_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/create-element */ "./src/vue/components/create-element.ts");


function createAuthForm(onSubmit, goAboutPage) {
    const auth = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: 'div',
        classes: ['auth'],
        parent: document.body,
    });
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: 'div',
        classes: ['auth__background'],
        parent: auth,
    });
    const authForm = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: 'form',
        classes: ['auth__form'],
        parent: auth,
    });
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: 'label',
        text: 'Login',
        for: 'login',
        classes: ['auth__label', 'auth__form-item'],
        parent: authForm,
    });
    const authLogin = (0,_components_create_input_element__WEBPACK_IMPORTED_MODULE_0__.createInputElement)({
        type: 'text',
        name: 'login',
        placeholder: 'Input your login',
        classes: ['auth__form-item'],
        parent: authForm,
    });
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: 'label',
        text: 'Password',
        for: 'password',
        classes: ['auth__label', 'auth__form-item'],
        parent: authForm,
    });
    const authPassword = (0,_components_create_input_element__WEBPACK_IMPORTED_MODULE_0__.createInputElement)({
        type: 'password',
        name: 'password',
        placeholder: 'Input your password',
        classes: ['auth__form-item'],
        parent: authForm,
    });
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: 'button',
        text: 'Submit',
        classes: ['button', 'button-submit'],
        parent: authForm,
    });
    const aboutButton = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: 'button',
        text: 'About',
        classes: ['button', 'button-about'],
        parent: authForm,
    });
    aboutButton.addEventListener('click', () => {
        goAboutPage('auth-form');
    });
    if (authForm) {
        authForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const dataUser = {
                login: authLogin.value,
                password: authPassword.value,
            };
            onSubmit(dataUser);
        });
    }
    else {
        console.error('authForm is null');
    }
    authForm.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            const dataUser = {
                login: authLogin.value,
                password: authPassword.value,
            };
            onSubmit(dataUser);
        }
    }, { once: true });
    return auth;
}


/***/ }),

/***/ "./src/vue/pages/main.ts":
/*!*******************************!*\
  !*** ./src/vue/pages/main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainPage: () => (/* binding */ createMainPage)
/* harmony export */ });
/* harmony import */ var _components_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/create-element */ "./src/vue/components/create-element.ts");
/* harmony import */ var _components_create_input_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/create-input-element */ "./src/vue/components/create-input-element.ts");
/* harmony import */ var _components_create_anchor_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/create-anchor-element */ "./src/vue/components/create-anchor-element.ts");
/* harmony import */ var _components_create_textarea_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/create-textarea-element */ "./src/vue/components/create-textarea-element.ts");




function createMainPage(login = '', logOut, users, goAboutPage, sendMessage) {
    const container = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['container'],
        parent: document.body,
    });
    const header = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'header',
        classes: ['header'],
        parent: container,
    });
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'h2',
        text: `User: ${login}`,
        classes: ['user__name'],
        parent: header,
    });
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'h1',
        text: 'Fun chat',
        classes: ['heading'],
        parent: header,
    });
    const exitBlock = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['header__buttons'],
        parent: header,
    });
    const buttonInfo = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'button',
        text: 'Info',
        classes: ['button', 'button-info'],
        parent: exitBlock,
    });
    buttonInfo.addEventListener('click', () => {
        goAboutPage('main');
    });
    const closeButton = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'button',
        text: 'Close',
        classes: ['button', 'button-close'],
        parent: exitBlock,
    });
    closeButton.addEventListener('click', () => {
        logOut();
    });
    const main = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'main',
        classes: ['main'],
        parent: container,
    });
    const contacts = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['contacts'],
        parent: main,
    });
    const search = (0,_components_create_input_element__WEBPACK_IMPORTED_MODULE_1__.createInputElement)({
        type: 'search',
        placeholder: 'Search..',
        classes: ['contacts__search'],
        parent: contacts,
    });
    search.addEventListener('input', () => {
        const searchTerm = search.value.toLowerCase();
        userList.forEach((item) => {
            var _a;
            const name = ((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
            const isMatch = name.includes(searchTerm);
            item.style.display = isMatch ? 'block' : 'none';
        });
    });
    const contactsList = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['contacts__list'],
        parent: contacts,
    });
    const userList = users.map((user) => {
        const contactItem = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'div',
            classes: ['contacts__item'],
            parent: contactsList,
        });
        contactItem.addEventListener('click', (event) => {
            const nameUser = event.target;
            if (nameUser instanceof HTMLElement &&
                (nameUser === null || nameUser === void 0 ? void 0 : nameUser.closest('.contacts__name'))) {
                userName.textContent = nameUser.textContent;
                const status = users.filter((item) => item.login === nameUser.textContent)[0].isLogined;
                userStatus.textContent = status ? 'online' : 'offline';
                userStatus.style.color = status ? '#32bf32' : 'rgb(175 76 76)';
                historyText.textContent = 'Write your first message...';
            }
        });
        const contactsStatus = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'div',
            classes: ['contacts__status'],
            parent: contactItem,
        });
        if (user.isLogined) {
            contactsStatus.style.background = '#32bf32';
        }
        (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'p',
            classes: ['contacts__name'],
            text: user.login,
            parent: contactItem,
        });
        return contactItem;
    });
    const messages = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['messages'],
        parent: main,
    });
    const selectedUser = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['messages__selected-user'],
        parent: messages,
    });
    const userName = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'h3',
        text: '',
        classes: ['messages__user-name'],
        parent: selectedUser,
    });
    const userStatus = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'h3',
        text: '',
        classes: ['messages__user-status'],
        parent: selectedUser,
    });
    const messageHistory = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['messages__history'],
        parent: messages,
    });
    const historyText = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'p',
        classes: ['messages__history__text'],
        text: 'Select a user to send a message to...',
        parent: messageHistory,
    });
    const messagesTypeForm = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['messages__type-form'],
        parent: messages,
    });
    const messageForm = (0,_components_create_textarea_element__WEBPACK_IMPORTED_MODULE_3__.createTextareaElement)({
        rows: '4',
        cols: '33',
        name: 'typeMessage',
        placeholder: 'Input your message...',
        classes: ['messages__type'],
        parent: messagesTypeForm,
    });
    const sendMessageButton = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'button',
        text: 'Submit',
        classes: ['button', 'messages__submit'],
        parent: messagesTypeForm,
    });
    sendMessageButton.addEventListener('click', () => {
        const toUser = userName.textContent || '';
        const textMessage = messageForm.value || '';
        if ((toUser === null || toUser === void 0 ? void 0 : toUser.length) !== 0 && textMessage.length !== 0) {
            sendMessage(toUser, textMessage);
        }
    });
    const footer = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'footer',
        classes: ['footer'],
        parent: container,
    });
    const rsBlock = (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        classes: ['footer__link'],
        parent: footer,
    });
    (0,_components_create_anchor_element__WEBPACK_IMPORTED_MODULE_2__.createAnchorElement)({
        text: 'RS School',
        href: 'https://rs.school/',
        classes: ['footer__link'],
        parent: rsBlock,
    });
    // const rsImage = createElement({
    //     tag: 'img',
    //     classes: ['rs-image', 'footer__rs-link'],
    //     parent: rsLink,
    //   });
    // rsImage.src = '../images/rss-logo.svg'
    (0,_components_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        text: '2025',
        tag: 'h2',
        classes: ['footer__link'],
        parent: footer,
    });
    (0,_components_create_anchor_element__WEBPACK_IMPORTED_MODULE_2__.createAnchorElement)({
        text: 'SashAwl',
        href: 'https://github.com/SashAwl',
        classes: ['footer__link'],
        parent: footer,
    });
    return container;
}


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
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAuthResponse: () => (/* binding */ handleAuthResponse)
/* harmony export */ });
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _vue_pages_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue/pages/main */ "./src/vue/pages/main.ts");
/* harmony import */ var _vue_pages_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue/pages/auth */ "./src/vue/pages/auth.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/api */ "./src/api/api.ts");
/* harmony import */ var _vue_pages_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vue/pages/about */ "./src/vue/pages/about.ts");
/* harmony import */ var _vue_components_modal_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vue/components/modal-error */ "./src/vue/components/modal-error.ts");
/* harmony import */ var _vue_components_create_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vue/components/create-message */ "./src/vue/components/create-message.ts");
/* harmony import */ var _api_requests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/requests */ "./src/api/requests.ts");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/state */ "./src/state/state.ts");









(0,_vue_pages_auth__WEBPACK_IMPORTED_MODULE_2__.createAuthForm)(_api_requests__WEBPACK_IMPORTED_MODULE_7__.goLogin, (page) => {
    openAboutPage(page);
});
(0,_api_requests__WEBPACK_IMPORTED_MODULE_7__.getUnautorizedUsers)();
(0,_api_requests__WEBPACK_IMPORTED_MODULE_7__.getAllAuthentificatedUsers)();
(0,_api_api__WEBPACK_IMPORTED_MODULE_3__.subscribeToMessages)(handleAuthResponse);
function handleAuthResponse(response) {
    if (response.type === 'USER_LOGIN') {
        if (response.payload.user.isLogined) {
            document.body.innerHTML = '';
            const user = (0,_state_state__WEBPACK_IMPORTED_MODULE_8__.getCurrentUser)();
            (0,_vue_pages_main__WEBPACK_IMPORTED_MODULE_1__.createMainPage)(user === null || user === void 0 ? void 0 : user.login, _api_requests__WEBPACK_IMPORTED_MODULE_7__.goLogout, (0,_state_state__WEBPACK_IMPORTED_MODULE_8__.getUserStatus)(), (page) => {
                openAboutPage(page);
            }, _api_requests__WEBPACK_IMPORTED_MODULE_7__.sendMessageToUser);
        }
    }
    else if (response.type === 'USER_LOGOUT') {
        if (!response.payload.user.isLogined) {
            (0,_state_state__WEBPACK_IMPORTED_MODULE_8__.setCurrentUser)(null);
            document.body.innerHTML = '';
            const user = (0,_state_state__WEBPACK_IMPORTED_MODULE_8__.getCurrentUser)();
            (0,_vue_pages_auth__WEBPACK_IMPORTED_MODULE_2__.createAuthForm)(_api_requests__WEBPACK_IMPORTED_MODULE_7__.goLogin, (page) => {
                openAboutPage(page);
            });
        }
    }
    else if (response.type === 'USER_ACTIVE') {
        (0,_state_state__WEBPACK_IMPORTED_MODULE_8__.setActiveUsers)(response.payload.users);
    }
    else if (response.type === 'USER_INACTIVE') {
        (0,_state_state__WEBPACK_IMPORTED_MODULE_8__.setUsers)(response.payload.users);
        // getMessageHistory('www');
        // users.forEach((item) => {
        //   console.log('req', item.login);
        //   getMessageHistory(item.login);
        // });
    }
    else if (response.type === 'ERROR') {
        const errorModal = document.querySelector('.modal-error');
        if (!errorModal) {
            (0,_vue_components_modal_error__WEBPACK_IMPORTED_MODULE_5__.showErrorModal)(response.payload.error);
        }
    }
    else if (response.type === 'MSG_FROM_USER') {
        console.log('====', response.payload.messages);
    }
    else if (response.type === 'MSG_SEND') {
        console.log(response.payload);
        const detailMessage = response.payload.message;
        const detailMessageObject = {
            userName: detailMessage.from,
            userText: detailMessage.text,
            time: detailMessage.datetime,
            deliveryStatus: detailMessage.status.isDelivered,
            readStatus: detailMessage.status.isReaded,
            editStatus: detailMessage.status.isEdited,
        };
        (0,_vue_components_create_message__WEBPACK_IMPORTED_MODULE_6__.showSendedMessage)(detailMessageObject);
    }
}
function openAboutPage(page) {
    document.body.innerHTML = '';
    if (page === 'auth-form') {
        (0,_vue_pages_about__WEBPACK_IMPORTED_MODULE_4__.showAbout)(() => {
            document.body.innerHTML = '';
            (0,_vue_pages_auth__WEBPACK_IMPORTED_MODULE_2__.createAuthForm)(_api_requests__WEBPACK_IMPORTED_MODULE_7__.goLogin, (page) => {
                openAboutPage(page);
            });
        });
    }
    if (page === 'main') {
        (0,_vue_pages_about__WEBPACK_IMPORTED_MODULE_4__.showAbout)(() => {
            document.body.innerHTML = '';
            const user = (0,_state_state__WEBPACK_IMPORTED_MODULE_8__.getCurrentUser)();
            (0,_vue_pages_main__WEBPACK_IMPORTED_MODULE_1__.createMainPage)(user === null || user === void 0 ? void 0 : user.login, () => (0,_api_requests__WEBPACK_IMPORTED_MODULE_7__.goLogout)(), (0,_state_state__WEBPACK_IMPORTED_MODULE_8__.getUsers)(), (page) => {
                openAboutPage(page);
            }, _api_requests__WEBPACK_IMPORTED_MODULE_7__.sendMessageToUser);
        });
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxPQUFPLFlBQVksS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdB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QVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSwyREFBUztBQUNqQjtBQUNBLHlCQUF5Qiw0REFBYztBQUN2QyxZQUFZLCtEQUFjLCtEQUErRCx1REFBUSxJQUFJLHNEQUFRO0FBQzdHO0FBQ0EsYUFBYSxFQUFFLDREQUFpQjtBQUNoQyxTQUFTO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvYXBpL2FwaS50cyIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy9hcGkvcmVxdWVzdHMudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvc3RhdGUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly9mdW4tY2hhdC8uL3NyYy92dWUvY29tcG9uZW50cy9jcmVhdGUtYW5jaG9yLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdnVlL2NvbXBvbmVudHMvY3JlYXRlLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdnVlL2NvbXBvbmVudHMvY3JlYXRlLWlucHV0LWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdnVlL2NvbXBvbmVudHMvY3JlYXRlLW1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdnVlL2NvbXBvbmVudHMvY3JlYXRlLXRleHRhcmVhLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdnVlL2NvbXBvbmVudHMvbW9kYWwtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvLi9zcmMvdnVlL3BhZ2VzL2Fib3V0LnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3Z1ZS9wYWdlcy9hdXRoLnRzIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL3Z1ZS9wYWdlcy9tYWluLnRzIiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4tY2hhdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi1jaGF0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnVuLWNoYXQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Z1bi1jaGF0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmhlYWRlcixcbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogNTBweCAwO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhICh3aWR0aCA8PSA3NjhweCkge1xuICAuaGVhZGVyIC5oZWFkaW5nIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG9yZGVyOiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyIC51c2VyX19uYW1lIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuICAuaGVhZGVyIC5oZWFkZXJfX2J1dHRvbnMge1xuICAgIG9yZGVyOiAyO1xuICB9XG59XG5cbi5oZWFkZXJfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mb290ZXJfX2xpbmsge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGdhcDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhICh3aWR0aCA8PSA3NjhweCkge1xuICAubWFpbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uY29udGFjdHMsXG4ubWVzc2FnZXMge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGhlaWdodDogNjZ2aDtcbn1cbi5jb250YWN0c19fc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFjdHNfX2xpc3Qge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFjdHNfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0c19fc3RhdHVzIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDc2LCA3Nik7XG59XG4uY29udGFjdHNfX25hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKHdpZHRoIDw9IDc2OHB4KSB7XG4gIC5jb250YWN0cyB7XG4gICAgZmxleDogbm9uZTtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gIH1cbn1cblxuLm1lc3NhZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAzO1xufVxuLm1lc3NhZ2VzX190eXBlLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcbn1cbi5tZXNzYWdlc19fdHlwZSB7XG4gIGZsZXgtZ3JvdzogMC44O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1lc3NhZ2VzX19zZWxlY3RlZC11c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xufVxuLm1lc3NhZ2VzX19oaXN0b3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBnYXA6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLm1lc3NhZ2VzX19oaXN0b3J5X19saXN0IHtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4ubWVzc2FnZXNfX2l0ZW0ge1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAwIDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG59XG4ubWVzc2FnZXNfX2l0ZW1fX2RldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5tZXNzYWdlc19faXRlbV9fdGltZSB7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWVzc2FnZXNfX2l0ZW1fX3RleHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5idXR0b24tc3VibWl0LCAuYnV0dG9uLWFib3V0LCAuYnV0dG9uLWJhY2ssIC5idXR0b24tY2xvc2UtZXJyb3Ige1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiogQXV0aGVudGlmaWNhdGlvbiAqL1xuLmF1dGhfX2Zvcm0ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDAgM3B4IDhweDtcbn1cbi5hdXRoX19mb3JtLWl0ZW0ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhICh3aWR0aCA8PSAxNDQwcHgpIHtcbiAgLmF1dGhfX2Zvcm0ge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gNzY4cHgpIHtcbiAgLmF1dGhfX2Zvcm0ge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbi5hdXRoX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5hdXRoX19iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGRhO1xufVxuLmF1dGhfX3ZhbGlkLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qKiBNb2RhbCAqL1xuLmVycm9yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAyM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDAgM3B4IDhweDtcbn1cbi5lcnJvcl9faGVhZGluZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5AbWVkaWEgKHdpZHRoIDw9IDE0NDBweCkge1xuICAuZXJyb3Ige1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gNzY4cHgpIHtcbiAgLmVycm9yIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7O0VB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QUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXZCRjs7QUEwQkEsV0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtBQXZCRjtBQXlCRTtFQUNFLFVBQUE7QUF2Qko7QUEwQkU7RUFyQkY7SUFzQkksVUFBQTtFQXZCRjtBQUNGO0FBeUJFO0VBekJGO0lBMEJJLFVBQUE7RUF0QkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmhlYWRlcixcXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gIEBtZWRpYSAod2lkdGggPD0gNzY4cHgpIHtcXG4gICAgLmhlYWRpbmcge1xcbiAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgb3JkZXI6IDE7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC51c2VyX19uYW1lIHtcXG4gICAgICBvcmRlcjogMjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyX19idXR0b25zIHtcXG4gICAgICBvcmRlcjogMjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5mb290ZXJfX2xpbmsge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgQG1lZGlhICh3aWR0aCA8PSA3NjhweCkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uY29udGFjdHMsXFxuLm1lc3NhZ2VzIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmNvbnRhY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGhlaWdodDogNjZ2aDtcXG5cXG4gICZfX3NlYXJjaCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgJl9fbGlzdCB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gICZfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICZfX3N0YXR1cyB7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc1IDc2IDc2KTtcXG4gIH1cXG5cXG4gICZfX25hbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICBAbWVkaWEgKHdpZHRoIDw9IDc2OHB4KSB7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gIH1cXG59XFxuXFxuLm1lc3NhZ2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1ncm93OiAzO1xcblxcbiAgJl9fdHlwZS1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxuICB9XFxuXFxuICAmX190eXBlIHtcXG4gICAgZmxleC1ncm93OiAwLjg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAmX19zZWxlY3RlZC11c2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbiAgfVxcblxcbiAgJl9faGlzdG9yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG5cXG4gICAgJl9fbGlzdCB7XFxuICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19pdGVtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMCAzNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcblxcbiAgICAmX19kZXRhaWxzIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogNDBweDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuXFxuICAgICZfX3RpbWUge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC01cHg7XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNnB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcblxcbiAgJi1zdWJtaXQsXFxuICAmLWFib3V0LFxcbiAgJi1iYWNrLFxcbiAgJi1jbG9zZS1lcnJvciB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxufVxcblxcbi8qKiBBdXRoZW50aWZpY2F0aW9uICovXFxuXFxuLmF1dGgge1xcbiAgJl9fZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTc1JSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgcGFkZGluZzogNTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMCAzcHggOHB4O1xcblxcbiAgICAmLWl0ZW0ge1xcbiAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAod2lkdGggPD0gMTQ0MHB4KSB7XFxuICAgICAgd2lkdGg6IDQwJTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKHdpZHRoIDw9IDc2OHB4KSB7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fbGFiZWwge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxuXFxuICAmX19iYWNrZ3JvdW5kIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllZGRhO1xcbiAgfVxcblxcbiAgJl9fdmFsaWQtZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcbn1cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyoqIE1vZGFsICovXFxuLmVycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDI7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMjNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDAgM3B4IDhweDtcXG5cXG4gICZfX2hlYWRpbmcge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgQG1lZGlhICh3aWR0aCA8PSAxNDQwcHgpIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAod2lkdGggPD0gNzY4cHgpIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vbG9jYWxob3N0OjQwMDAnKTtcbmNvbnN0IGxpc3RlbmVycyA9IFtdO1xuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKGRhdGEpKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgc29ja2V0O1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZVRvTWVzc2FnZXMobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIGlmIChzb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi92dWUvY29tcG9uZW50cy9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlciwgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9zdGF0ZS9zdGF0ZSc7XG5mdW5jdGlvbiBzZW5kTWVzc2FnZVRvVXNlcih1c2VyTmFtZSwgdGV4dE1lc3NhZ2UpIHtcbiAgICBzZW5kTWVzc2FnZSh7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICAgIHR5cGU6ICdNU0dfU0VORCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0bzogdXNlck5hbWUsXG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dE1lc3NhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0QWxsQXV0aGVudGlmaWNhdGVkVXNlcnMoKSB7XG4gICAgc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgICB0eXBlOiAnVVNFUl9BQ1RJVkUnLFxuICAgICAgICBwYXlsb2FkOiBudWxsLFxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0VW5hdXRvcml6ZWRVc2VycygpIHtcbiAgICBzZW5kTWVzc2FnZSh7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICAgIHR5cGU6ICdVU0VSX0lOQUNUSVZFJyxcbiAgICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldE1lc3NhZ2VIaXN0b3J5KGxvZ2luVXNlcikge1xuICAgIHNlbmRNZXNzYWdlKHtcbiAgICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICAgICAgdHlwZTogJ01TR19GUk9NX1VTRVInLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgbG9naW46IGxvZ2luVXNlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUF1dGhGb3JtKGRhdGEpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICBpZiAoIWRhdGEubG9naW4udHJpbSgpKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdMb2dpbiBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkYXRhLmxvZ2luLnRyaW0oKS5sZW5ndGggPCAzKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdMb2dpbiBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMyBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmICghZGF0YS5wYXNzd29yZCkge1xuICAgICAgICBlcnJvcnMucHVzaCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGF0YS5wYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRhdGEucGFzc3dvcmQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBlcnJvcnMucHVzaCgnVGhlIHBhc3N3b3JkIGNhbm5vdCBjb25zaXN0IG9ubHkgb2Ygc3BhY2VzJyk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG59XG5mdW5jdGlvbiBzaG93QXV0aEVycm9yKGVycm9ycykge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXN1Ym1pdCcpO1xuICAgIGNvbnN0IGVyb3Jyc1RleHQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAncCcsXG4gICAgICAgIGNsYXNzZXM6IFsnYXV0aF9fdmFsaWQtZXJyb3InXSxcbiAgICAgICAgdGV4dDogYCR7QXJyYXkuaXNBcnJheShlcnJvcnMpID8gZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLmpvaW4oJy4gJykgOiBlcnJvcnN9YCxcbiAgICB9KTtcbiAgICBmb3JtID09PSBudWxsIHx8IGZvcm0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm0uYWZ0ZXIoZXJvcnJzVGV4dCk7XG59XG5mdW5jdGlvbiBnb0xvZ291dCgpIHtcbiAgICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZW5kTWVzc2FnZSh7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICAgIHR5cGU6ICdVU0VSX0xPR09VVCcsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHVzZXI6IHsgbG9naW46IHVzZXIubG9naW4sIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5mdW5jdGlvbiBnb0xvZ2luKHVzZXJEYXRhKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGVBdXRoRm9ybSh1c2VyRGF0YSk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGVycm9yc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aF9fdmFsaWQtZXJyb3InKTtcbiAgICAgICAgaWYgKGVycm9yc1RleHQpIHtcbiAgICAgICAgICAgIGVycm9yc1RleHQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hvd0F1dGhFcnJvcihlcnJvcnMpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEN1cnJlbnRVc2VyKHVzZXJEYXRhKTtcbiAgICBzZW5kTWVzc2FnZSh7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICAgIHR5cGU6ICdVU0VSX0xPR0lOJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgdXNlcjogeyBsb2dpbjogdXNlckRhdGEubG9naW4sIHBhc3N3b3JkOiB1c2VyRGF0YS5wYXNzd29yZCB9LFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuZXhwb3J0IHsgc2VuZE1lc3NhZ2VUb1VzZXIsIGdldEFsbEF1dGhlbnRpZmljYXRlZFVzZXJzLCBnZXRVbmF1dG9yaXplZFVzZXJzLCBnZXRNZXNzYWdlSGlzdG9yeSwgZ29Mb2dvdXQsIGdvTG9naW4sIH07XG4iLCJsZXQgY3VycmVudFVzZXI7XG5sZXQgdXNlcnMgPSBbXTtcbmxldCBhY3RpdmVVc2VycyA9IFtdO1xuZXhwb3J0IHsgY3VycmVudFVzZXIsIHVzZXJzLCBhY3RpdmVVc2VycyB9O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRVc2VyKHVzZXIpIHtcbiAgICBjdXJyZW50VXNlciA9IHVzZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJzKHVzZXJzUmVzcG9uc2UpIHtcbiAgICB1c2VycyA9IFsuLi51c2Vyc1Jlc3BvbnNlXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VycygpIHtcbiAgICByZXR1cm4gdXNlcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlVXNlcnModXNlcnNSZXNwb25zZSkge1xuICAgIGFjdGl2ZVVzZXJzID0gWy4uLnVzZXJzUmVzcG9uc2VdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVVzZXJzKCkge1xuICAgIHJldHVybiBhY3RpdmVVc2Vycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyU3RhdHVzKCkge1xuICAgIGNvbnN0IGFjdGl2ZVVzZXJOYW1lcyA9IGFjdGl2ZVVzZXJzLm1hcCgodXNlcikgPT4gdXNlci5sb2dpbik7XG4gICAgY29uc3QgaW5hY3RpdmVVc2VycyA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4ge1xuICAgICAgICByZXR1cm4gIWFjdGl2ZVVzZXJOYW1lcy5pbmNsdWRlcyh1c2VyLmxvZ2luKTtcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLmFjdGl2ZVVzZXJzLCAuLi5pbmFjdGl2ZVVzZXJzXTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFuY2hvckVsZW1lbnQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgdGV4dCA9ICcnLCBocmVmID0gJycsIHRhcmdldCA9ICcnLCBwYXJlbnQsIGNsYXNzZXMgPSBbXSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIHRhcmdldCk7XG4gICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgfVxuICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgdGFnID0gJ2RpdicsIHRleHQgPSAnJywgcGFyZW50LCBjbGFzc2VzID0gW10gfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICB9XG4gICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHR5cGUgPSAnJywgcGxhY2Vob2xkZXIgPSAnJywgcGFyZW50LCBjbGFzc2VzID0gW10gfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XG4gICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgfVxuICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dTZW5kZWRNZXNzYWdlKHsgdXNlck5hbWUsIHVzZXJUZXh0LCB0aW1lLCBkZWxpdmVyeVN0YXR1cywgcmVhZFN0YXR1cywgZWRpdFN0YXR1cywgfSkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VzX19oaXN0b3J5Jyk7XG4gICAgY29uc3QgaW5pdGlhbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZXNfX2hpc3RvcnlfX3RleHQnKTtcbiAgICBjb25zdCBvbGRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VzX190eXBlJyk7XG4gICAgaWYgKG9sZE1lc3NhZ2UgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgIG9sZE1lc3NhZ2UudmFsdWUgPSAnJztcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGluaXRpYWxUZXh0KSB7XG4gICAgICAgICAgICBpbml0aWFsVGV4dC5yZW1vdmUoKTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2VzX19oaXN0b3J5X19saXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZUl0ZW0gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ21lc3NhZ2VzX19pdGVtJ10sXG4gICAgICAgICAgICBwYXJlbnQ6IG1lc3NhZ2VzLFxuICAgICAgICB9KTtcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdoNScsXG4gICAgICAgICAgICB0ZXh0OiB1c2VyTmFtZSxcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnbWVzc2FnZXNfX2l0ZW1fX25hbWUnXSxcbiAgICAgICAgICAgIHBhcmVudDogbWVzc2FnZUl0ZW0sXG4gICAgICAgIH0pO1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ3AnLFxuICAgICAgICAgICAgdGV4dDogdXNlclRleHQsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ21lc3NhZ2VzX19pdGVtX190ZXh0J10sXG4gICAgICAgICAgICBwYXJlbnQ6IG1lc3NhZ2VJdGVtLFxuICAgICAgICB9KTtcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdwJyxcbiAgICAgICAgICAgIHRleHQ6IGZvcm1hdFRpbWUodGltZSksXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ21lc3NhZ2VzX19pdGVtX190aW1lJ10sXG4gICAgICAgICAgICBwYXJlbnQ6IG1lc3NhZ2VJdGVtLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnbWVzc2FnZXNfX2l0ZW1fX2RldGFpbHMnXSxcbiAgICAgICAgICAgIHBhcmVudDogbWVzc2FnZUl0ZW0sXG4gICAgICAgIH0pO1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ3AnLFxuICAgICAgICAgICAgdGV4dDogYCR7ZGVsaXZlcnlTdGF0dXMgPyAnJyA6ICdub3QnfSBkZWxpdmVyZWRgLFxuICAgICAgICAgICAgY2xhc3NlczogWydtZXNzYWdlc19faXRlbV9fZGV0YWlsJ10sXG4gICAgICAgICAgICBwYXJlbnQ6IGRldGFpbHMsXG4gICAgICAgIH0pO1xuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ3AnLFxuICAgICAgICAgICAgdGV4dDogYCR7ZWRpdFN0YXR1cyA/ICcnIDogJ25vdCd9IGVkaXRlZGAsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ21lc3NhZ2VzX19pdGVtX19kZXRhaWwnXSxcbiAgICAgICAgICAgIHBhcmVudDogZGV0YWlscyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAncCcsXG4gICAgICAgICAgICB0ZXh0OiBgJHtyZWFkU3RhdHVzID8gJycgOiAnbm90J30gcmVhZGVkYCxcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnbWVzc2FnZXNfX2l0ZW1fX2RldGFpbCddLFxuICAgICAgICAgICAgcGFyZW50OiBkZXRhaWxzLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lKHRpbWUpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZSk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0sICR7aG91cnN9OiR7bWludXRlc31gO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRhcmVhRWxlbWVudChvcHRpb25zKSB7XG4gICAgY29uc3QgeyByb3dzID0gJycsIGNvbHMgPSAnJywgcGxhY2Vob2xkZXIgPSAnJywgbmFtZSA9ICcnLCBwYXJlbnQsIGNsYXNzZXMgPSBbXSwgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCByb3dzKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY29scycsIGNvbHMpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgIH1cbiAgICBpZiAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmV4cG9ydCBmdW5jdGlvbiBzaG93RXJyb3JNb2RhbChlcnJvcikge1xuICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIGNsYXNzZXM6IFsnZXJyb3InXSxcbiAgICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgIH0pO1xuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdoMycsXG4gICAgICAgIHRleHQ6ICdFcnJvciEnLFxuICAgICAgICBjbGFzc2VzOiBbJ2Vycm9yX19oZWFkaW5nJ10sXG4gICAgICAgIHBhcmVudDogbW9kYWwsXG4gICAgfSk7XG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ3AnLFxuICAgICAgICB0ZXh0OiBgRXJyb3I6ICR7ZXJyb3J9YCxcbiAgICAgICAgY2xhc3NlczogWydlcnJvcl9fdGV4dCddLFxuICAgICAgICBwYXJlbnQ6IG1vZGFsLFxuICAgIH0pO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ2J1dHRvbi1jbG9zZS1lcnJvciddLFxuICAgICAgICB0ZXh0OiAnT0snLFxuICAgICAgICBwYXJlbnQ6IG1vZGFsLFxuICAgIH0pO1xuICAgIGNsb3NlQnV0dG9uLmZvY3VzKCk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIHJldHVybiBtb2RhbDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGNyZWF0ZUFuY2hvckVsZW1lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NyZWF0ZS1hbmNob3ItZWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gc2hvd0Fib3V0KGdvVG9CYWNrKSB7XG4gICAgY29uc3QgYWJvdXQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWydhYm91dCddLFxuICAgICAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG4gICAgfSk7XG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2gxJyxcbiAgICAgICAgdGV4dDogJ0Z1biBjaGF0JyxcbiAgICAgICAgY2xhc3NlczogWydoZWFkaW5nJ10sXG4gICAgICAgIHBhcmVudDogYWJvdXQsXG4gICAgfSk7XG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ3AnLFxuICAgICAgICB0ZXh0OiAnVGhlIGFwcCBpcyBkZXNpZ25lZCB0byBkZW1vbnN0cmF0ZSB0aGUgRnVuIENoYXQgYXNzaWdubWVudCBhcyBwYXJ0IG9mIHRoZSBSU1NjaG9vbCBKUy9GRSAyMDI0IGNvdXJzZS4nLFxuICAgICAgICBjbGFzc2VzOiBbJ2hlYWRpbmcnXSxcbiAgICAgICAgcGFyZW50OiBhYm91dCxcbiAgICB9KTtcbiAgICBjcmVhdGVBbmNob3JFbGVtZW50KHtcbiAgICAgICAgdGV4dDogJ0F1dGhvciBTYXNoQXdsJyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TYXNoQXdsJyxcbiAgICAgICAgY2xhc3NlczogWydhYm91dF9fbGluayddLFxuICAgICAgICBwYXJlbnQ6IGFib3V0LFxuICAgIH0pO1xuICAgIGNvbnN0IGJhY2tCdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgdGV4dDogJ0JhY2snLFxuICAgICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdidXR0b24tYmFjayddLFxuICAgICAgICBwYXJlbnQ6IGFib3V0LFxuICAgIH0pO1xuICAgIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdvVG9CYWNrKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFib3V0O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlSW5wdXRFbGVtZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jcmVhdGUtaW5wdXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jcmVhdGUtZWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXV0aEZvcm0ob25TdWJtaXQsIGdvQWJvdXRQYWdlKSB7XG4gICAgY29uc3QgYXV0aCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ2F1dGgnXSxcbiAgICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgIH0pO1xuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ2F1dGhfX2JhY2tncm91bmQnXSxcbiAgICAgICAgcGFyZW50OiBhdXRoLFxuICAgIH0pO1xuICAgIGNvbnN0IGF1dGhGb3JtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2Zvcm0nLFxuICAgICAgICBjbGFzc2VzOiBbJ2F1dGhfX2Zvcm0nXSxcbiAgICAgICAgcGFyZW50OiBhdXRoLFxuICAgIH0pO1xuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgIHRleHQ6ICdMb2dpbicsXG4gICAgICAgIGZvcjogJ2xvZ2luJyxcbiAgICAgICAgY2xhc3NlczogWydhdXRoX19sYWJlbCcsICdhdXRoX19mb3JtLWl0ZW0nXSxcbiAgICAgICAgcGFyZW50OiBhdXRoRm9ybSxcbiAgICB9KTtcbiAgICBjb25zdCBhdXRoTG9naW4gPSBjcmVhdGVJbnB1dEVsZW1lbnQoe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIG5hbWU6ICdsb2dpbicsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnSW5wdXQgeW91ciBsb2dpbicsXG4gICAgICAgIGNsYXNzZXM6IFsnYXV0aF9fZm9ybS1pdGVtJ10sXG4gICAgICAgIHBhcmVudDogYXV0aEZvcm0sXG4gICAgfSk7XG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgdGV4dDogJ1Bhc3N3b3JkJyxcbiAgICAgICAgZm9yOiAncGFzc3dvcmQnLFxuICAgICAgICBjbGFzc2VzOiBbJ2F1dGhfX2xhYmVsJywgJ2F1dGhfX2Zvcm0taXRlbSddLFxuICAgICAgICBwYXJlbnQ6IGF1dGhGb3JtLFxuICAgIH0pO1xuICAgIGNvbnN0IGF1dGhQYXNzd29yZCA9IGNyZWF0ZUlucHV0RWxlbWVudCh7XG4gICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgIG5hbWU6ICdwYXNzd29yZCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnSW5wdXQgeW91ciBwYXNzd29yZCcsXG4gICAgICAgIGNsYXNzZXM6IFsnYXV0aF9fZm9ybS1pdGVtJ10sXG4gICAgICAgIHBhcmVudDogYXV0aEZvcm0sXG4gICAgfSk7XG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgIHRleHQ6ICdTdWJtaXQnLFxuICAgICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdidXR0b24tc3VibWl0J10sXG4gICAgICAgIHBhcmVudDogYXV0aEZvcm0sXG4gICAgfSk7XG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgdGV4dDogJ0Fib3V0JyxcbiAgICAgICAgY2xhc3NlczogWydidXR0b24nLCAnYnV0dG9uLWFib3V0J10sXG4gICAgICAgIHBhcmVudDogYXV0aEZvcm0sXG4gICAgfSk7XG4gICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdvQWJvdXRQYWdlKCdhdXRoLWZvcm0nKTtcbiAgICB9KTtcbiAgICBpZiAoYXV0aEZvcm0pIHtcbiAgICAgICAgYXV0aEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZGF0YVVzZXIgPSB7XG4gICAgICAgICAgICAgICAgbG9naW46IGF1dGhMb2dpbi52YWx1ZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogYXV0aFBhc3N3b3JkLnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9uU3VibWl0KGRhdGFVc2VyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdhdXRoRm9ybSBpcyBudWxsJyk7XG4gICAgfVxuICAgIGF1dGhGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFVc2VyID0ge1xuICAgICAgICAgICAgICAgIGxvZ2luOiBhdXRoTG9naW4udmFsdWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dGhQYXNzd29yZC52YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvblN1Ym1pdChkYXRhVXNlcik7XG4gICAgICAgIH1cbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgcmV0dXJuIGF1dGg7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEVsZW1lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NyZWF0ZS1pbnB1dC1lbGVtZW50JztcbmltcG9ydCB7IGNyZWF0ZUFuY2hvckVsZW1lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NyZWF0ZS1hbmNob3ItZWxlbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVUZXh0YXJlYUVsZW1lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NyZWF0ZS10ZXh0YXJlYS1lbGVtZW50JztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluUGFnZShsb2dpbiA9ICcnLCBsb2dPdXQsIHVzZXJzLCBnb0Fib3V0UGFnZSwgc2VuZE1lc3NhZ2UpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWydjb250YWluZXInXSxcbiAgICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdoZWFkZXInLFxuICAgICAgICBjbGFzc2VzOiBbJ2hlYWRlciddLFxuICAgICAgICBwYXJlbnQ6IGNvbnRhaW5lcixcbiAgICB9KTtcbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICB0ZXh0OiBgVXNlcjogJHtsb2dpbn1gLFxuICAgICAgICBjbGFzc2VzOiBbJ3VzZXJfX25hbWUnXSxcbiAgICAgICAgcGFyZW50OiBoZWFkZXIsXG4gICAgfSk7XG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2gxJyxcbiAgICAgICAgdGV4dDogJ0Z1biBjaGF0JyxcbiAgICAgICAgY2xhc3NlczogWydoZWFkaW5nJ10sXG4gICAgICAgIHBhcmVudDogaGVhZGVyLFxuICAgIH0pO1xuICAgIGNvbnN0IGV4aXRCbG9jayA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ2hlYWRlcl9fYnV0dG9ucyddLFxuICAgICAgICBwYXJlbnQ6IGhlYWRlcixcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25JbmZvID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgIHRleHQ6ICdJbmZvJyxcbiAgICAgICAgY2xhc3NlczogWydidXR0b24nLCAnYnV0dG9uLWluZm8nXSxcbiAgICAgICAgcGFyZW50OiBleGl0QmxvY2ssXG4gICAgfSk7XG4gICAgYnV0dG9uSW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ29BYm91dFBhZ2UoJ21haW4nKTtcbiAgICB9KTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICB0ZXh0OiAnQ2xvc2UnLFxuICAgICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdidXR0b24tY2xvc2UnXSxcbiAgICAgICAgcGFyZW50OiBleGl0QmxvY2ssXG4gICAgfSk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvZ091dCgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnbWFpbicsXG4gICAgICAgIGNsYXNzZXM6IFsnbWFpbiddLFxuICAgICAgICBwYXJlbnQ6IGNvbnRhaW5lcixcbiAgICB9KTtcbiAgICBjb25zdCBjb250YWN0cyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ2NvbnRhY3RzJ10sXG4gICAgICAgIHBhcmVudDogbWFpbixcbiAgICB9KTtcbiAgICBjb25zdCBzZWFyY2ggPSBjcmVhdGVJbnB1dEVsZW1lbnQoe1xuICAgICAgICB0eXBlOiAnc2VhcmNoJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2guLicsXG4gICAgICAgIGNsYXNzZXM6IFsnY29udGFjdHNfX3NlYXJjaCddLFxuICAgICAgICBwYXJlbnQ6IGNvbnRhY3RzLFxuICAgIH0pO1xuICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHNlYXJjaC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB1c2VyTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gKChfYSA9IGl0ZW0udGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGlzTWF0Y2ggPSBuYW1lLmluY2x1ZGVzKHNlYXJjaFRlcm0pO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gaXNNYXRjaCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRhY3RzTGlzdCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ2NvbnRhY3RzX19saXN0J10sXG4gICAgICAgIHBhcmVudDogY29udGFjdHMsXG4gICAgfSk7XG4gICAgY29uc3QgdXNlckxpc3QgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFjdEl0ZW0gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2NvbnRhY3RzX19pdGVtJ10sXG4gICAgICAgICAgICBwYXJlbnQ6IGNvbnRhY3RzTGlzdCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRhY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lVXNlciA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChuYW1lVXNlciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgKG5hbWVVc2VyID09PSBudWxsIHx8IG5hbWVVc2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lVXNlci5jbG9zZXN0KCcuY29udGFjdHNfX25hbWUnKSkpIHtcbiAgICAgICAgICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IG5hbWVVc2VyLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHVzZXJzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5sb2dpbiA9PT0gbmFtZVVzZXIudGV4dENvbnRlbnQpWzBdLmlzTG9naW5lZDtcbiAgICAgICAgICAgICAgICB1c2VyU3RhdHVzLnRleHRDb250ZW50ID0gc3RhdHVzID8gJ29ubGluZScgOiAnb2ZmbGluZSc7XG4gICAgICAgICAgICAgICAgdXNlclN0YXR1cy5zdHlsZS5jb2xvciA9IHN0YXR1cyA/ICcjMzJiZjMyJyA6ICdyZ2IoMTc1IDc2IDc2KSc7XG4gICAgICAgICAgICAgICAgaGlzdG9yeVRleHQudGV4dENvbnRlbnQgPSAnV3JpdGUgeW91ciBmaXJzdCBtZXNzYWdlLi4uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RzU3RhdHVzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NlczogWydjb250YWN0c19fc3RhdHVzJ10sXG4gICAgICAgICAgICBwYXJlbnQ6IGNvbnRhY3RJdGVtLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVzZXIuaXNMb2dpbmVkKSB7XG4gICAgICAgICAgICBjb250YWN0c1N0YXR1cy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzMmJmMzInO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAncCcsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2NvbnRhY3RzX19uYW1lJ10sXG4gICAgICAgICAgICB0ZXh0OiB1c2VyLmxvZ2luLFxuICAgICAgICAgICAgcGFyZW50OiBjb250YWN0SXRlbSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb250YWN0SXRlbTtcbiAgICB9KTtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ21lc3NhZ2VzJ10sXG4gICAgICAgIHBhcmVudDogbWFpbixcbiAgICB9KTtcbiAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWydtZXNzYWdlc19fc2VsZWN0ZWQtdXNlciddLFxuICAgICAgICBwYXJlbnQ6IG1lc3NhZ2VzLFxuICAgIH0pO1xuICAgIGNvbnN0IHVzZXJOYW1lID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2gzJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIGNsYXNzZXM6IFsnbWVzc2FnZXNfX3VzZXItbmFtZSddLFxuICAgICAgICBwYXJlbnQ6IHNlbGVjdGVkVXNlcixcbiAgICB9KTtcbiAgICBjb25zdCB1c2VyU3RhdHVzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2gzJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIGNsYXNzZXM6IFsnbWVzc2FnZXNfX3VzZXItc3RhdHVzJ10sXG4gICAgICAgIHBhcmVudDogc2VsZWN0ZWRVc2VyLFxuICAgIH0pO1xuICAgIGNvbnN0IG1lc3NhZ2VIaXN0b3J5ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIGNsYXNzZXM6IFsnbWVzc2FnZXNfX2hpc3RvcnknXSxcbiAgICAgICAgcGFyZW50OiBtZXNzYWdlcyxcbiAgICB9KTtcbiAgICBjb25zdCBoaXN0b3J5VGV4dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdwJyxcbiAgICAgICAgY2xhc3NlczogWydtZXNzYWdlc19faGlzdG9yeV9fdGV4dCddLFxuICAgICAgICB0ZXh0OiAnU2VsZWN0IGEgdXNlciB0byBzZW5kIGEgbWVzc2FnZSB0by4uLicsXG4gICAgICAgIHBhcmVudDogbWVzc2FnZUhpc3RvcnksXG4gICAgfSk7XG4gICAgY29uc3QgbWVzc2FnZXNUeXBlRm9ybSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ21lc3NhZ2VzX190eXBlLWZvcm0nXSxcbiAgICAgICAgcGFyZW50OiBtZXNzYWdlcyxcbiAgICB9KTtcbiAgICBjb25zdCBtZXNzYWdlRm9ybSA9IGNyZWF0ZVRleHRhcmVhRWxlbWVudCh7XG4gICAgICAgIHJvd3M6ICc0JyxcbiAgICAgICAgY29sczogJzMzJyxcbiAgICAgICAgbmFtZTogJ3R5cGVNZXNzYWdlJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdJbnB1dCB5b3VyIG1lc3NhZ2UuLi4nLFxuICAgICAgICBjbGFzc2VzOiBbJ21lc3NhZ2VzX190eXBlJ10sXG4gICAgICAgIHBhcmVudDogbWVzc2FnZXNUeXBlRm9ybSxcbiAgICB9KTtcbiAgICBjb25zdCBzZW5kTWVzc2FnZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICB0ZXh0OiAnU3VibWl0JyxcbiAgICAgICAgY2xhc3NlczogWydidXR0b24nLCAnbWVzc2FnZXNfX3N1Ym1pdCddLFxuICAgICAgICBwYXJlbnQ6IG1lc3NhZ2VzVHlwZUZvcm0sXG4gICAgfSk7XG4gICAgc2VuZE1lc3NhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvVXNlciA9IHVzZXJOYW1lLnRleHRDb250ZW50IHx8ICcnO1xuICAgICAgICBjb25zdCB0ZXh0TWVzc2FnZSA9IG1lc3NhZ2VGb3JtLnZhbHVlIHx8ICcnO1xuICAgICAgICBpZiAoKHRvVXNlciA9PT0gbnVsbCB8fCB0b1VzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvVXNlci5sZW5ndGgpICE9PSAwICYmIHRleHRNZXNzYWdlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UodG9Vc2VyLCB0ZXh0TWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnZm9vdGVyJyxcbiAgICAgICAgY2xhc3NlczogWydmb290ZXInXSxcbiAgICAgICAgcGFyZW50OiBjb250YWluZXIsXG4gICAgfSk7XG4gICAgY29uc3QgcnNCbG9jayA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxuICAgICAgICBwYXJlbnQ6IGZvb3RlcixcbiAgICB9KTtcbiAgICBjcmVhdGVBbmNob3JFbGVtZW50KHtcbiAgICAgICAgdGV4dDogJ1JTIFNjaG9vbCcsXG4gICAgICAgIGhyZWY6ICdodHRwczovL3JzLnNjaG9vbC8nLFxuICAgICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxuICAgICAgICBwYXJlbnQ6IHJzQmxvY2ssXG4gICAgfSk7XG4gICAgLy8gY29uc3QgcnNJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIC8vICAgICB0YWc6ICdpbWcnLFxuICAgIC8vICAgICBjbGFzc2VzOiBbJ3JzLWltYWdlJywgJ2Zvb3Rlcl9fcnMtbGluayddLFxuICAgIC8vICAgICBwYXJlbnQ6IHJzTGluayxcbiAgICAvLyAgIH0pO1xuICAgIC8vIHJzSW1hZ2Uuc3JjID0gJy4uL2ltYWdlcy9yc3MtbG9nby5zdmcnXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRleHQ6ICcyMDI1JyxcbiAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxuICAgICAgICBwYXJlbnQ6IGZvb3RlcixcbiAgICB9KTtcbiAgICBjcmVhdGVBbmNob3JFbGVtZW50KHtcbiAgICAgICAgdGV4dDogJ1Nhc2hBd2wnLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL1Nhc2hBd2wnLFxuICAgICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxuICAgICAgICBwYXJlbnQ6IGZvb3RlcixcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcbmltcG9ydCB7IGNyZWF0ZU1haW5QYWdlIH0gZnJvbSAnLi92dWUvcGFnZXMvbWFpbic7XG5pbXBvcnQgeyBjcmVhdGVBdXRoRm9ybSB9IGZyb20gJy4vdnVlL3BhZ2VzL2F1dGgnO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9NZXNzYWdlcyB9IGZyb20gJy4vYXBpL2FwaSc7XG5pbXBvcnQgeyBzaG93QWJvdXQgfSBmcm9tICcuL3Z1ZS9wYWdlcy9hYm91dCc7XG5pbXBvcnQgeyBzaG93RXJyb3JNb2RhbCB9IGZyb20gJy4vdnVlL2NvbXBvbmVudHMvbW9kYWwtZXJyb3InO1xuaW1wb3J0IHsgc2hvd1NlbmRlZE1lc3NhZ2UgfSBmcm9tICcuL3Z1ZS9jb21wb25lbnRzL2NyZWF0ZS1tZXNzYWdlJztcbmltcG9ydCB7IGdvTG9naW4sIGdvTG9nb3V0LCBzZW5kTWVzc2FnZVRvVXNlciwgZ2V0QWxsQXV0aGVudGlmaWNhdGVkVXNlcnMsIGdldFVuYXV0b3JpemVkVXNlcnMsIH0gZnJvbSAnLi9hcGkvcmVxdWVzdHMnO1xuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIsIGdldEN1cnJlbnRVc2VyLCBzZXRVc2Vycywgc2V0QWN0aXZlVXNlcnMsIGdldFVzZXJTdGF0dXMsIGdldFVzZXJzLCB9IGZyb20gJy4vc3RhdGUvc3RhdGUnO1xuY3JlYXRlQXV0aEZvcm0oZ29Mb2dpbiwgKHBhZ2UpID0+IHtcbiAgICBvcGVuQWJvdXRQYWdlKHBhZ2UpO1xufSk7XG5nZXRVbmF1dG9yaXplZFVzZXJzKCk7XG5nZXRBbGxBdXRoZW50aWZpY2F0ZWRVc2VycygpO1xuc3Vic2NyaWJlVG9NZXNzYWdlcyhoYW5kbGVBdXRoUmVzcG9uc2UpO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUF1dGhSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS50eXBlID09PSAnVVNFUl9MT0dJTicpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnBheWxvYWQudXNlci5pc0xvZ2luZWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgIGNyZWF0ZU1haW5QYWdlKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlci5sb2dpbiwgZ29Mb2dvdXQsIGdldFVzZXJTdGF0dXMoKSwgKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVuQWJvdXRQYWdlKHBhZ2UpO1xuICAgICAgICAgICAgfSwgc2VuZE1lc3NhZ2VUb1VzZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdVU0VSX0xPR09VVCcpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5wYXlsb2FkLnVzZXIuaXNMb2dpbmVkKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50VXNlcihudWxsKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgIGNyZWF0ZUF1dGhGb3JtKGdvTG9naW4sIChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgb3BlbkFib3V0UGFnZShwYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdVU0VSX0FDVElWRScpIHtcbiAgICAgICAgc2V0QWN0aXZlVXNlcnMocmVzcG9uc2UucGF5bG9hZC51c2Vycyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdVU0VSX0lOQUNUSVZFJykge1xuICAgICAgICBzZXRVc2VycyhyZXNwb25zZS5wYXlsb2FkLnVzZXJzKTtcbiAgICAgICAgLy8gZ2V0TWVzc2FnZUhpc3RvcnkoJ3d3dycpO1xuICAgICAgICAvLyB1c2Vycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3JlcScsIGl0ZW0ubG9naW4pO1xuICAgICAgICAvLyAgIGdldE1lc3NhZ2VIaXN0b3J5KGl0ZW0ubG9naW4pO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ0VSUk9SJykge1xuICAgICAgICBjb25zdCBlcnJvck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWVycm9yJyk7XG4gICAgICAgIGlmICghZXJyb3JNb2RhbCkge1xuICAgICAgICAgICAgc2hvd0Vycm9yTW9kYWwocmVzcG9uc2UucGF5bG9hZC5lcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocmVzcG9uc2UudHlwZSA9PT0gJ01TR19GUk9NX1VTRVInKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09JywgcmVzcG9uc2UucGF5bG9hZC5tZXNzYWdlcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlc3BvbnNlLnR5cGUgPT09ICdNU0dfU0VORCcpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucGF5bG9hZCk7XG4gICAgICAgIGNvbnN0IGRldGFpbE1lc3NhZ2UgPSByZXNwb25zZS5wYXlsb2FkLm1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IGRldGFpbE1lc3NhZ2VPYmplY3QgPSB7XG4gICAgICAgICAgICB1c2VyTmFtZTogZGV0YWlsTWVzc2FnZS5mcm9tLFxuICAgICAgICAgICAgdXNlclRleHQ6IGRldGFpbE1lc3NhZ2UudGV4dCxcbiAgICAgICAgICAgIHRpbWU6IGRldGFpbE1lc3NhZ2UuZGF0ZXRpbWUsXG4gICAgICAgICAgICBkZWxpdmVyeVN0YXR1czogZGV0YWlsTWVzc2FnZS5zdGF0dXMuaXNEZWxpdmVyZWQsXG4gICAgICAgICAgICByZWFkU3RhdHVzOiBkZXRhaWxNZXNzYWdlLnN0YXR1cy5pc1JlYWRlZCxcbiAgICAgICAgICAgIGVkaXRTdGF0dXM6IGRldGFpbE1lc3NhZ2Uuc3RhdHVzLmlzRWRpdGVkLFxuICAgICAgICB9O1xuICAgICAgICBzaG93U2VuZGVkTWVzc2FnZShkZXRhaWxNZXNzYWdlT2JqZWN0KTtcbiAgICB9XG59XG5mdW5jdGlvbiBvcGVuQWJvdXRQYWdlKHBhZ2UpIHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChwYWdlID09PSAnYXV0aC1mb3JtJykge1xuICAgICAgICBzaG93QWJvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNyZWF0ZUF1dGhGb3JtKGdvTG9naW4sIChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgb3BlbkFib3V0UGFnZShwYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHBhZ2UgPT09ICdtYWluJykge1xuICAgICAgICBzaG93QWJvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgY3JlYXRlTWFpblBhZ2UodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLmxvZ2luLCAoKSA9PiBnb0xvZ291dCgpLCBnZXRVc2VycygpLCAocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5BYm91dFBhZ2UocGFnZSk7XG4gICAgICAgICAgICB9LCBzZW5kTWVzc2FnZVRvVXNlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==