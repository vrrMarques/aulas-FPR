const Page3 = ()=>{

    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
      urlParams = Object.assign({}, urlParams, {
        [key]: value.toString()
      });
    });

    console.log('url pronta')
    const nome = urlParams.nome
    const jogo = urlParams.jogo
    const doce = urlParams.doce
    const carro = urlParams.carro
    const esporte = urlParams.esporte

    const nomes = () =>{
        if(nome === 'Vinicius'){
            return(
                <div>{nome} joga </div>
            )
        }else if(nome === 'Marcos'){
            return(
                <div>{nome} joga </div>
            )
        }
    }

    const jogos = () =>{
        if(jogo === 'lol'){
            return(
            <img src ="./lol.jpg" alt ='lol' />
            )
        }else if(jogo === 'valorant'){
            return(
            <img src= "./vava.jpg" alt = 'vava'/>
            )
        }
    }

    const doces = () =>{
        if(doce === 'mousse'){
            return(
            <div>Em quanto come {doce} de limão 🥣</div>
            )
        } else if(doce === 'torta'){
            return(
            <div>Em quanto come {doce} de limão 🍰</div>
            )
        }
    }

    const carros = () =>{
        if(carro === 'hb20'){
            return(
                <div>Depois vai pegar seu {carro} 🚗</div>
            )
        }else if(carro === 'audi'){
            return(
                <div>Depois vai pegar sua {carro} 🏎</div>
            )
        }
    }

    const esportes = () =>{
        if(esporte === 'futebol'){
            return(
                <div>
                    <img src ="./futebol.jpg" alt="futebol"/>
                </div>
            )
        }else if(esporte === 'basquete'){
            return(
                <div>
                    <img src ="./basquete.webp" alt="basquete"/>
                </div>
            )
        }
    }

    return(
        <div>
            <h1>{nomes()}</h1>
            <div>{jogos()}</div>
            <h2>{doces()}</h2>
            <h3>{carros()}</h3>

            <h4>Para ir no estadio assistir</h4>
            <div>{esportes()}</div>
        </div>
    )
}

export default Page3