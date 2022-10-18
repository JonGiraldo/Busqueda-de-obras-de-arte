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
exports.id = "pages/api/auth/logout";
exports.ids = ["pages/api/auth/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/auth/logout.js":
/*!**********************************!*\
  !*** ./pages/api/auth/logout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logoutHandler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction logoutHandler(req, res) {\n    const { myTokenName  } = req.cookies;\n    if (!myTokenName) {\n        return res.status(401).json({\n            error: \"no token\"\n        });\n    }\n    try {\n        (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(myTokenName, \"secret\");\n        const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_1__.serialize)(\"myTokenName\", null, {\n            httpOnly: true,\n            secure: \"development\" === \"production\",\n            sameSite: \"strict\",\n            maxAge: 0,\n            path: \"/\"\n        });\n        res.setHeader(\"Set-Cookie\", serialized);\n        res.status(200).json(\"logout succesfully\");\n    } catch (error) {\n        return res.status(401).json({\n            error: \"invalid token\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFDSDtBQUVuQixTQUFTRSxhQUFhLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU0sRUFBQ0MsV0FBVyxHQUFDLEdBQUdGLEdBQUcsQ0FBQ0csT0FBTztJQUVqQyxJQUFJLENBQUNELFdBQVcsRUFBRTtRQUNkLE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsS0FBSyxFQUFFLFVBQVU7U0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJO1FBQ0FULG9EQUFNLENBQUNLLFdBQVcsRUFBRSxRQUFRLENBQUM7UUFDN0IsTUFBTUssVUFBVSxHQUFHVCxpREFBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUU7WUFDOUNVLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLE1BQU0sRUFBRUMsYUFkUCxLQWNnQyxZQUFZO1lBQzdDQyxRQUFRLEVBQUUsUUFBUTtZQUNsQkMsTUFBTSxFQUFFLENBQUM7WUFDVEMsSUFBSSxFQUFFLEdBQUc7U0FDWixDQUFDO1FBQ0ZaLEdBQUcsQ0FBQ2EsU0FBUyxDQUFDLFlBQVksRUFBRVAsVUFBVSxDQUFDO1FBQ3ZDTixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQzlDLEVBQUUsT0FBT0MsS0FBSyxFQUFFO1FBQ1osT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxLQUFLLEVBQUUsZUFBZTtTQUFDLENBQUM7SUFDekQsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJhcy1kZS1hcnRlLy4vcGFnZXMvYXBpL2F1dGgvbG9nb3V0LmpzP2MyZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSBcImpzb253ZWJ0b2tlblwiXHJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ2Nvb2tpZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ291dEhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHtteVRva2VuTmFtZX0gPSByZXEuY29va2llc1xyXG5cclxuICAgIGlmICghbXlUb2tlbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe2Vycm9yOiAnbm8gdG9rZW4nfSlcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZlcmlmeShteVRva2VuTmFtZSwgJ3NlY3JldCcpXHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZSgnbXlUb2tlbk5hbWUnLCBudWxsLCB7XHJcbiAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcclxuICAgICAgICAgICAgbWF4QWdlOiAwLFxyXG4gICAgICAgICAgICBwYXRoOiAnLydcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBzZXJpYWxpemVkKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKCdsb2dvdXQgc3VjY2VzZnVsbHknKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe2Vycm9yOiAnaW52YWxpZCB0b2tlbid9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInZlcmlmeSIsInNlcmlhbGl6ZSIsImxvZ291dEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJteVRva2VuTmFtZSIsImNvb2tpZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzZXJpYWxpemVkIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJwYXRoIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/logout.js"));
module.exports = __webpack_exports__;

})();