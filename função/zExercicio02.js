const classificacaoTriangulos = (x,y,z) => {
    if(x === y && y === z){
        console.log('Equilátero');
    }
    else if(x == y || y == z || x == z){
        console.log('Isóceles');
    }
    else{
        console.log('Escaleno');
    }
}
classificacaoTriangulos(5,5,5)
classificacaoTriangulos(5,4,5)
classificacaoTriangulos(5,4,3)