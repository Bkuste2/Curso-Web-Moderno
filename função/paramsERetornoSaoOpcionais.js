function area(largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor Acima do Permitido ${area}m²`);
    }
    else {
        return area
    }
}
console.log(area(2,2));
console.log(area(2));
console.log(area());
console.log(area(5,4,3,2,1));
console.log(area(5,5));