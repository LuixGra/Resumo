var tarefa = window.document.getElementById('tarefa');
var lista = window.document.getElementById('areaLista');
var btnAdd = window.document.getElementById('add')

var contador = 0;

function adcionar(){
    if(tarefa.value.length==0){
        alert("ERRO! Digite uma tarefa válida");
    }
    else{
        contador++;
        var novoItem = `
        <div class="item" id="${contador}">
            <div class="item-icone" onclick="marcarTarefa(${contador}) ">
                <input type="radio" id="icone">
            </div>
            <div class="item-nome">
                ${tarefa.value}

            </div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})">Deletar</button>
            </div>
        </div>`
    
    lista.innerHTML += novoItem;
    
    tarefa.value="";
    tarefa.focus();

    
    
    }
}

function deletar(id){
    var t = window.document.getElementById(id);
    t.remove();
        
}

function marcarTarefa(id){
    var t = window.document.getElementById(id);
    var classe = t.getAttribute('class');
    if(classe=="item"){
        t.classList.add('clicado');
    }
    else{
        t.classList.remove('clicado');
    }
}

tarefa.addEventListener("keydown", function (event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click()

    }
})