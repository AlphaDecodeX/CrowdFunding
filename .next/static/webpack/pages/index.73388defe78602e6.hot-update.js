"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/build/CampaignFactory.json */ \"./ethereum/build/CampaignFactory.json\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction CampaignIndex() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function start() {\n            return _start.apply(this, arguments);\n        }\n        function _start() {\n            _start = _asyncToGenerator(C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var web3, instance, campaigns;\n                return C_Users_NAVI_MSI_Desktop_Cool_Projects_CrowdFunding_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            window.ethereum.request({\n                                method: \"eth_requestAccounts\"\n                            });\n                            web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(window.ethereum);\n                            instance = new web3.eth.Contract(JSON.parse(_ethereum_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_5__[\"interface\"]), '0x2C96c85711AA3a3393F72a688527CC44f61372a0');\n                            _ctx.next = 5;\n                            return instance.methods.getDeployedCampaigns().call();\n                        case 5:\n                            campaigns = _ctx.sent;\n                            console.log(campaigns);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _start.apply(this, arguments);\n        }\n        start();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\NAVI MSI\\\\Desktop\\\\Cool Projects\\\\CrowdFunding\\\\pages\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 12\n        },\n        __self: this,\n        children: \"Campaign Index Page.....\"\n    }));\n}\n_s(CampaignIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = CampaignIndex;\nvar _c;\n$RefreshReg$(_c, \"CampaignIndex\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTDtBQUNNO0FBQzJCO0FBQzdDO0FBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRWxDUSxhQUFhLEdBQUcsQ0FBQzs7SUFDdEJELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7aUJBQ0VFLEtBQUs7bUJBQUxBLE1BQUs7O2lCQUFMQSxNQUFLO1lBQUxBLE1BQUssbUxBQXBCLFFBQVEsV0FBZSxDQUFDO29CQUVkUCxJQUFJLEVBRUpRLFFBQVEsRUFLUkMsU0FBUzs7Ozs0QkFSZkMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDO2dDQUFDQyxNQUFNLEVBQUUsQ0FBcUI7NEJBQUMsQ0FBQzs0QkFDbkRiLElBQUksR0FBRyxHQUFHLENBQUNHLDZDQUFJLENBQUNPLE1BQU0sQ0FBQ0MsUUFBUTs0QkFFL0JILFFBQVEsR0FBRyxHQUFHLENBQUNSLElBQUksQ0FBQ2MsR0FBRyxDQUFDQyxRQUFRLENBQ2xDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ2YsOEVBQXlCLEdBQ3BDLENBQTRDOzttQ0FHeEJNLFFBQVEsQ0FBQ1csT0FBTyxDQUFDQyxvQkFBb0IsR0FBR0MsSUFBSTs7NEJBQTlEWixTQUFTOzRCQUNmYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsU0FBUzs7Ozs7O1lBQ3pCLENBQUM7bUJBWGNGLE1BQUs7O1FBWXBCQSxLQUFLO0lBRVQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sc0VBQUVpQixDQUFHOzs7Ozs7O2tCQUFDLENBQXdCOztBQUV4QyxDQUFDO0dBcEJRbEIsYUFBYTtLQUFiQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgQ2FtcGFpZ25GYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2J1aWxkL0NhbXBhaWduRmFjdG9yeS5qc29uJ1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ2FtcGFpZ25JbmRleCgpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcclxuICAgICAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgICAgICAgICAgIEpTT04ucGFyc2UoQ2FtcGFpZ25GYWN0b3J5LmludGVyZmFjZSksXHJcbiAgICAgICAgICAgICAgICAnMHgyQzk2Yzg1NzExQUEzYTMzOTNGNzJhNjg4NTI3Q0M0NGY2MTM3MmEwJ1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FtcGFpZ25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhcnQoKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+Q2FtcGFpZ24gSW5kZXggUGFnZS4uLi4uPC9kaXY+XHJcblxyXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndlYjMiLCJmYWN0b3J5IiwiQ2FtcGFpZ25GYWN0b3J5IiwiV2ViMyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FtcGFpZ25JbmRleCIsInN0YXJ0IiwiaW5zdGFuY2UiLCJjYW1wYWlnbnMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});