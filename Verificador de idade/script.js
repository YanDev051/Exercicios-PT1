function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')
    var img = document.createElement('img')


    if(fano.value.length > ano || fano.value.length ==0){
        window.alert("Verifique os dados e tente novamente")

    }else{
        var fsex=window.document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero=''
        if(fsex[0].checked){
            genero ="Homem"
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src','homen-crianca.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','homen-jovem.png')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src','homen-adulto.png')
            }else{
                //idoso
                img.setAttribute('src','homen-velho.png')
            }
        }else if(fsex[1].checked){
            genero ="Mulher"
            if(idade >=0 && idade<10){
                //crianca
                img.setAttribute('src','mulher-crianca.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','mulher-jovem.png')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src','mulher-adulta.png')
            }else{
                //idoso
                img.setAttribute('src','mulher-velha.png')
            }

        }
        res.style.textAlign ="center"
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}