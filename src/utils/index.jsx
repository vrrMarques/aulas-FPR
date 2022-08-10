export const Teste = (valor) => {
    
    if(valor === '--Guitarra--'){
     console.log('Tem cordas')
    }
    else if(valor ==='--Bateria--'){
      console.log('Tem pedal')
    }
    else if(valor === '--Microfone--'){
      console.log('Tem fios')
    }
    else{
      console.log('Nao é um instrumento')
    }
  }

  export const Click = (valorDigitado) => {
    switch(valorDigitado){
      case 'zilean': console.log('main do vinicius, melhor campeao, so gente bonita joga'); break;
      case 'yasuo': console.log('espama maestria, mas no fim fica 0/10'); break;
      case 'zyra': console.log('desculpa pra jogar de suporte e roubar farm e kill'); break;
      default:
        console.log('Não é um campeão do lol(ou pelo menos nao um campeão insuportavel)')
    }
  }


  