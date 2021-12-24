function carregar(){
    
var msg = window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data= new Date()
var hora =data.getHours()

msg.innerHTML=`Agora são ${hora} horas`

if(hora >=0 && hora <12){
    //bomdia
    img.src='Manha.png'
    document.body.style.backgroundColor="#d45523"
    document.innerHTML="<br>Bom dia"
}else if(hora >=12 && hora<=18){
    //boa tarde
    img.src='Tarde.png'
    document.innerHTML="<br>Bom dia"

document.body.style.backgroundColor="#088304ce"
}else{
    //boa noite
    img.src='noite.png'
    document.body.style.backgroundColor="#272323"
    document.innerHTML="<br>Boa noite"
}

}


