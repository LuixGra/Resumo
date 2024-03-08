//item = document.createElement('option')
//declarando variaveis
var num = window.document.getElementById('num');
var n = Number(num.value);
var tab = window.document.getElementById('tabres')
var res = window.document.getElementById('res');







//funções
function adcionar(){
    if(num.value.length==0){
        alert("ERRO! Preencha os dados corretamente");
    }
    else{
        var item = document.createElement('option');
        item.text = `Valor: ${num.value}`;
        tab.appendChild(item);
    }
    
    
}



function finalizar(){
    var leng = tab.innerText;
    leng = leng.length;

    res.innerHTML += leng;

    for(var i = 0; i<leng;i++){
        res.innerHTML += `${tab.innerText[i]}`;

    } 


}