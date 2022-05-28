const funcaoDaSorte = num => {
    const min = 1
    const max = 10
    const random = Math.floor(Math.random() * (max - min) + min)
    
    if (num == random) {
        console.log('Parabens você Acertou');
    }
    else{
        console.log(`Que pena! O número sorteado foi o ${random}`);
    }
}
funcaoDaSorte(4)