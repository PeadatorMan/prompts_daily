"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(action-browser)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar test = {\n    __proto__: null,\n    foo: {}\n};\n// @ts-expect-error: TS errors on an inherited property for some reason\nvar result = {\n    __proto__: test\n}.foo === test.foo && !(test instanceof Object);\n/** @type {import('.')} */ module.exports = function hasProto() {\n    return result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxPQUFPO0lBQ1ZDLFdBQVc7SUFDWEMsS0FBSyxDQUFDO0FBQ1A7QUFFQSx1RUFBdUU7QUFDdkUsSUFBSUMsU0FBUztJQUFFRixXQUFXRDtBQUFLLEVBQUVFLEdBQUcsS0FBS0YsS0FBS0UsR0FBRyxJQUM3QyxDQUFFRixDQUFBQSxnQkFBZ0JJLE1BQUs7QUFFM0Isd0JBQXdCLEdBQ3hCQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0M7SUFDekIsT0FBT0o7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50bHkvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzPzZmMDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHtcblx0X19wcm90b19fOiBudWxsLFxuXHRmb286IHt9XG59O1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yOiBUUyBlcnJvcnMgb24gYW4gaW5oZXJpdGVkIHByb3BlcnR5IGZvciBzb21lIHJlYXNvblxudmFyIHJlc3VsdCA9IHsgX19wcm90b19fOiB0ZXN0IH0uZm9vID09PSB0ZXN0LmZvb1xuXHQmJiAhKHRlc3QgaW5zdGFuY2VvZiBPYmplY3QpO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNQcm90bygpIHtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iXSwibmFtZXMiOlsidGVzdCIsIl9fcHJvdG9fXyIsImZvbyIsInJlc3VsdCIsIk9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJoYXNQcm90byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/has-proto/index.js\n");

/***/ })

};
;