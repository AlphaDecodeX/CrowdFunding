/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ethereum_factory__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/build/CampaignFactory.json */ \"./ethereum/build/CampaignFactory.json\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction CampaignIndex() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function start() {\n            return _start.apply(this, arguments);\n        }\n        function _start() {\n            _start = _asyncToGenerator(C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var web3, instance, campaigns;\n                return C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            window.ethereum.request({\n                                method: \"eth_requestAccounts\"\n                            });\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(window.ethereum);\n                            instance = new web3.eth.Contract(JSON.parse(_ethereum_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_5__[\"interface\"]), '0x2C96c85711AA3a3393F72a688527CC44f61372a0');\n                            _ctx.next = 5;\n                            return instance.methods.getDeployedCampaigns().call();\n                        case 5:\n                            campaigns = _ctx.sent;\n                            console.log(campaigns);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _start.apply(this, arguments);\n        }\n        start();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\NAVI MSI\\\\Desktop\\\\Cool Projects\\\\CrowdFunding\\\\pages\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 12\n        },\n        __self: this,\n        children: \"Campaign Index Page.....\"\n    }));\n}\n_s(CampaignIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = CampaignIndex;\nvar _c;\n$RefreshReg$(_c, \"CampaignIndex\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNMO0FBQ007QUFDMkI7QUFDN0M7QUFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFbENRLGFBQWEsR0FBRyxDQUFDOztJQUN0QkQsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztpQkFDRUUsS0FBSzttQkFBTEEsTUFBSzs7aUJBQUxBLE1BQUs7WUFBTEEsTUFBSyxtTEFBcEIsUUFBUSxXQUFlLENBQUM7b0JBRWRQLElBQUksRUFFSlEsUUFBUSxFQUtSQyxTQUFTOzs7OzRCQVJmQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Z0NBQUNDLE1BQU0sRUFBRSxDQUFxQjs0QkFBQyxDQUFDOzRCQUNuRGIsSUFBSSxHQUFHLEdBQUcsQ0FBQ0csNkNBQUksQ0FBQ08sTUFBTSxDQUFDQyxRQUFROzRCQUUvQkgsUUFBUSxHQUFHLEdBQUcsQ0FBQ1IsSUFBSSxDQUFDYyxHQUFHLENBQUNDLFFBQVEsQ0FDbENDLElBQUksQ0FBQ0MsS0FBSyxDQUFDZiw4RUFBeUIsR0FDcEMsQ0FBNEM7O21DQUd4Qk0sUUFBUSxDQUFDVyxPQUFPLENBQUNDLG9CQUFvQixHQUFHQyxJQUFJOzs0QkFBOURaLFNBQVM7NEJBQ2ZhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxTQUFTOzs7Ozs7WUFDekIsQ0FBQzttQkFYY0YsTUFBSzs7UUFZcEJBLEtBQUs7SUFFVCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSxzRUFBRWlCLENBQUc7Ozs7Ozs7a0JBQUMsQ0FBd0I7O0FBRXhDLENBQUM7R0FwQlFsQixhQUFhO0tBQWJBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vYnVpbGQvQ2FtcGFpZ25GYWN0b3J5Lmpzb24nXHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBDYW1wYWlnbkluZGV4KCkge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZShDYW1wYWlnbkZhY3RvcnkuaW50ZXJmYWNlKSxcclxuICAgICAgICAgICAgICAgICcweDJDOTZjODU3MTFBQTNhMzM5M0Y3MmE2ODg1MjdDQzQ0ZjYxMzcyYTAnXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBpbnN0YW5jZS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFydCgpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5DYW1wYWlnbiBJbmRleCBQYWdlLi4uLi48L2Rpdj5cclxuXHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsImZhY3RvcnkiLCJDYW1wYWlnbkZhY3RvcnkiLCJXZWIzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYW1wYWlnbkluZGV4Iiwic3RhcnQiLCJpbnN0YW5jZSIsImNhbXBhaWducyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});