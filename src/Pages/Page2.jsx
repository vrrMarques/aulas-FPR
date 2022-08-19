const Page2 = () => {

    const nome = localStorage.getItem('usuario')

    return (
        <h1>{`Bem vindo ${nome}`}</h1>
    )
}

export default Page2