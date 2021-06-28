// Precisamos desenvolver um menu para um microondas super veloz, 
//onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// Criando um objeto microondas menu
let microondasMenu = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8
};

//Desestruturando o objeto
let {pipoca, macarrao, carne, feijao, brigadeiro} = microondasMenu;

//Função para validar o tempo, antes de usar o switch
function validarTempo(tempo, tempoPadrao){
    if (tempo >= tempoPadrao * 3){
        console.log('Kabumm')
    }else if(tempo >=  tempoPadrao * 2){
        console.log('Comida queimou')
    }else if(tempo < tempoPadrao){
        console.log('Tempo insuficiente');
    }else {
        console.log('Prato pronto, bom apetite!!!"')
    }
}

// Essa é usada para validar os pratos e as condições que o Microondas oferece
function usuarioMicroondas(comida, tempo) {
    switch (comida) {
        case 'pipoca':
            validarTempo(tempo, pipoca);
            break;
        case 'macarrão':
            validarTempo(tempo, macarrao);
            break;
        case 'carne':
            validarTempo(tempo, carne);
            break;
        case 'feijão':
            validarTempo(tempo, feijao);
            break;
        case 'brigadeiro':
            validarTempo(tempo, brigadeiro);
            break;
        default:
            console.log('Prato inexistente');
            break;
    }
}

//Chamando a função, funcionou. 
usuarioMicroondas('feijão', 60);
    