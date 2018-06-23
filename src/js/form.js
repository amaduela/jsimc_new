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
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	var nomeTd = buildTd(paciente.nome, "info-nome");
	var pesoTd = buildTd(paciente.peso, "info-peso");
	var alturaTd = buildTd(paciente.altura, "info-altura");
	var gorduraTd = buildTd(paciente.gordura, "info-gordura");
	var imcTd = buildTd(paciente.imc, "info-imc");

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;
}

function buildTd (data, cssClass) {
	var td = document.createElement("td");
	td.textContent = data;
	nomeTd.classList.add(cssClass);

	return td;
}