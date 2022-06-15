const Jsx = () => {
    const titulo = <h1>JSX é um conceito Central</h1>

    return (
        <>
            {titulo.props.children.toUpperCase()}
            <p>
                {JSON.stringify({nome: 'igor',idade: 17})}
            </p>
        </>
    )
}

export default Jsx;