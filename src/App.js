import Header from "./components/Header";
import Link from "./components/Link";
import Secao from "./components/Secao";


function App() {

  


  return (
    <div className="App">
    <Header />
    <Secao texto = {' texto 1 - As maçãs contêm poderosos nutrientes que estimulam o sistema imunológico. A fruta é fonte de vitamina C que contribui para que o organismo desenvolva resistência'}/>
    <Secao texto = {'texto 2 - Odeio aranhas, se uma pular em mim provavelmente vou ter um infarto'} />
    <Secao texto = {' texto 3 - ALBION ONLINE É UM MMORPG SANDBOX EM QUE VOCÊ ESCREVE SUA PRÓPRIA HISTÓRIA EM VEZ DE SEGUIR UM CAMINHO PRÉ DETERMINADO! EXPLORE UM VASTO MUNDO ABERTO QUE CONSISTE DE CINCO ECOSSISTEMA ÚNICOS, TUDO QUE VOCÊ FAZ GERA UM IMPACTO NO MUNDO'} />
    <Secao texto = {' texto 4 - Estou usando o mesmo componente com props diferentes'} />
    
    <Link ativo = {true}/>
    <Link ativo = {false}/>
    
    </div>
  );
}

export default App;
