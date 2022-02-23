webpackHotUpdate("static\\development\\pages\\remocao.js",{

/***/ "./pages/remocao.jsx":
/*!***************************!*\
  !*** ./pages/remocao.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/List */ "./src/components/List.jsx");
var _jsxFileName = "C:\\Users\\Lenovo\\Documents\\Agua-Viva\\pages\\remocao.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Page() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      orderListagem = _useState3[0],
      setOrderListagem = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("todos"),
      listagem = _useState4[0],
      setListagem = _useState4[1];

  var url = "https://aguaviva-rp.firebaseio.com/teste.json";

  function compared(a, b) {
    if (a[1].nome < b[1].nome) return -1;
    if (a[1].nome > b[1].nome) return 1;
    return 0;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {
      var array = Object.entries(data);
      array.sort(compared);
      setOrderListagem(array);
    }
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    setOrderListagem;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Igreja Batista \xC1gua Viva - Ribeir\xE3o Pires")), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Listagem de controle de presen\xE7a no culto")), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "select",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Selecione a listagem do culto que deseja ver"), __jsx("select", {
    onChange: function onChange(e) {
      setListagem(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("option", {
    value: "todos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Todos"), __jsx("option", {
    value: "manha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "S\xE1bado - 15hs"), __jsx("option", {
    value: "noite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "S\xE1bado - 17:30hs"))), listagem == "manha" && __jsx(_src_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titulo: "Sábado - 15hs",
    culto: "manha",
    orderListagem: orderListagem,
    remocao: true,
    chegada: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }), listagem == "noite" && __jsx(_src_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titulo: "Sábado - 17:30hs",
    culto: "noite",
    orderListagem: orderListagem,
    remocao: true,
    chegada: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), listagem == "todos" && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titulo: "Sábado - 15hs",
    culto: "manha",
    orderListagem: orderListagem,
    remocao: true,
    chegada: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx(_src_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titulo: "Sábado - 17:30hs",
    culto: "noite",
    orderListagem: orderListagem,
    remocao: true,
    chegada: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }))), loading && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, "Carregando..."), __jsx("div", {
    className: "box-voltar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/",
    className: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Voltar"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=remocao.js.b41299bb484fefd0e0f5.hot-update.js.map