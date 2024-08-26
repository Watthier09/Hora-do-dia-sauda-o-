function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
msg.innerHTML = `<p>Agora são ${hora} horas.</p> `
    if (hora >= 0 && hora < 12) {
    //bom dia 
        img.src = "manha png.png"
        document.body.style.background = '#CED685'
        msg.innerHTML =`<p>Agora são ${hora} horas.</p> Bom dia !`
    }else if  (hora >= 12 && hora <18 ){
    //boa tarde
        img.src = "tarde png.png"
        document.body.style.background = '#B0C5D6'
        msg.innerHTML =`<p>Agora são ${hora} horas.</p> Boa tarde !`
    }else  {
    //boa noite
        img.src = "noite png.png"
        document.body.style.background = '#1C2141'
        msg.innerHTML =`<p>Agora são ${hora} horas.</p> Boa noite !`
    
}
}