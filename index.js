

window.onload = function () {

    
   
    var a = [
    
        {
            'nome': 'Celular Teste1',
            'qtdo': 2
        },
        {
            'nome': 'Celular Teste2',
            'qtdo': 3
        },
        {
            'nome': 'Celular Teste3',
            'qtdo': 0
        },
        {
            'nome': 'Celular Teste3',
            'qtdo': 4
        }
    ];
    var tamanhoLista = a.length;
    var produtoRepetido;

    

    for (var i = 0; i < tamanhoLista; i++) {
        var x = a[i].nome;

        for(var k = 0; k < tamanhoLista; k++){
            var y = a[k].nome;
            if(k != i){
                
                if (x == y) {
                    produtoRepetido = a[k].nome;
            }
        }
    }
    
    

}
alert(produtoRepetido);
}
