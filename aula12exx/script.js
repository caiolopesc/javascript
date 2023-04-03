function verificar() {
    var data = newDate()
    var ano = getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('Tente novamente.')
    }
}