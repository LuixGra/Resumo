function calcular(){
    var n = window.document.getElementById('txtnum');
    var res = window.document.getElementById('res');
    var num = Number(n.value);


    res.innerHTML = '';
    for(var i = 0; i<10; i++){
        res.innerHTML += `${num} X ${i} = ${num*i}<br>`
    }

}