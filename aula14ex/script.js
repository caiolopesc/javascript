function contar() {
    let ini = document.getElementById('txtb')
    let fim = document.getElementById('txte')
    let passo = document.getElementById('txts')
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('Preencha os campos corretamente!')     
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido!')
            p=1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F642}`
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F642}`
            }
        }
        
    }
    
}