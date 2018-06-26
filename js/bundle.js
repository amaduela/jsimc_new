var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event) {
	event.preventDefault();

	var form = document.querySelector('#formAdd');

	var paciente = getData(form);
	// console.log(paciente);

	var error = validaPaciente(paciente);
	if (error.length > 0) {
		var mensagemErro = document.querySelector("#error");
		mensagemErro.textContent = error;
		return;
	}
	
	var pacienteTr = buildTr(paciente);

	
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	form.reset();
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

function validaPaciente (paciente) {
	if(!validaPeso(paciente.peso)){
		return "Peso é Invalido!";
	}else if(!validaAltura(paciente.altura)){
		return "Altura é Invalida!";
	}else{
		return "";
	}
}
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var nome = paciente.querySelector('.inf-nome');
	var _nome = nome.textContent;

	var peso = paciente.querySelector('.inf-peso');
	var _peso = peso.textContent;

	var altura = paciente.querySelector('.inf-altura');
	var _altura = altura.textContent;

	var gordura = paciente.querySelector('.inf-gordura');
	var _gordura = gordura.textContent;

	var tdImc = paciente.querySelector('.inf-imc');
	var pesoValido = validaPeso(_peso);
	var alturaValida = validaAltura(_altura);

	if (!pesoValido) {
		tdImc.textContent = "Peso inválido!";
		paciente.classList.add('paciente-invalido');
	}
	if (!alturaValida) {
		tdImc.textContent = "Altura inválida!";
		paciente.classList.add('paciente-invalido');
	}
	if (pesoValido && alturaValida) {
		var imc = calculaImc(_peso, _altura);
		tdImc.textContent = imc;
	}
}

function validaPeso (peso) {
	if (peso >= 0 && peso <= 1000) {
		return true;
	}else {
		return false;
	}
}

function validaAltura (altura) {
	if (altura >= 0 && altura <= 3.0) {
		return true;
	}else {
		return false;
	}
}

function calculaImc(peso, altura) {
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}