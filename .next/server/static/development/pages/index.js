module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import moment from "moment-timezone";

 // import { console } from "window-or-global";

function Page() {
  function initialGA() {
    react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.initialize("UA-170909874-1");
    react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.pageview(urlLocal);
  }

  let urlLocal;

  if (false) { var _window$location; }

  initialGA();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: nome,
    1: setNome
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: rede,
    1: setRede
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: sobrenome,
    1: setSobrenome
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: culto,
    1: setCulto
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: criancas,
    1: setCriancas
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const url = "https://aguaviva-rp.firebaseio.com/teste.json";
  var date = new Date();
  var dia_sem = date.getDay(); // var dateMoment = moment(`${date}`);
  // dateMoment.tz("America/Sao_Paulo").format("ha z");
  // moment.locale("pt-BR");
  // const novaData = new Date(dateMoment);
  // var dia_sem = moment(novaData).format("dddd");

  const {
    0: qtdSabado,
    1: setQtdSabado
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: qtdDomingoManha,
    1: setQtdDomingoManha
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: qtdDomingoNoite,
    1: setQtdDomingoNoite
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: nomeLimpar,
    1: setNomeLimpar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: sobrenomeLimpar,
    1: setSobrenomeLimpar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: redeLimpar,
    1: setRedeLimpar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: criancasLimpar,
    1: setCriancasLimpar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: listagem,
    1: setListagem
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  var qtdMAxima = 100;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (data) {
      const cultoSabado = Object.keys(data).filter(pessoa => {
        return data[pessoa].culto == "sabado";
      });
      setQtdSabado(cultoSabado.length);
      const cultoDomingoManha = Object.keys(data).filter(pessoa => {
        return data[pessoa].culto == "manha";
      });
      setQtdDomingoManha(cultoDomingoManha.length);
      const cultoDomingoNoite = Object.keys(data).filter(pessoa => {
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

  const doRemove = id => {
    remove(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`);
  };

  const remove = url => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(url).then(() => {
      console.log(`você deletou ${url}`);
    });
  };

  var redirect;

  if (false) {}

  const post = data => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, data).then(res => {
      setNomeLimpar(!nomeLimpar);
      setSobrenomeLimpar(!sobrenomeLimpar);
      setRedeLimpar(!redeLimpar);
      setCriancasLimpar(!criancasLimpar);
      alert("você confirmou sua presença no culto");
      window.location = "/listagem.html";
    });
  };

  const salve = () => {
    if (nome && sobrenome && rede && culto) {
      const existeCriancas = criancas ? criancas : "0";
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
  }), __jsx("h1", null, "Formul\xE1rio de controle de presen\xE7a no culto")), (qtdDomingoManha < qtdMAxima || qtdDomingoNoite < qtdMAxima) && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, (dia_sem == 0 || dia_sem == 5 || dia_sem == 6) && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, listagem ? __jsx("div", {
    className: "form"
  }, __jsx("label", null, "Nome"), nomeLimpar && __jsx("input", {
    onKeyUp: e => setNome(e.currentTarget.value),
    type: "text",
    placeholder: "Nome ",
    className: "input_name",
    required: true
  }), !nomeLimpar && __jsx("input", {
    onKeyUp: e => setNome(e.currentTarget.value),
    type: "text",
    placeholder: "Nome ",
    className: "input_name",
    required: true
  }), __jsx("br", null), __jsx("label", null, "Sobrenome"), sobrenomeLimpar && __jsx("input", {
    onKeyUp: e => setSobrenome(e.currentTarget.value),
    type: "text",
    placeholder: "Sobrenome",
    required: true
  }), !sobrenomeLimpar && __jsx("input", {
    onKeyUp: e => setSobrenome(e.currentTarget.value),
    type: "text",
    placeholder: "Sobrenome",
    required: true
  }), __jsx("br", null), __jsx("label", null, "Rede"), redeLimpar && __jsx("select", {
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onKeyUp: e => setCriancas(e.currentTarget.value),
    type: "number",
    placeholder: "Numero de crian\xE7as",
    required: true
  }), !criancasLimpar && __jsx("input", {
    onKeyUp: e => setCriancas(e.currentTarget.value),
    type: "number",
    placeholder: "Numero de crian\xE7as",
    required: true
  }), __jsx("div", {
    className: "vagas"
  }, __jsx("span", null, "Domingo 9hs -", qtdDomingoManha >= qtdMAxima && __jsx("small", {
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
  }), __jsx("span", null, "Carregando...")))), qtdDomingoManha >= qtdMAxima && qtdDomingoNoite >= qtdMAxima && dia_sem != 1 && dia_sem != 2 && dia_sem != 3 && dia_sem != 4 && __jsx("div", null, __jsx("p", {
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

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Felipe Paulino\Documents\GitHub\OUTROS\AguaVIva\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map