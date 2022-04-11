var array_h2=[ 
"Pense no dobro dele", 
"Agora some +",
"Divida por 2",
"Agora subtraia pelo número que você pensou no início", 
"A resposta deu"]

var array_num=[2,4,6,8,10,12,20,30]

var num =document.getElementById("num")

var indexArraySoma = Math.floor(Math.random()*7)

num.innerHTML= array_num[indexArraySoma]

var h2 =document.getElementsByTagName("h2")[0]

var resposta = (array_num[indexArraySoma])/2 +"?"


let button =document.getElementById("b")
let img =document.getElementsByClassName("imagem")[0] 


var i=-1
function mudaInner(){

    i=i+1
    h2.innerHTML= array_h2[i]
    if(i==1 || i==4 || i > 4 ){
        num.style.color= "#C18A25"
    }
    else(
        num.style.color= "#29335C"
    )
    if(i==4){
        num.innerHTML= resposta 
        img.style.backgroundImage= "url(final2.png)"

    }
    if(i>4){
        h2.innerHTML= "Recarregue a página para tentar novamente"
        num.style.display= "none"

    }
    
}



function mouseOver(){
   button.style.backgroundColor="#f3cd81"

    
}

function mouseOut(){
    button.style.backgroundColor="#654400"

}

