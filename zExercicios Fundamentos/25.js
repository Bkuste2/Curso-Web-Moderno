const buscarPalavrasSemelhantes = (palavra, array)=>{
    const newArray = new Array
    array.filter((e)=>{
        if(e.indexOf(palavra.toLowerCase()) >= 0){
            newArray.push(e)
        }
    })
    console.log(newArray);
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])
