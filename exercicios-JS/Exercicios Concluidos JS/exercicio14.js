function venderFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos essa fruta aqui');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.');
            break;
        default:
            console.log('Erro, fruta invalida')
    }
}

venderFruta('melancia');
venderFruta('kiwi');
venderFruta('maçã');
venderFruta('melancia');
venderFruta('abacaxi');
