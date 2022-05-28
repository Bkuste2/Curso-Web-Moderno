const calculaSalario = (plano, salario) => {
    switch (plano){
        case ('A'):
            console.log(`Salario Inicial: ${salario}. Salário após bonificação com o plano A: ${salario + (salario * 10/100)}`);
            break
        case('B'):  
            console.log(`Salario Inicial: ${salario}. Salário após bonificação com o plano B: ${salario + (salario * 15/100)}`);
            break
        case('C'):
            console.log(`Salario Inicial: ${salario}. Salário após bonificação com o plano C: ${salario + (salario * 20/100)}`);
            break
        default:
            console.log('Plano inválido');
    }
}
calculaSalario('A', 1000)
calculaSalario('B', 1000)
calculaSalario('C', 1000)
calculaSalario('D', 1000)
