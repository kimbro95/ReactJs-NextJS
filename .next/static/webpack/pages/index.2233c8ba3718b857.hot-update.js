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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var results = param.results;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var onClick = function(id, title) {\n        router.push(\"/movies/\".concat(title, \"/\").concat(id));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1171378c2e934ab4\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"D:\\\\project\\\\ReactJs-NextJS\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            results === null || results === void 0 ? void 0 : results.map(function(movie) {\n                /*#__PURE__*/ return((0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: function() {\n                        return onClick(movie.id, movie.original_title);\n                    },\n                    className: \"jsx-1171378c2e934ab4\" + \" \" + \"movie\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://image.tmdb.org/t/p/w500\".concat(movie.poster_path),\n                            className: \"jsx-1171378c2e934ab4\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\project\\\\ReactJs-NextJS\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"jsx-1171378c2e934ab4\",\n                            /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"jsx-1171378c2e934ab4\",\n                                children: movie.original_title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\ReactJs-NextJS\\\\pages\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\project\\\\ReactJs-NextJS\\\\pages\\\\index.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, movie.id, true, {\n                    fileName: \"D:\\\\project\\\\ReactJs-NextJS\\\\pages\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this));\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"1171378c2e934ab4\",\n                children: \".container.jsx-1171378c2e934ab4{display:grid;\\ngrid-template-columns:1fr 1fr;\\npadding:20px;\\ngap:20px}\\n.movie.jsx-1171378c2e934ab4{cursor:pointer}\\n.movie.jsx-1171378c2e934ab4 img.jsx-1171378c2e934ab4{max-width:100%;\\nborder-radius:12px;\\n-webkit-transition:-webkit-transform 0.2s ease-in-out;\\ntransition:transform 0.2s ease-in-out;\\nbox-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px}\\n.movie.jsx-1171378c2e934ab4:hover img.jsx-1171378c2e934ab4{-webkit-transform:scale(1.05) translateY(-10px);\\n-moz-transform:scale(1.05) translateY(-10px);\\n-ms-transform:scale(1.05) translateY(-10px);\\ntransform:scale(1.05) translateY(-10px)}\\n.movie.jsx-1171378c2e934ab4 h4.jsx-1171378c2e934ab4{font-size:18px;\\ntext-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\project\\\\ReactJs-NextJS\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNKOzs7QUFFcEIsUUFBUSxDQUFDRSxJQUFJLENBQUMsS0FBVyxFQUFFLENBQUM7UUFBWkMsT0FBTyxHQUFULEtBQVcsQ0FBVEEsT0FBTzs7O0lBQ3BDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSixzREFBUztJQUN4QixHQUFLLENBQUNLLE9BQU8sR0FBRyxRQUFRLENBQVBDLEVBQUUsRUFBRUMsS0FBSyxFQUFLLENBQUM7UUFDOUJILE1BQU0sQ0FBQ0ksSUFBSSxDQUFFLENBQVEsVUFBV0YsTUFBRSxDQUFYQyxLQUFLLEVBQUMsQ0FBQyxJQUFLLE9BQUhELEVBQUU7SUFDcEMsQ0FBQztJQUVELE1BQU0sNkVBQ0hHLENBQUc7a0RBQVcsQ0FBVzs7d0ZBQ3ZCUix1REFBRztnQkFBQ00sS0FBSyxFQUFDLENBQU07Ozs7OztZQUNoQkosT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBWSxHQUFaQSxJQUFJLENBQUpBLENBQVksR0FBWkEsT0FBTyxDQUFFTyxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLOzhCQUNsQixNQUNQLCtEQURRRixDQUFHO29CQUNGSixPQUFPLEVBQUUsUUFBUTt3QkFBRkEsTUFBTSxDQUFOQSxPQUFPLENBQUNNLEtBQUssQ0FBQ0wsRUFBRSxFQUFFSyxLQUFLLENBQUNDLGNBQWM7OzhEQUMzQyxDQUFPOztvR0FHaEJDLENBQUc7NEJBQUNDLEdBQUcsRUFBRyxDQUErQixpQ0FBb0IsT0FBbEJILEtBQUssQ0FBQ0ksV0FBVzs7Ozs7OztvR0FDNURDLENBQUU7O2dJQUNBQyxDQUFDOzswQ0FBRU4sS0FBSyxDQUFDQyxjQUFjOzs7Ozs7Ozs7Ozs7bUJBSnJCRCxLQUFLLENBQUNMLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ3ZCLENBQUM7R0EvQ3VCSixJQUFJOztRQUNYRixrREFBUzs7O0tBREZFLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyByZXN1bHRzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG9uQ2xpY2sgPSAoaWQsIHRpdGxlKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9tb3ZpZXMvJHt0aXRsZX0vJHtpZH1gKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxTZW8gdGl0bGU9XCJIb21lXCIgLz5cbiAgICAgIHtyZXN1bHRzPy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKG1vdmllLmlkLCBtb3ZpZS5vcmlnaW5hbF90aXRsZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibW92aWVcIlxuICAgICAgICAgIGtleT17bW92aWUuaWR9XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAke21vdmllLnBvc3Rlcl9wYXRofWB9IC8+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgPGE+e21vdmllLm9yaWdpbmFsX3RpdGxlfTwvYT5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubW92aWUge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubW92aWUgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5tb3ZpZTpob3ZlciBpbWcge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgLm1vdmllIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgKFxuICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL21vdmllc2ApXG4gICkuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZXN1bHRzLFxuICAgIH0sXG4gIH07XG59XG4vKlxuICAtIGdldFNlcnZlclNpZGVQcm9wc1xuICDtjpjsnbTsp4Dsl5DshJwgZ2V0U2VydmVyU2lkZVByb3BzKOyEnOuyhOy4oSDrnpzrjZTrp4EgU1NSKSDtlajsiJjrpbwgZXhwb3J07ZWY64qUIOqyveyasFxuICBOZXh0Lmpz64qUIGdldFNlcnZlclNpZGVQcm9wc+yXkOyEnCDrsJjtmZjrkJwg642w7J207YSw66W8IOyCrOyaqe2VmOyXrCDqsIEgcmVxdWVzdOyXkOyEnCDsnbQg7Y6Y7J207KeA66W8IHByZS1yZW5kZXIg7ZWc64ukLlxuICBnZXRTZXJ2ZXJTaWRlUHJvcHPripQg7ISc67KE7Lih7JeQ7ISc66eMIOyLpO2WieuQmOupsCDruIzrnbzsmrDsoIAoY2xpZW50KeyXkOyEnOuKlCDsi6TtlonrkJjsp4Ag7JWK64qU64ukLlxuICBleCkgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xuICAgICAgICAvLyBmZXRjaCBkYXRhXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vQ2FsbEFwaSBVUkxgKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAg7ISc67KE7Lih7JeQ7IScIGZldGNo67Cb7JWE7JioIOqwkiDspokgZGF0YeulvCDrsJHsl5Ag7JiI7Iuc7ZWo7IiY7JeQIHByb3Bz66GcIOuNmOyguOykgOuLpC5cbiAgICAgICAgICAgICAgICAgICAg4oaT4oaT4oaT4oaT4oaTXG4gICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiDsmIjsi5ztlajsiJgoe2RhdGF9KXtcbiAgICAgICAgLy8gZGF0YeqwkuycvOuhnCDrnpzrjZTrp4EuLi5cbiAgICAgIH1cbiAgICAgIOuwm+yVhOyYqCBkYXRhIOqwkuycvOuhnCDtjpjsnbTsp4Drpbwg656c642U66eB7ZWc64ukLlxuICDirZBTRU8oU2VhcmNoIEVuZ2luZSBPcHRpbWl6YXRpb24p6rCAIO2VhOyalO2VnCDtjpjsnbTsp4DrnbzrqbQgZ2V0U2VydmVyU2lkZVByb3BzKFNTUinsnYQg7KCB7Jqp7ZWY66m0IOyii+ydhCDqsoMg6rCZ64ukLuKtkFxuXG4gIPCfkqEgZ2V0U2VydmVyU2lkZVByb3BzIChodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9kYXRhLWZldGNoaW5nL2dldC1zZXJ2ZXItc2lkZS1wcm9wcylcbiAg7Ja47KCcIFNTUuydhCDsgqzsmqntlbTslbwg7ZWY64qU7KeAXG4gIHJlcXVlc3QgdGltZeyXkCDrsJjrk5zsi5wg642w7J207YSw66W8IGZldGNo7ZW07JW87ZWY64qUIO2OmOydtOyngOulvCBwcmUtcmVuZGVy7ZWY64qUIOqyveyasOyXkCDsgqzsmqlcbiAg642w7J207YSw66W8IHByZS1yZW5kZXLtlaAg7ZWE7JqU6rCAIOyXhuuLpOuptCBDU1IoQ2xpZW50IFNpZGUgUmVuZGVyaW5nKeulvCDsgqzsmqntlZjripQg6rKD7J20IOyii+ydhCDsiJgg7J6I64ukLlxuICBDU1JcbiAgMS4g66i87KCAIOuNsOydtO2EsOqwgCDsl4bripQg7Y6Y7J207KeA66W8IOyngeyLnCDtkZzsi5xcbiAgMi4g7Y6Y7J207KeA7J2YIOydvOu2gOuKlCBTdGF0aWMgR2VuZXJhdGlvbuydhCDsgqzsmqkgcHJlLXJlbmRlcu2VoCDsiJgg7J6I64ukLlxuICAzLiDsl4bripQg642w7J207YSw66W8IOychO2VtCBsb2FkaW5nIOyDge2DnOulvCDtkZzsi5ztlaAg7IiYIOyeiOuLpC5cbiAgNC4g6re465+wIOuLpOydjCDtgbTrnbzsnbTslrjtirgg7Lih7JeQ7IScIOuNsOydtO2EsOulvCDqsIDsoLjsmYAg7KSA67mE6rCA65CY66m0IO2RnOyLnO2VnOuLpC5cbiovIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlNlbyIsIkhvbWUiLCJyZXN1bHRzIiwicm91dGVyIiwib25DbGljayIsImlkIiwidGl0bGUiLCJwdXNoIiwiZGl2IiwibWFwIiwibW92aWUiLCJvcmlnaW5hbF90aXRsZSIsImltZyIsInNyYyIsInBvc3Rlcl9wYXRoIiwiaDQiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});