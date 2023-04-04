function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança              
                img.setAttribute('src', 'foto-abcd.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-abcd.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-abcd.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-abcd.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança             
                img.setAttribute('src', 'foto-abcd.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-abcd.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-abcd.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-abcd.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} ${idade} anos`
        res.appendChild(img)
    }    
}