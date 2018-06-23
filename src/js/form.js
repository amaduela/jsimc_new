var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event) {
	event.preventDefault();

	var form = document.querySelector('#formAdd');

	var paciente = getData(form);
	// console.log(paciente);
	var pacienteTr = buildTr(paciente);
	
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
});

function getData (form) {
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function buildTr (paciente) {
	var tr = document.createElement("tr");
	tr.classList.add("paciente");

	tr.appendChild(buildTd(paciente.nome, "info-nome"));
	tr.appendChild(buildTd(paciente.peso, "info-peso"));
	tr.appendChild(buildTd(paciente.altura, "info-altura"));
	tr.appendChild(buildTd(paciente.gordura, "info-gordura"));
	tr.appendChild(buildTd(paciente.imc, "info-imc"));

	return tr;
}

function buildTd (data, cssClass) {
	var td = document.createElement("td");
	td.textContent = data;
	td.classList.add(cssClass);

	return td;
}