const cardapioLanchonete = (codigo, qtd = 1) => {
    switch (codigo){
        case(100):
            console.log(`Foram pedidos ${qtd} Cachorros Quentes, o valor a ser pago é: R$ ${qtd * 3}`);
            break
        case(200):  
            console.log(`Foram pedidos ${qtd} hambúrgueres simples, o valor a ser pago é: R$ ${qtd * 4}`);
            break
        case(300):
            console.log(`Foram pedidos ${qtd} cheeseburguers, o valor a ser pago é: R$ ${qtd * 5.50}`);
            break
        case(400):
            console.log(`Foram pedidos ${qtd} bauru, o valor a ser pago é: R$ ${qtd * 7.50}`);
            break
        case(500):
            console.log(`Foram pedidos ${qtd} refrigerantes, o valor a ser pago é: R$ ${qtd * 3.50}`);
            break
        case(600):
            console.log(`Foram pedidos ${qtd} sucos, o valor a ser pago é: R$ ${qtd * 2.80}`);
            break
        default:
            console.log(`Produto Não Existente`);
    }
}


cardapioLanchonete(100, 1)
cardapioLanchonete(200, 5)
cardapioLanchonete(300, 2)
cardapioLanchonete(400)
cardapioLanchonete(500,3)
cardapioLanchonete(600)
cardapioLanchonete(700)