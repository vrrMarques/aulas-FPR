const Session = () => {

    const numero = sessionStorage.getItem('numero')

    return (
        <h1>{`O numero é ${numero}`}</h1>
    )
}

export default Session