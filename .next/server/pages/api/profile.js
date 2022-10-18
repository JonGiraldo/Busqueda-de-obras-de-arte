"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/profile";
exports.ids = ["pages/api/profile"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ profileHandler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction profileHandler(req, res) {\n    const { myTokenName  } = req.cookies;\n    if (!myTokenName) {\n        return res.status(401).json({\n            error: \"no token\"\n        });\n    }\n    try {\n        const user = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(myTokenName, \"secret\");\n        console.log(user);\n        return res.json(user);\n    } catch (error) {\n        return res.status(401).json({\n            error: \"invalid token\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFdEIsU0FBU0MsY0FBYyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU3QyxNQUFNLEVBQUNDLFdBQVcsR0FBQyxHQUFHRixHQUFHLENBQUNHLE9BQU87SUFFakMsSUFBSSxDQUFDRCxXQUFXLEVBQUU7UUFDZCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLEtBQUssRUFBRSxVQUFVO1NBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSTtRQUNKLE1BQU1DLElBQUksR0FBR1Qsb0RBQU0sQ0FBQ0ksV0FBVyxFQUFFLFFBQVEsQ0FBQztRQUMxQ00sT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU9OLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRSxJQUFJLENBQUMsQ0FBQztJQUN0QixFQUFFLE9BQU9ELEtBQUssRUFBRTtRQUNaLE9BQU9MLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLGVBQWU7U0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJhcy1kZS1hcnRlLy4vcGFnZXMvYXBpL3Byb2ZpbGUuanM/MTZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2ZpbGVIYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgY29uc3Qge215VG9rZW5OYW1lfSA9IHJlcS5jb29raWVzO1xyXG5cclxuICAgIGlmICghbXlUb2tlbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe2Vycm9yOiAnbm8gdG9rZW4nfSlcclxuICAgIH1cclxuXHJcbiAgICB0cnkgeyBcclxuICAgIGNvbnN0IHVzZXIgPSB2ZXJpZnkobXlUb2tlbk5hbWUsICdzZWNyZXQnKVxyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICByZXR1cm4gcmVzLmpzb24odXNlcik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcImludmFsaWQgdG9rZW5cIn0pO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsidmVyaWZ5IiwicHJvZmlsZUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJteVRva2VuTmFtZSIsImNvb2tpZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1c2VyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile.js"));
module.exports = __webpack_exports__;

})();