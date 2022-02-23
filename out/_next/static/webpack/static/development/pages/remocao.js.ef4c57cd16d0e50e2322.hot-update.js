webpackHotUpdate("static\\development\\pages\\remocao.js",{

/***/ "./src/components/List.jsx":
/*!*********************************!*\
  !*** ./src/components/List.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Lenovo\\Documents\\Agua-Viva\\src\\components\\List.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Form(_ref) {
  var _this = this;

  var titulo = _ref.titulo,
      culto = _ref.culto,
      orderListagem = _ref.orderListagem,
      remocao = _ref.remocao,
      chegada = _ref.chegada,
      setControle = _ref.setControle,
      controle = _ref.controle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      soma = _useState[0],
      setSoma = _useState[1];

  var doRemove = function doRemove(id, data) {
    remove("https://aguaviva-rp.firebaseio.com/teste/".concat(id, ".json"), data);
  };

  var remove = function remove(url, data) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"](url).then(function () {
      alert("voc\xEA removeu ".concat(data.nome, " da listagem"));
      window.location = "/remocao.html";
    });
  };

  var doEdit = function doEdit(id, data) {
    setControle(!controle);

    if (data.chegada) {
      edit("https://aguaviva-rp.firebaseio.com/teste/".concat(id, ".json"), _objectSpread({}, data, {
        chegada: false
      }));
    } else {
      edit("https://aguaviva-rp.firebaseio.com/teste/".concat(id, ".json"), _objectSpread({}, data, {
        chegada: true
      }));
    }
  };

  var edit = function edit(url, data) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(url, data).then(function () {// if (data.chegada) {
      //   alert(`${data.nome} confirmou a presença no culto`);
      // } else {
      //   alert(`você tirou a confirmação de ${data.nome} do culto`);
      // }
      // window.location = "/controle.html";
    });
  }; // useEffect(() => {
  //   let fetchListagem;
  //   setTimeout(function () {
  //     const fetch = async () => {
  //       fetchListagem = await fetchTeacherMentory();
  //       setListMentory(fetchListagem);
  //     };
  //     fetch();
  //   }, 1000);
  // }, [mod]);


  var contadorChegada = orderListagem === null || orderListagem === void 0 ? void 0 : orderListagem.filter(function (list) {
    return list[1].chegada === true && list[1].culto == culto;
  });
  var contadorCriancas = orderListagem === null || orderListagem === void 0 ? void 0 : orderListagem.filter(function (list) {
    return list[1].culto == culto;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (contadorCriancas) {
      var soma1 = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(contadorCriancas);

      var soma2 = soma1.map(function (som) {
        return parseInt(som[1].criancas);
      });
      var total;

      if (soma2.length >= 1) {
        total = soma2.reduce(function (acumulado, x) {
          // console.log(`${acumulado}+${x} = ${acumulado + x}`);
          return acumulado + x;
        });
      } else {
        total = 0;
      }

      setSoma(total);
    }
  }, [contadorCriancas]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "list-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, titulo), (contadorChegada === null || contadorChegada === void 0 ? void 0 : contadorChegada.length) > 0 && chegada && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "contagem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, contadorChegada === null || contadorChegada === void 0 ? void 0 : contadorChegada.length), (contadorChegada === null || contadorChegada === void 0 ? void 0 : contadorChegada.length) == 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, " pessoa chegou "), (contadorChegada === null || contadorChegada === void 0 ? void 0 : contadorChegada.length) != 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, " pessoas chegaram "), "no culto")), __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Nome"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Discipulado"), chegada && __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, "Controle Servos"), remocao && __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, "Status"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, orderListagem && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, orderListagem.map(function (individuo) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, individuo.map(function (ind) {
      if (ind.culto == culto) {
        return __jsx("tr", {
          key: ind,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 27
          }
        }, __jsx("td", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }
        }, ind.nome, " ", ind.sobrenome), __jsx("td", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 29
          }
        }, ind.rede), chegada && __jsx("td", {
          onClick: function onClick(e) {
            return doEdit(individuo[0], ind);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 31
          }
        }, ind.chegada ? __jsx("img", {
          src: "images/carraca.svg",
          className: "certo",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 35
          }
        }) : __jsx("img", {
          src: "images/carraca.svg",
          className: "nao_certo",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 35
          }
        }) // <div className="nao_chegou"></div>
        ), remocao && __jsx("td", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 31
          }
        }, __jsx("button", {
          className: "remove",
          onClick: function onClick(e) {
            return doRemove(individuo[0], ind);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 33
          }
        }, "Remover")));
      }
    }));
  })))));
}

/***/ })

})
//# sourceMappingURL=remocao.js.ef4c57cd16d0e50e2322.hot-update.js.map