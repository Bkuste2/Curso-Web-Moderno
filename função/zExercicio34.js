// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

const confereLetras = (palavra1, palavra2) =>{
    let resposta = true
    for(let i = 0;i <= palavra1.length; i++){

        const p1 = palavra1.charAt(i).toUpperCase()
        for(let si = 0; si <= palavra2.length; si++){
            const p2 = palavra2.charAt(si).toUpperCase()

            if(p2 == p1){
                resposta = true
                break
            } else{
                resposta = false
            }
        }
        if(!resposta) {
            return resposta
        }
    }
    
    return resposta
}
console.log(confereLetras('Batata','B0atata'));