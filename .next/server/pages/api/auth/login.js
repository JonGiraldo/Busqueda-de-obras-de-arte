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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
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

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loginHandler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// recibe los datos de autenticación\nfunction loginHandler(req, res) {\n    const { user , password  } = req.body;\n    // verificación de credenciales por hardcoded\n    if (user === \"usuarioAdmi\" && password === \"admin\") {\n        //se crea el token\n        const token = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign)({\n            // token valido por 30 dias\n            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,\n            user: \"usuarioAdmi\",\n            email: \"usuarioAdmi@example.com\"\n        }, \"secret\");\n        const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_1__.serialize)(\"myTokenName\", token, {\n            httpOnly: true,\n            secure: \"development\" === \"production\",\n            sameSite: \"strict\",\n            maxAge: 1000 * 60 * 60 * 24 * 30,\n            path: \"/\"\n        });\n        // se establece una cabecera para manejar la autenticación por medio de una cookie\n        res.setHeader(\"Set-Cookie\", serialized);\n        return res.status(200).json({\n            message: \"Login successful\"\n        });\n    }\n    return res.status(401).json({\n        error: \"invalid user or password\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNDO0FBRW5DLG9DQUFvQztBQUNyQixTQUFTRSxZQUFZLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBRW5DLDZDQUE2QztJQUM3QyxJQUFJRixJQUFJLEtBQUssYUFBYSxJQUFJQyxRQUFRLEtBQUssT0FBTyxFQUFFO1FBQ2xELGtCQUFrQjtRQUNsQixNQUFNRSxLQUFLLEdBQUdSLGtEQUFJLENBQ2hCO1lBQ0UsMkJBQTJCO1lBQzNCUyxHQUFHLEVBQUVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7WUFDdERSLElBQUksRUFBRSxhQUFhO1lBQ25CUyxLQUFLLEVBQUUseUJBQXlCO1NBQ2pDLEVBQ0QsUUFBUSxDQUNUO1FBQ0QsTUFBTUMsVUFBVSxHQUFHZCxpREFBUyxDQUFDLGFBQWEsRUFBRU8sS0FBSyxFQUFFO1lBQ2pEUSxRQUFRLEVBQUUsSUFBSTtZQUNkQyxNQUFNLEVBQUVDLGFBckJELEtBcUIwQixZQUFZO1lBQzdDQyxRQUFRLEVBQUUsUUFBUTtZQUNsQkMsTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ2hDQyxJQUFJLEVBQUUsR0FBRztTQUNWLENBQUM7UUFFRixrRkFBa0Y7UUFDbEZqQixHQUFHLENBQUNrQixTQUFTLENBQUMsWUFBWSxFQUFFUCxVQUFVLENBQUMsQ0FBQztRQUN4QyxPQUFPWCxHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkMsT0FBTyxFQUFFLGtCQUFrQjtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBT3JCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVFLEtBQUssRUFBRSwwQkFBMEI7S0FBRSxDQUFDLENBQUM7QUFDckUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29icmFzLWRlLWFydGUvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcz8xMzE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2lnbn0gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiY29va2llXCI7XHJcblxyXG4vLyByZWNpYmUgbG9zIGRhdG9zIGRlIGF1dGVudGljYWNpw7NuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luSGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgdXNlciwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAvLyB2ZXJpZmljYWNpw7NuIGRlIGNyZWRlbmNpYWxlcyBwb3IgaGFyZGNvZGVkXHJcbiAgaWYgKHVzZXIgPT09IFwidXN1YXJpb0FkbWlcIiAmJiBwYXNzd29yZCA9PT0gXCJhZG1pblwiKSB7XHJcbiAgICAvL3NlIGNyZWEgZWwgdG9rZW5cclxuICAgIGNvbnN0IHRva2VuID0gc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIC8vIHRva2VuIHZhbGlkbyBwb3IgMzAgZGlhc1xyXG4gICAgICAgIGV4cDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkgKyA2MCAqIDYwICogMjQgKiAzMCxcclxuICAgICAgICB1c2VyOiBcInVzdWFyaW9BZG1pXCIsXHJcbiAgICAgICAgZW1haWw6IFwidXN1YXJpb0FkbWlAZXhhbXBsZS5jb21cIlxyXG4gICAgICB9LFxyXG4gICAgICBcInNlY3JldFwiXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZShcIm15VG9rZW5OYW1lXCIsIHRva2VuLCB7XHJcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXHJcbiAgICAgIG1heEFnZTogMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwLFxyXG4gICAgICBwYXRoOiBcIi9cIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNlIGVzdGFibGVjZSB1bmEgY2FiZWNlcmEgcGFyYSBtYW5lamFyIGxhIGF1dGVudGljYWNpw7NuIHBvciBtZWRpbyBkZSB1bmEgY29va2llXHJcbiAgICByZXMuc2V0SGVhZGVyKFwiU2V0LUNvb2tpZVwiLCBzZXJpYWxpemVkKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIG1lc3NhZ2U6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJpbnZhbGlkIHVzZXIgb3IgcGFzc3dvcmRcIiB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsic2lnbiIsInNlcmlhbGl6ZSIsImxvZ2luSGFuZGxlciIsInJlcSIsInJlcyIsInVzZXIiLCJwYXNzd29yZCIsImJvZHkiLCJ0b2tlbiIsImV4cCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJlbWFpbCIsInNlcmlhbGl6ZWQiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJzYW1lU2l0ZSIsIm1heEFnZSIsInBhdGgiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();