const Page2 = ()=>{
    
    const url = window.location.href
    
    //cor
    const sep = url.split('cor=')[1]
    const cor = sep.split('&')[0]
    //time
    const sep2 = sep.split('time=')[1]
    const time = sep2.split('&')[0]
    //comida
    const comida = sep.split('comida=')[1]
    
    

    const splitzin = () =>{
    
    return(
        cor === 'vermelho' ? <div className="bg">vermelho</div> : cor === 'azul' ? <div className="bg2">azul mano</div> : alert('Cor invalida, escolha outra cor')
       
        
    )
}

const splitTime = () =>{
    return(
    time === 'saoPaulo' ? <div>tricolor</div> : time === 'flamengo' ? <div>mengo</div> : alert('time invalido, escolha outro time')
    )
}

const splitComida = () =>{
    return(
    comida === 'peixe' ? <div>peixe</div> : comida === 'frango' ? <div>coco</div> : alert('comida invalida, escolha outro comida')
    )
}



    return(
        <div>   
            <div>{splitzin()}</div>
            <div>{splitTime()}</div>
            <div>{splitComida()}</div>
        </div>
        
    )
}

export default Page2