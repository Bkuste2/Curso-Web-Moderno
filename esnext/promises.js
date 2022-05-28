function falarDepoisDe(segs, string) {
    return (new Promise((resolvida, rejeitada) =>{
        setTimeout(()=>{
            resolvida(string)
        },segs * 1000)
    }))
}

falarDepoisDe(3, 'Olá')
.then(frase => frase.concat('!?!'))
.then(outraFrase=> console.log(outraFrase))
// .catch(e => console.log(e);)  // Tratamento de erro (REJECT)