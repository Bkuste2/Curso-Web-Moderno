// let cont = 0
// setInterval(()=>{
//     cont++
//     console.log('Olá ' + cont);
// },2000)
/* 
setTimeout(()=>{
    console.log('Executando callback...');

    setTimeout(()=>{
        console.log('Executando callback 2...');

        setTimeout(()=>{
            console.log('Executando callback 3...');
        },2000)
    },2000)
},2000)
*/

function esperarPor(tempo = 2000){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Executando Promisse');
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)