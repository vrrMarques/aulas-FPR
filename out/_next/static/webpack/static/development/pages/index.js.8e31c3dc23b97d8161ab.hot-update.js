webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import moment from "moment-timezone";

 // import { console } from "window-or-global";

function Page() {
  function initialGA() {
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].initialize("UA-170909874-1");
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].pageview(urlLocal);
  }

  var urlLocal;

  if (true) {
    var _window$location;

    urlLocal = (_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.href;
  }

  initialGA();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      nome = _useState3[0],
      setNome = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      rede = _useState4[0],
      setRede = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      sobrenome = _useState5[0],
      setSobrenome = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      culto = _useState6[0],
      setCulto = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      criancas = _useState7[0],
      setCriancas = _useState7[1];

  var url = "https://aguaviva-rp.firebaseio.com/teste.json";
  var date = new Date();
  var dia_sem = date.getDay(); // var dateMoment = moment(`${date}`);
  // dateMoment.tz("America/Sao_Paulo").format("ha z");
  // moment.locale("pt-BR");
  // const novaData = new Date(dateMoment);
  // var dia_sem = moment(novaData).format("dddd");

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdSabado = _useState8[0],
      setQtdSabado = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdDomingoManha = _useState9[0],
      setQtdDomingoManha = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdDomingoNoite = _useState10[0],
      setQtdDomingoNoite = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      nomeLimpar = _useState11[0],
      setNomeLimpar = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      sobrenomeLimpar = _useState12[0],
      setSobrenomeLimpar = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      redeLimpar = _useState13[0],
      setRedeLimpar = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      criancasLimpar = _useState14[0],
      setCriancasLimpar = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      listagem = _useState15[0],
      setListagem = _useState15[1];

  var qtdMAxima = 100;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {
      var cultoSabado = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "sabado";
      });
      setQtdSabado(cultoSabado.length);
      var cultoDomingoManha = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "manha";
      });
      setQtdDomingoManha(cultoDomingoManha.length);
      var cultoDomingoNoite = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "noite";
      });
      setQtdDomingoNoite(cultoDomingoNoite.length);
      setListagem(data); // if (dia_sem >= 1 && dia_sem <= 3) {
      //   Object.entries(data).map((individuo) => {
      //     if (individuo[0] != "base") {
      //       doRemove(individuo[0]);
      //     }
      //   });
      // }
    }
  }, [data]);

  var doRemove = function doRemove(id) {
    remove("https://aguaviva-rp.firebaseio.com/teste/".concat(id, ".json"));
  };

  var remove = function remove(url) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"](url).then(function () {
      console.log("voc\xEA deletou ".concat(url));
    });
  };

  var redirect;

  if (true) {
    redirect = window.location.href;
  }

  var post = function post(data) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, data).then(function (res) {
      setNomeLimpar(!nomeLimpar);
      setSobrenomeLimpar(!sobrenomeLimpar);
      setRedeLimpar(!redeLimpar);
      setCriancasLimpar(!criancasLimpar);
      alert("você confirmou sua presença no culto");
      window.location = "/listagem.html";
    });
  };

  var salve = function salve() {
    if (nome && sobrenome && rede && culto) {
      var existeCriancas = criancas ? criancas : "0";
      post({
        nome: nome.toLowerCase(),
        sobrenome: sobrenome,
        rede: rede,
        culto: culto,
        criancas: existeCriancas,
        chegada: false
      });
    } else {
      alert("Um ou mais campos estão em branco");
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, "Igreja Batista \xC1gua Viva - Ribeir\xE3o Pires")), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "header"
  }, __jsx("img", {
    src: "/images/logo.jpg"
  }), __jsx("h1", null, "Formul\xE1rio de controle de presen\xE7a no culto")), (qtdDomingoManha < qtdMAxima || qtdDomingoNoite < qtdMAxima) && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, (dia_sem == 4 || dia_sem == 5 || dia_sem == 6) && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, listagem ? __jsx("div", {
    className: "form"
  }, __jsx("label", null, "Nome"), nomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setNome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Nome ",
    className: "input_name",
    required: true
  }), !nomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setNome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Nome ",
    className: "input_name",
    required: true
  }), __jsx("br", null), __jsx("label", null, "Sobrenome"), sobrenomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setSobrenome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Sobrenome",
    required: true
  }), !sobrenomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setSobrenome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Sobrenome",
    required: true
  }), __jsx("br", null), __jsx("label", null, "Rede"), redeLimpar && __jsx("select", {
    onChange: function onChange(e) {
      setRede(e.target.value);
    },
    required: true
  }, __jsx("option", {
    value: ""
  }, "Selecione sua rede"), __jsx("option", {
    value: "manoel"
  }, "Pr Manoel - Ebenez\xE9r"), __jsx("option", {
    value: "gilberto"
  }, "Pr Gilberto - Kadosh"), __jsx("option", {
    value: "lincoln"
  }, "Pr Lincoln - Shekinah"), __jsx("option", {
    value: "reginaldo"
  }, "Pr Reginaldo - Radicais"), __jsx("option", {
    value: "darliene"
  }, "Pr Darliene - Kids ")), !redeLimpar && __jsx("select", {
    onChange: function onChange(e) {
      setRede(e.target.value);
    },
    required: true
  }, __jsx("option", {
    value: ""
  }, "Selecione sua rede"), __jsx("option", {
    value: "manoel"
  }, "Pr Manoel - Ebenez\xE9r"), __jsx("option", {
    value: "gilberto"
  }, "Pr Gilberto - Kadosh"), __jsx("option", {
    value: "lincoln"
  }, "Pr Lincoln - Shekinah"), __jsx("option", {
    value: "reginaldo"
  }, "Pr Reginaldo - Radicais"), __jsx("option", {
    value: "darliene"
  }, "Pr Darliene - Kids ")), __jsx("br", null), __jsx("label", null, "Qual culto deseja ir?"), __jsx("select", {
    onChange: function onChange(e) {
      setCulto(e.target.value);
    },
    required: true
  }, __jsx("option", {
    value: ""
  }, "Selecione o culto"), qtdDomingoManha < qtdMAxima && __jsx("option", {
    value: "manha"
  }, "Domingo - 9hs"), qtdDomingoNoite < qtdMAxima && __jsx("option", {
    value: "noite"
  }, "Domingo - 18hs ")), __jsx("br", null), __jsx("label", null, "Quantas crian\xE7as vai levar para o cultinho?"), criancasLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setCriancas(e.currentTarget.value);
    },
    type: "number",
    placeholder: "Numero de crian\xE7as",
    required: true
  }), !criancasLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setCriancas(e.currentTarget.value);
    },
    type: "number",
    placeholder: "Numero de crian\xE7as",
    required: true
  }), __jsx("div", {
    className: "vagas"
  }, __jsx("span", null, "S\xE1bado 19hs -", qtdSabado >= qtdMAxima && __jsx("small", {
    className: "red"
  }, " vagas encerradas"), qtdSabado < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdSabado >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " resta", qtdSabado != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdSabado >= 0 && __jsx("small", null, " ", qtdMAxima - qtdSabado), qtdSabado >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " vaga", qtdSabado != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s")))), __jsx("span", null, "Domingo 9hs -", qtdDomingoManha >= qtdMAxima && __jsx("small", {
    className: "red"
  }, " vagas encerradas"), qtdDomingoManha < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoManha >= 0 && __jsx("small", null, " ", qtdMAxima - qtdDomingoManha), qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s")))), __jsx("span", null, "Domingo 18hs -", qtdDomingoNoite >= qtdMAxima && __jsx("small", {
    className: "red"
  }, " vagas encerradas"), qtdDomingoNoite < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoNoite >= 0 && __jsx("small", null, " ", qtdMAxima - qtdDomingoNoite), qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s"))))), __jsx("br", null), __jsx("button", {
    onClick: salve
  }, "Inscrever"), __jsx("a", {
    href: "/listagem.html",
    className: "listagem"
  }, "Verifique a listagem")) : __jsx("p", {
    className: "carregando"
  }, __jsx("img", {
    src: "/images/loading.gif"
  }), __jsx("span", null, "Carregando...")))), qtdSabado >= qtdMAxima && qtdDomingoManha >= qtdMAxima && qtdDomingoNoite >= qtdMAxima && dia_sem != 1 && dia_sem != 2 && dia_sem != 3 && dia_sem != 4 && __jsx("div", null, __jsx("p", {
    className: "paragrafo"
  }, "Infelizmente todos os cultos presenciais ja esgotaram sua capacidade exigida por lei, mas acompanhe online pelas nossas redes sociais", __jsx("div", {
    className: "redes"
  }, __jsx("a", {
    href: "https://www.youtube.com/channel/UCSgeLNbDf68linYZ7XBzuug/videos"
  }, __jsx("img", {
    src: "/images/youtube.svg",
    className: "icon"
  })), __jsx("a", {
    href: "https://www.facebook.com/IbavRibeiraoPires/"
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "icon"
  })), __jsx("a", {
    href: "https://www.instagram.com/ibavrp/"
  }, __jsx("img", {
    src: "/images/instagram.svg",
    className: "icon"
  }))), __jsx("a", {
    href: "/listagem.html",
    className: "listagem_encerrada"
  }, "Verifique a listagem dos cultos presenciais"))), dia_sem >= 1 && dia_sem <= 4 && __jsx("div", null, __jsx("p", {
    className: "paragrafo"
  }, "O site s\xF3 abrir\xE1 as inscri\xE7\xF5es ", __jsx("b", null, "sexta-feira as 00hs"), "Enquanto espera nos acompanhe nas nossas redes sociais", " ", __jsx("div", {
    className: "redes"
  }, __jsx("a", {
    href: "https://www.youtube.com/channel/UCSgeLNbDf68linYZ7XBzuug/videos"
  }, __jsx("img", {
    src: "/images/youtube.svg",
    className: "icon"
  })), __jsx("a", {
    href: "https://www.facebook.com/IbavRibeiraoPires/"
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "icon"
  })), __jsx("a", {
    href: "https://www.instagram.com/ibavrp/"
  }, __jsx("img", {
    src: "/images/instagram.svg",
    className: "icon"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.8e31c3dc23b97d8161ab.hot-update.js.map