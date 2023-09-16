"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/SocketContainer.jsx":
/*!****************************************!*\
  !*** ./components/SocketContainer.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _SocketContainer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketContainer.css */ \"(app-pages-browser)/./components/SocketContainer.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _ChatWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatWindow */ \"(app-pages-browser)/./components/ChatWindow.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatNumberInput = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().lazy(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_components_ChatNumberInput_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./ChatNumberInput */ \"(app-pages-browser)/./components/ChatNumberInput.jsx\")));\n_c = ChatNumberInput;\n\nlet userID = \"\";\nlet room = \"\"; //contains the room which is then stored in localStorage\nconst SocketContainer = ()=>{\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [joinedRoom, setJoinedRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [firstMessage, setFirstMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var //need an undefined_room handler\n        _socket, _socket1;\n        (_socket = socket) === null || _socket === void 0 ? void 0 : _socket.on(\"send_room\", (room)=>{\n            localStorage.setItem(\"room\", room.room) //this stores the roomID in the localStorage\n            ;\n            setLoading(false);\n            setJoinedRoom(true);\n        });\n        (_socket1 = socket) === null || _socket1 === void 0 ? void 0 : _socket1.on(\"initial_connection\", (id)=>{\n            userID = id;\n            console.log(userID);\n        });\n        if (socket === null) {\n            setSocket((0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"https://chat-app-r3il.onrender.com\", {\n                autoConnect: false\n            }));\n        }\n        return ()=>{\n            var _socket;\n            (_socket = socket) === null || _socket === void 0 ? void 0 : _socket.disconnect();\n            localStorage.removeItem(\"room\");\n        };\n    }, [\n        socket\n    ]);\n    function joinRoomHandler(event) {\n        if (event.key === \"Enter\") {\n            if (!username) {\n                setError(true);\n                return;\n            }\n            ;\n            socket.connect();\n            socket.emit(\"join_room\", event.target.value);\n            setLoading(true);\n        }\n    }\n    function createRoomHandler(event) {\n        console.log(event);\n        if (event.key === \"Enter\") {\n            if (!username) {\n                setError(true);\n                return;\n            }\n            ;\n            const characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\";\n            const charactersLength = characters.length;\n            for(let i = 0; i < 5; i++){\n                room += characters.charAt(Math.floor(Math.random() * charactersLength));\n            }\n            localStorage.setItem(\"room\", room);\n            setLoading(true);\n            socket.connect() //might not need to connect in this component\n            ;\n            socket.emit(\"create_room\", room);\n            socket.emit(\"join_room\", room);\n            setFirstMessage(event.target.value);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !joinedRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"error\",\n                        children: error ? \"You have not entered a username\" : \"‎\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Enter your username\",\n                        style: error ? {\n                            border: \"2px solid red\",\n                            outline: \"none\"\n                        } : {},\n                        className: \"username\",\n                        type: \"text\",\n                        value: username,\n                        onChange: (event)=>{\n                            setUsername(event.target.value);\n                            error && setError(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatNumberInput, {\n                        joinRoomHandler: joinRoomHandler,\n                        createRoomHandler: createRoomHandler\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"loading\",\n                        children: \"Connection is being established. First time connections may take a bit longer.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true),\n            joinedRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatWindow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                socket: socket,\n                userID: userID,\n                username: username,\n                firstMessage: firstMessage\n            }, void 0, false, {\n                fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                lineNumber: 84,\n                columnNumber: 24\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SocketContainer, \"98WsXBJpm2SyuHP5++O0R/R63x0=\");\n_c1 = SocketContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"ChatNumberInput\");\n$RefreshReg$(_c1, \"SocketContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU29ja2V0Q29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFFcUI7QUFDYjtBQUV0QyxNQUFNSSxnQ0FBa0JKLGlEQUFVLENBQUMsSUFBTSwrTkFBMkI7S0FBOURJO0FBQytCO0FBRXJDLElBQUlHLFNBQVM7QUFDYixJQUFJQyxPQUFPLElBQUksd0RBQXdEO0FBRXZFLE1BQU1DLGtCQUFrQjs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQ2M7SUFDakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNtQixTQUFTQyxXQUFXLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7WUFFTixnQ0FBZ0M7UUFFaENTLFNBTUFBO1NBTkFBLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUWEsRUFBRSxDQUFDLGFBQVksQ0FBQ2Y7WUFDcEJnQixhQUFhQyxPQUFPLENBQUMsUUFBUWpCLEtBQUtBLElBQUksRUFBRSw0Q0FBNEM7O1lBQ3BGYyxXQUFXO1lBQ1hULGNBQWM7UUFDbEI7U0FFQUgsV0FBQUEsb0JBQUFBLCtCQUFBQSxTQUFRYSxFQUFFLENBQUMsc0JBQXNCLENBQUNHO1lBQVFuQixTQUFTbUI7WUFBSUMsUUFBUUMsR0FBRyxDQUFDckI7UUFBTztRQUUxRSxJQUFJRyxXQUFXLE1BQU07WUFDakJDLFVBQVVSLG9EQUFFQSxDQUFDLHNDQUFzQztnQkFBRTBCLGFBQWE7WUFBTTtRQUM1RTtRQUVBLE9BQU87Z0JBQ0huQjthQUFBQSxVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFvQixVQUFVO1lBQ2xCTixhQUFhTyxVQUFVLENBQUM7UUFDNUI7SUFDRixHQUFHO1FBQUNyQjtLQUFPO0lBR2IsU0FBU3NCLGdCQUFnQkMsS0FBSztRQUMxQixJQUFJQSxNQUFNQyxHQUFHLEtBQUssU0FBUztZQUN2QixJQUFJLENBQUNqQixVQUFVO2dCQUFDRyxTQUFTO2dCQUFPO1lBQU07O1lBQ3RDVixPQUFPeUIsT0FBTztZQUNkekIsT0FBTzBCLElBQUksQ0FBQyxhQUFhSCxNQUFNSSxNQUFNLENBQUNDLEtBQUs7WUFDM0NoQixXQUFXO1FBQ2Y7SUFDSjtJQUVBLFNBQVNpQixrQkFBa0JOLEtBQUs7UUFDNUJOLFFBQVFDLEdBQUcsQ0FBQ0s7UUFDWixJQUFJQSxNQUFNQyxHQUFHLEtBQUssU0FBUztZQUN2QixJQUFJLENBQUNqQixVQUFVO2dCQUFDRyxTQUFTO2dCQUFPO1lBQU07O1lBQ3RDLE1BQU1vQixhQUFhO1lBQ25CLE1BQU1DLG1CQUFtQkQsV0FBV0UsTUFBTTtZQUUxQyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFLO2dCQUN4Qm5DLFFBQVFnQyxXQUFXSSxNQUFNLENBQUNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTjtZQUN6RDtZQUVBakIsYUFBYUMsT0FBTyxDQUFDLFFBQVFqQjtZQUM3QmMsV0FBVztZQUNYWixPQUFPeUIsT0FBTyxHQUFHLDZDQUE2Qzs7WUFDOUR6QixPQUFPMEIsSUFBSSxDQUFDLGVBQWU1QjtZQUMzQkUsT0FBTzBCLElBQUksQ0FBQyxhQUFhNUI7WUFDekJPLGdCQUFnQmtCLE1BQU1JLE1BQU0sQ0FBQ0MsS0FBSztRQUN0QztJQUNKO0lBR0EscUJBQ0k7O1lBRUMsQ0FBQzFCLDRCQUNGOztrQ0FDQSw4REFBQ29DO3dCQUFLQyxXQUFVO2tDQUFTOUIsUUFBUSxvQ0FBb0M7Ozs7OztrQ0FDckUsOERBQUMrQjt3QkFBTUMsYUFBWTt3QkFBc0JDLE9BQU9qQyxRQUFROzRCQUFFa0MsUUFBUTs0QkFBaUJDLFNBQVM7d0JBQU8sSUFBSSxDQUFDO3dCQUFHTCxXQUFVO3dCQUFXTSxNQUFLO3dCQUFPakIsT0FBT3JCO3dCQUFVdUMsVUFBVSxDQUFDdkI7NEJBQVdmLFlBQVllLE1BQU1JLE1BQU0sQ0FBQ0MsS0FBSzs0QkFBR25CLFNBQVNDLFNBQVM7d0JBQU07Ozs7OztrQ0FDNU8sOERBQUNoQjt3QkFBZ0I0QixpQkFBaUJBO3dCQUFpQk8sbUJBQW1CQTs7Ozs7O29CQUNyRWxCLHlCQUFXLDhEQUFDMkI7d0JBQUtDLFdBQVc7a0NBQVc7Ozs7Ozs7O1lBR3ZDckMsNEJBQWMsOERBQUNOLG1EQUFVQTtnQkFBQ0ksUUFBUUE7Z0JBQVFILFFBQVFBO2dCQUFRVSxVQUFVQTtnQkFBVUgsY0FBY0E7Ozs7Ozs7O0FBR3JHO0dBM0VNTDtNQUFBQTtBQTZFTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NvY2tldENvbnRhaW5lci5qc3g/YjJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vU29ja2V0Q29udGFpbmVyLmNzcydcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3QgQ2hhdE51bWJlcklucHV0ID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0NoYXROdW1iZXJJbnB1dFwiKSk7XG5pbXBvcnQgQ2hhdFdpbmRvdyBmcm9tICcuL0NoYXRXaW5kb3cnXG5cbmxldCB1c2VySUQgPSAnJztcbmxldCByb29tID0gJyc7IC8vY29udGFpbnMgdGhlIHJvb20gd2hpY2ggaXMgdGhlbiBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlXG5cbmNvbnN0IFNvY2tldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbam9pbmVkUm9vbSwgc2V0Sm9pbmVkUm9vbV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZmlyc3RNZXNzYWdlLCBzZXRGaXJzdE1lc3NhZ2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgLy9uZWVkIGFuIHVuZGVmaW5lZF9yb29tIGhhbmRsZXJcblxuICAgICAgICBzb2NrZXQ/Lm9uKCdzZW5kX3Jvb20nLChyb29tKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJvb21cIiwgcm9vbS5yb29tKSAvL3RoaXMgc3RvcmVzIHRoZSByb29tSUQgaW4gdGhlIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHNldEpvaW5lZFJvb20odHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHNvY2tldD8ub24oJ2luaXRpYWxfY29ubmVjdGlvbicsIChpZCkgPT4ge3VzZXJJRCA9IGlkOyBjb25zb2xlLmxvZyh1c2VySUQpfSlcblxuICAgICAgICBpZiAoc29ja2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTb2NrZXQoaW8oJ2h0dHBzOi8vY2hhdC1hcHAtcjNpbC5vbnJlbmRlci5jb20nLCB7IGF1dG9Db25uZWN0OiBmYWxzZSB9KSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQ/LmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Jvb20nKVxuICAgICAgICB9O1xuICAgICAgfSwgW3NvY2tldF0pXG5cbiAgICBcbiAgICBmdW5jdGlvbiBqb2luUm9vbUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKCF1c2VybmFtZSkge3NldEVycm9yKHRydWUpOyByZXR1cm59O1xuICAgICAgICAgICAgc29ja2V0LmNvbm5lY3QoKVxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2pvaW5fcm9vbScsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJvb21IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBpZiAoIXVzZXJuYW1lKSB7c2V0RXJyb3IodHJ1ZSk7IHJldHVybn07XG4gICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OSc7XG4gICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcm9vbSArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicm9vbVwiLCByb29tKVxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgICAgc29ja2V0LmNvbm5lY3QoKSAvL21pZ2h0IG5vdCBuZWVkIHRvIGNvbm5lY3QgaW4gdGhpcyBjb21wb25lbnRcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjcmVhdGVfcm9vbScsIHJvb20pXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcImpvaW5fcm9vbVwiLCByb29tKVxuICAgICAgICAgICAgc2V0Rmlyc3RNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgeyFqb2luZWRSb29tICYmIFxuICAgICAgICA8PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Vycm9yJz57ZXJyb3IgPyAnWW91IGhhdmUgbm90IGVudGVyZWQgYSB1c2VybmFtZScgOiAn4oCOJ308L3NwYW4+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciB1c2VybmFtZScgc3R5bGU9e2Vycm9yID8geyBib3JkZXI6ICcycHggc29saWQgcmVkJywgb3V0bGluZTogJ25vbmUnIH0gOiB7fX0gY2xhc3NOYW1lPSd1c2VybmFtZScgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpOyBlcnJvciAmJiBzZXRFcnJvcihmYWxzZSl9fS8+XG4gICAgICAgIDxDaGF0TnVtYmVySW5wdXQgam9pblJvb21IYW5kbGVyPXtqb2luUm9vbUhhbmRsZXJ9IGNyZWF0ZVJvb21IYW5kbGVyPXtjcmVhdGVSb29tSGFuZGxlcn0vPlxuICAgICAgICB7bG9hZGluZyAmJiA8c3BhbiBjbGFzc05hbWU9eydsb2FkaW5nJ30+Q29ubmVjdGlvbiBpcyBiZWluZyBlc3RhYmxpc2hlZC4gRmlyc3QgdGltZSBjb25uZWN0aW9ucyBtYXkgdGFrZSBhIGJpdCBsb25nZXIuPC9zcGFuPn1cbiAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgICAge2pvaW5lZFJvb20gJiYgPENoYXRXaW5kb3cgc29ja2V0PXtzb2NrZXR9IHVzZXJJRD17dXNlcklEfSB1c2VybmFtZT17dXNlcm5hbWV9IGZpcnN0TWVzc2FnZT17Zmlyc3RNZXNzYWdlfS8+fVxuICAgICAgICA8Lz5cbiAgICApXG59XG4gXG5leHBvcnQgZGVmYXVsdCBTb2NrZXRDb250YWluZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsIkNoYXROdW1iZXJJbnB1dCIsImxhenkiLCJDaGF0V2luZG93IiwidXNlcklEIiwicm9vbSIsIlNvY2tldENvbnRhaW5lciIsInNvY2tldCIsInNldFNvY2tldCIsImpvaW5lZFJvb20iLCJzZXRKb2luZWRSb29tIiwiZmlyc3RNZXNzYWdlIiwic2V0Rmlyc3RNZXNzYWdlIiwidW5kZWZpbmVkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlkIiwiY29uc29sZSIsImxvZyIsImF1dG9Db25uZWN0IiwiZGlzY29ubmVjdCIsInJlbW92ZUl0ZW0iLCJqb2luUm9vbUhhbmRsZXIiLCJldmVudCIsImtleSIsImNvbm5lY3QiLCJlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVSb29tSGFuZGxlciIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJzTGVuZ3RoIiwibGVuZ3RoIiwiaSIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwYW4iLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJib3JkZXIiLCJvdXRsaW5lIiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SocketContainer.jsx\n"));

/***/ })

});