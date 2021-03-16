function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = 'um homem'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if ( idade < 60) {
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if ( idade < 60) {
                //Adulta
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //Idosa
                img.setAttribute('src', 'senhoramulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}