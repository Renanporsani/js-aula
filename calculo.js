window.onload = function () {
    var a = [2, 3, 6, 2, 1];
    var tamanhoLista = a.length;
    var numeroRepetido;

    for (var i = 0; i < a.length; i++) {
        var x = a[i];

        for (var k = 0; k < tamanhoLista; k++) {
            var y = a[k];

            if (k != i) {


                var y = a[k];

                if (x == y) {
                    numeroRepetido = a[k];

                }
            }
        }

    }
    alert(numeroRepetido);





}