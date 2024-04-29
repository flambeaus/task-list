let tarefasDia = [
    "Escovar os dentes",
    "Arrumar a cama",
    "Passar aspirador",
    "Limpar o quarto",
    "Ir ao mercado",
    "Dar comida pros cachorros"
];

let tarefasNoite = [
    "Escovar os dentes",
    "Tomar banho",
    "Estudar",
    "Fazer a janta"
];

let dropdown = document.getElementById("tarefasDropdownDia");
let dropdownnoite = document.getElementById("tarefasDropdownNoite");

let objListaGenericoDia = $(".objListaD");
objListaGenericoDia.remove();
let objListaGenericoNoite = $(".objListaN");
objListaGenericoNoite.remove();

/* LISTAS */
function listarTarefasDia (tarefasDia) {
    
    $(".tarefasDia").empty();

    tarefasDia.forEach(element => {
        let objAtual = objListaGenericoDia.clone();
        objAtual.text(element);
        objAtual.appendTo(".tarefasDia");
    });

}

function listarTarefasNoite (tarefasNoite) {
    
    $(".tarefasNoite").empty();
    tarefasNoite.forEach(element => {
        let objAtual = objListaGenericoNoite.clone();
        objAtual.text(element);
        objAtual.appendTo(".tarefasNoite");
    });

}

listarTarefasDia(tarefasDia);
listarTarefasNoite(tarefasNoite);

/* PRESSIONAR BOTÕES DE ADD E REMOVE + ADICIONAR E REMOVER ITENS */

$(".button").click(function () {
    $("#tarefasDropdownDia").empty();
    $("#tarefasDropdownNoite").empty();
    let option = $(this).text();
    $("#popup").show();
    
    if (option === "ADICIONAR") {
        $("#addForm").removeClass("sumiu");
        $("#removeForm").addClass("sumiu");
    } else if (option === "REMOVER") {
        $("#addForm").addClass("sumiu");
        $("#removeForm").removeClass("sumiu");

        tarefasNoite.forEach(function(tarefa) {
            let option = document.createElement("option");
            option.value = tarefa; 
            option.text = tarefa;
            tarefasDropdownNoite.add(option);
        });

        tarefasDia.forEach(function(tarefa) {
            let option = document.createElement("option");
            option.value = tarefa; 
            option.text = tarefa;
            tarefasDropdownDia.add(option);
        });
    }
});

$("#closePopup").click(function () {
    $("#popup").hide();
});

$("#addForm").submit(function (event) {
    event.preventDefault();

    let novaTarefa = $("#tarefas").val();
    let periodoTarefa = $('input[name="periodo"]:checked').val();

    if (periodoTarefa === "dia") {
        tarefasDia.push(novaTarefa);
        listarTarefasDia(tarefasDia);
    }
    if (periodoTarefa === "noite") {
        tarefasNoite.push(novaTarefa);
        listarTarefasNoite(tarefasNoite);
    }

    popup.style.display = 'none';

});

/* DROPLIST E REMOÇÃO */
function removerTarefaDia() {
    let indiceSelecionado = dropdown.selectedIndex;

    if (indiceSelecionado !== -1) {
      let tarefaRemovida = tarefasDia.splice(indiceSelecionado, 1);
      
      tarefasDia.slice(tarefasDia.indexOf(tarefaRemovida), 1);
      listarTarefasDia(tarefasDia);
      dropdown.remove(indiceSelecionado);
    }
}

function removerTarefaNoite() {
    let indiceSelecionadoN = dropdownnoite.selectedIndex;

    if (indiceSelecionadoN !== -1) {
      let tarefaRemovida = tarefasNoite.splice(indiceSelecionadoN, 1);
      
      tarefasNoite.slice(tarefasNoite.indexOf(tarefaRemovida), 1);
      listarTarefasNoite(tarefasNoite);
      dropdownnoite.remove(indiceSelecionadoN);
    }
}

$(".popup-button2").click(function () {
    $("#tarefasDropdownDia").empty();
    $("#tarefasDropdownNoite").empty();
    popup.style.display = 'none';
});