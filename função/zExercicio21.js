// 1) crianças com menos de 10 anos pagam R$80; 
// 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
// 4) conveniados acima de 60 anos pagam R$130

const planoDeSaude = idade => {
    const valorPadrao = 100
    if(idade < 10 && idade >= 0){
        return `A idade inserida foi: ${idade}, O preço do seu plano ficou: ${valorPadrao + 80}.`
    } else if (idade <= 30){
        return `A idade inserida foi: ${idade}, O preço do seu plano ficou: ${valorPadrao + 50}.`
    } else if (idade <= 60){
        return `A idade inserida foi: ${idade}, O preço do seu plano ficou: ${valorPadrao + 95}.`
    }else if (idade > 60){
        return `A idade inserida foi: ${idade}, O preço do seu plano ficou: ${valorPadrao + 130}.`
    }else{
        return `A idade inserida (${idade}) é inválida`
    }
}

console.log(planoDeSaude(8));
console.log(planoDeSaude(15));
console.log(planoDeSaude(35));
console.log(planoDeSaude(52));
console.log(planoDeSaude(80));