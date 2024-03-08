var agora = new Date();
var hora = agora.getHours();
var dia = agora.getDay();
var div1 = window.document.getElementById('relogio');
var b = window.document.getElementsByTagName('body')[0];


switch(dia){
    case 0:
        div1.innerHTML = "Domingo";
        break;
    case 1:
        div1.innerHTML = "Segunda";
        break;
    case 2:
        div1.innerHTML = "Terça";
        break;
    case 3:
        div1.innerHTML = "Quarta";
        break;
    case 4:
        div1.innerHTML = "Quinta";
        break;
    case 5:
        div1.innerHTML = "Sexta";
        
        b.style.background = "Red";
        break;
    case 6:
        div1.innerHTML = "Sabado";
        break;
}

div1.innerHTML +=`, ${hora} horas`;

function carregar(){
    var img = window.document.getElementById('foto');
    if(hora>=0 && hora<12){
        img.src = 'Amanhecer01.png';
    }
    else if(hora>=12 && hora<18){
        img.src = 'tarde.png';
    }
    else if(hora>19 || hora<=4){
        img.src = 'noite.png';

    }
    
}

if(hora<=3){
    b.style.background = "Grey";
    
}
else if(hora>3 && hora<9){
    b.style.background = "Yellow";
}
else if(horas>9 && horas<15){
    b.style.background = "Orange";
}
else if(horas>15 && horas<17){
    b.style.background = "Aquamarine";
}
else if(horas>17 && horas<22){
    b.style.background = "White";
}



