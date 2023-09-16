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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _SocketContainer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketContainer.css */ \"(app-pages-browser)/./components/SocketContainer.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _ChatWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatWindow */ \"(app-pages-browser)/./components/ChatWindow.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatNumberInput = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().lazy(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_components_ChatNumberInput_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./ChatNumberInput */ \"(app-pages-browser)/./components/ChatNumberInput.jsx\")));\n_c = ChatNumberInput;\n\nlet userID = \"\";\nlet room = \"\"; //contains the room which is then stored in localStorage\nconst SocketContainer = ()=>{\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [joinedRoom, setJoinedRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [firstMessage, setFirstMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [userList, setUserList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [openUserList, setOpenUserList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var //need an undefined_room handler\n        _socket, _socket1, _socket2, _socket3;\n        (_socket = socket) === null || _socket === void 0 ? void 0 : _socket.on(\"new_join\", (user)=>{\n            console.log(user);\n            setUserList((prevState)=>[\n                    ...prevState,\n                    user\n                ]);\n        });\n        (_socket1 = socket) === null || _socket1 === void 0 ? void 0 : _socket1.on(\"send_room\", (room)=>{\n            localStorage.setItem(\"room\", room.room) //this stores the roomID in the localStorage\n            ;\n            setUserList((prevState)=>[\n                    ...prevState,\n                    username\n                ]);\n            console.log(userList);\n            setLoading(false);\n            setJoinedRoom(true);\n        });\n        (_socket2 = socket) === null || _socket2 === void 0 ? void 0 : _socket2.on(\"undefined_room\", ()=>{\n            setLoading(false);\n        });\n        (_socket3 = socket) === null || _socket3 === void 0 ? void 0 : _socket3.on(\"initial_connection\", (id)=>{\n            userID = id;\n            console.log(userID);\n        });\n        if (socket === null) {\n            setSocket((0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:8080\", {\n                autoConnect: false\n            }));\n        }\n        return ()=>{\n            var _socket;\n            (_socket = socket) === null || _socket === void 0 ? void 0 : _socket.disconnect();\n            localStorage.removeItem(\"room\");\n        };\n    }, [\n        socket\n    ]);\n    function joinRoomHandler(event) {\n        if (event.key === \"Enter\") {\n            if (!username) {\n                setError(true);\n                return;\n            }\n            ;\n            socket.connect();\n            socket.emit(\"join_room\", {\n                room: event.target.value,\n                username: username\n            });\n            setLoading(true);\n        }\n    }\n    function createRoomHandler(event) {\n        if (event.key === \"Enter\" || event.target.type === \"submit\") {\n            if (!username) {\n                setError(true);\n                return;\n            }\n            ;\n            room = \"\";\n            const characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\";\n            const charactersLength = characters.length;\n            for(let i = 0; i < 5; i++){\n                room += characters.charAt(Math.floor(Math.random() * charactersLength));\n            }\n            console.log(room);\n            localStorage.setItem(\"room\", room);\n            setLoading(true);\n            socket.connect() //might not need to connect in this component\n            ;\n            socket.emit(\"create_room\", room);\n            socket.emit(\"join_room\", {\n                room: room,\n                username: username\n            });\n            setFirstMessage(event.target.value);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(userList);\n    }, [\n        userList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !joinedRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"error\",\n                        children: error ? \"You have not entered a username\" : \"‎\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Enter your username\",\n                        style: error ? {\n                            border: \"2px solid red\",\n                            outline: \"none\"\n                        } : {},\n                        className: \"username\",\n                        type: \"text\",\n                        value: username,\n                        onChange: (event)=>{\n                            setUsername(event.target.value);\n                            error && setError(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChatNumberInput, {\n                        joinRoomHandler: joinRoomHandler,\n                        createRoomHandler: createRoomHandler\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"loading\",\n                        children: \"Connection is being established. First time connections may take a bit longer.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true),\n            joinedRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatWindow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                socket: socket,\n                userID: userID,\n                username: username,\n                firstMessage: firstMessage\n            }, void 0, false, {\n                fileName: \"/Users/afnankhan/Documents/Coding/chat-app/frontend/components/SocketContainer.jsx\",\n                lineNumber: 103,\n                columnNumber: 24\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SocketContainer, \"9eoS4BdlPzfhFfdVwtGLVMimH6I=\");\n_c1 = SocketContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketContainer);\nvar _c, _c1;\n$RefreshReg$(_c, \"ChatNumberInput\");\n$RefreshReg$(_c1, \"SocketContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU29ja2V0Q29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFFcUI7QUFDYjtBQUV0QyxNQUFNSSxnQ0FBa0JKLGlEQUFVLENBQUMsSUFBTSwrTkFBMkI7S0FBOURJO0FBQytCO0FBRXJDLElBQUlHLFNBQVM7QUFDYixJQUFJQyxPQUFPLElBQUksd0RBQXdEO0FBRXZFLE1BQU1DLGtCQUFrQjs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUNnQjtJQUVqRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ21CLFNBQVNDLFdBQVcsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0sQ0FBQ3FCLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDdUIsY0FBY0MsZ0JBQWdCLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUVqREQsZ0RBQVNBLENBQUM7WUFDTixnQ0FBZ0M7UUFFaENTLFNBTUFBLFVBUUFBLFVBSUFBO1NBbEJBQSxVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFpQixFQUFFLENBQUMsWUFBWUMsQ0FBQUE7WUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkosWUFBWU8sQ0FBQUEsWUFBYTt1QkFBSUE7b0JBQVdIO2lCQUFLO1FBRWpEO1NBRUFsQixXQUFBQSxvQkFBQUEsK0JBQUFBLFNBQVFpQixFQUFFLENBQUMsYUFBWSxDQUFDbkI7WUFDcEJ3QixhQUFhQyxPQUFPLENBQUMsUUFBUXpCLEtBQUtBLElB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R3JHO0dBOUZNUDtNQUFBQTtBQWdHTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NvY2tldENvbnRhaW5lci5qc3g/YjJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vU29ja2V0Q29udGFpbmVyLmNzcydcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3QgQ2hhdE51bWJlcklucHV0ID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0NoYXROdW1iZXJJbnB1dFwiKSk7XG5pbXBvcnQgQ2hhdFdpbmRvdyBmcm9tICcuL0NoYXRXaW5kb3cnXG5cbmxldCB1c2VySUQgPSAnJztcbmxldCByb29tID0gJyc7IC8vY29udGFpbnMgdGhlIHJvb20gd2hpY2ggaXMgdGhlbiBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlXG5cbmNvbnN0IFNvY2tldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbam9pbmVkUm9vbSwgc2V0Sm9pbmVkUm9vbV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtmaXJzdE1lc3NhZ2UsIHNldEZpcnN0TWVzc2FnZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gICAgXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBcbiAgICBjb25zdCBbdXNlckxpc3QsIHNldFVzZXJMaXN0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtvcGVuVXNlckxpc3QsIHNldE9wZW5Vc2VyTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vbmVlZCBhbiB1bmRlZmluZWRfcm9vbSBoYW5kbGVyXG5cbiAgICAgICAgc29ja2V0Py5vbihcIm5ld19qb2luXCIsIHVzZXIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICAgIHNldFVzZXJMaXN0KHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCB1c2VyXSlcblxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldD8ub24oJ3NlbmRfcm9vbScsKHJvb20pID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicm9vbVwiLCByb29tLnJvb20pIC8vdGhpcyBzdG9yZXMgdGhlIHJvb21JRCBpbiB0aGUgbG9jYWxTdG9yYWdlXG4gICAgICAgICAgICBzZXRVc2VyTGlzdChwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgdXNlcm5hbWVdKVxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlckxpc3QpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgc2V0Sm9pbmVkUm9vbSh0cnVlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldD8ub24oJ3VuZGVmaW5lZF9yb29tJywgKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHNvY2tldD8ub24oJ2luaXRpYWxfY29ubmVjdGlvbicsIChpZCkgPT4ge3VzZXJJRCA9IGlkOyBjb25zb2xlLmxvZyh1c2VySUQpfSlcblxuICAgICAgICBpZiAoc29ja2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTb2NrZXQoaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsIHsgYXV0b0Nvbm5lY3Q6IGZhbHNlIH0pKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHNvY2tldD8uZGlzY29ubmVjdCgpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncm9vbScpXG4gICAgICAgIH07XG4gICAgICB9LCBbc29ja2V0XSlcblxuICAgIFxuICAgIGZ1bmN0aW9uIGpvaW5Sb29tSGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBpZiAoIXVzZXJuYW1lKSB7c2V0RXJyb3IodHJ1ZSk7IHJldHVybn07XG4gICAgICAgICAgICBzb2NrZXQuY29ubmVjdCgpXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnam9pbl9yb29tJywge3Jvb206IGV2ZW50LnRhcmdldC52YWx1ZSwgdXNlcm5hbWU6IHVzZXJuYW1lfSlcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJvb21IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgICAgICBpZiAoIXVzZXJuYW1lKSB7c2V0RXJyb3IodHJ1ZSk7IHJldHVybn07XG4gICAgICAgICAgICByb29tID0gJydcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5JztcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICByb29tICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb20pXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJvb21cIiwgcm9vbSlcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIHNvY2tldC5jb25uZWN0KCkgLy9taWdodCBub3QgbmVlZCB0byBjb25uZWN0IGluIHRoaXMgY29tcG9uZW50XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnY3JlYXRlX3Jvb20nLCByb29tKVxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJqb2luX3Jvb21cIiwge3Jvb206IHJvb20sIHVzZXJuYW1lOiB1c2VybmFtZX0pXG4gICAgICAgICAgICBzZXRGaXJzdE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJMaXN0KVxuICAgIH0sIFt1c2VyTGlzdF0pXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cblxuICAgICAgICB7IWpvaW5lZFJvb20gJiYgXG4gICAgICAgIDw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZXJyb3InPntlcnJvciA/ICdZb3UgaGF2ZSBub3QgZW50ZXJlZCBhIHVzZXJuYW1lJyA6ICfigI4nfTwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIHVzZXJuYW1lJyBzdHlsZT17ZXJyb3IgPyB7IGJvcmRlcjogJzJweCBzb2xpZCByZWQnLCBvdXRsaW5lOiAnbm9uZScgfSA6IHt9fSBjbGFzc05hbWU9J3VzZXJuYW1lJyB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4ge3NldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7IGVycm9yICYmIHNldEVycm9yKGZhbHNlKX19Lz5cbiAgICAgICAgPENoYXROdW1iZXJJbnB1dCBqb2luUm9vbUhhbmRsZXI9e2pvaW5Sb29tSGFuZGxlcn0gY3JlYXRlUm9vbUhhbmRsZXI9e2NyZWF0ZVJvb21IYW5kbGVyfS8+XG4gICAgICAgIHtsb2FkaW5nICYmIDxzcGFuIGNsYXNzTmFtZT17J2xvYWRpbmcnfT5Db25uZWN0aW9uIGlzIGJlaW5nIGVzdGFibGlzaGVkLiBGaXJzdCB0aW1lIGNvbm5lY3Rpb25zIG1heSB0YWtlIGEgYml0IGxvbmdlci48L3NwYW4+fVxuICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICB7am9pbmVkUm9vbSAmJiA8Q2hhdFdpbmRvdyBzb2NrZXQ9e3NvY2tldH0gdXNlcklEPXt1c2VySUR9IHVzZXJuYW1lPXt1c2VybmFtZX0gZmlyc3RNZXNzYWdlPXtmaXJzdE1lc3NhZ2V9Lz59XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFNvY2tldENvbnRhaW5lcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiQ2hhdE51bWJlcklucHV0IiwibGF6eSIsIkNoYXRXaW5kb3ciLCJ1c2VySUQiLCJyb29tIiwiU29ja2V0Q29udGFpbmVyIiwic29ja2V0Iiwic2V0U29ja2V0Iiwiam9pbmVkUm9vbSIsInNldEpvaW5lZFJvb20iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZmlyc3RNZXNzYWdlIiwic2V0Rmlyc3RNZXNzYWdlIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlckxpc3QiLCJzZXRVc2VyTGlzdCIsIm9wZW5Vc2VyTGlzdCIsInNldE9wZW5Vc2VyTGlzdCIsIm9uIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwcmV2U3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJhdXRvQ29ubmVjdCIsImRpc2Nvbm5lY3QiLCJyZW1vdmVJdGVtIiwiam9pblJvb21IYW5kbGVyIiwiZXZlbnQiLCJrZXkiLCJjb25uZWN0IiwiZW1pdCIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlUm9vbUhhbmRsZXIiLCJ0eXBlIiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMZW5ndGgiLCJsZW5ndGgiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3BhbiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsImJvcmRlciIsIm91dGxpbmUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SocketContainer.jsx\n"));

/***/ })

});