var botaoAdicionar = document.querySelector("#adicionar-ginasta");
botaoAdicionar.addEventListener('click', function(event) {
	event.preventDefault();

	var form = document.querySelector('#formAdd');

	var ginasta = getData(form);
	// console.log(ginasta);

	var errors = validaGinasta(ginasta);
	var mensagemErro = document.querySelector("#error");
	if (errors.length > 0) {
		for (var i = 0; i < errors.length ; i++) {
			var li = document.createElement("li");
			li.textContent = errors[i];
			li.classList.add('text-danger');
			mensagemErro.appendChild(li);
		}
		return;
	}
	
	addOnTable(ginasta);

	form.reset();
});

function getData (form) {
	var ginasta = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return ginasta;
}

function addOnTable (ginasta) {
	var ginastaTr = buildTr(ginasta);
	var tabela = document.querySelector("#tabela-ginasta");
	tabela.appendChild(ginastaTr); 
}

function buildTr (ginasta) {
	var tr = document.createElement("tr");
	tr.classList.add("ginasta");

	tr.appendChild(buildTd(ginasta.nome, "info-nome"));
	tr.appendChild(buildTd(ginasta.peso, "info-peso"));
	tr.appendChild(buildTd(ginasta.altura, "info-altura"));
	tr.appendChild(buildTd(ginasta.gordura, "info-gordura"));
	tr.appendChild(buildTd(ginasta.imc, "info-imc"));

	return tr;
}

function buildTd (data, cssClass) {
	var td = document.createElement("td");
	td.textContent = data;
	td.classList.add(cssClass);

	return td;
}

function validaGinasta (ginasta) {
	var st = true;
	var erros = [];
	if (ginasta.nome.length == 0) {
		erros.push("Por favor preencha o campo nome!");
		st = false;
	}

	if (ginasta.altura.length == 0) {
		erros.push("Por favor preencha o campo altura!");
		st = false;
	}

	if (ginasta.peso.length == 0) {
		erros.push("Por favor preencha o campo peso!");
		st = false;
	}

	if (ginasta.gordura.length == 0) {
		erros.push("Por favor preencha o campo gordura!");
		st = false;
	}

	if (st) {
		if(!validaPeso(ginasta.peso)){
			erros.push("Peso é Invalido!");
		}
		if(!validaAltura(ginasta.altura)){
			erros.push("Altura é Invalida!");
		}
	}

	return erros;
}
var ginastas = document.querySelectorAll('.ginasta');

for (var i = 0; i < ginastas.length; i++) {
	var ginasta = ginastas[i];

	var nome = ginasta.querySelector('.inf-nome');
	var _nome = nome.textContent;

	var peso = ginasta.querySelector('.inf-peso');
	var _peso = peso.textContent;

	var altura = ginasta.querySelector('.inf-altura');
	var _altura = altura.textContent;

	var gordura = ginasta.querySelector('.inf-gordura');
	var _gordura = gordura.textContent;

	var tdImc = ginasta.querySelector('.inf-imc');
	var pesoValido = validaPeso(_peso);
	var alturaValida = validaAltura(_altura);

	if (!pesoValido) {
		tdImc.textContent = "Peso inválido!";
		ginasta.classList.add('paciente-invalido');
	}
	if (!alturaValida) {
		tdImc.textContent = "Altura inválida!";
		ginasta.classList.add('paciente-invalido');
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
var tabela = document.querySelector("table");

tabela.addEventListener("dbclick", function (event) {
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function () {
		event.target.parentNode.remove();
	}, 500);
});
var filter = document.querySelector("#filtrar-tabela");

filter.addEventListener("input", function () {
	console.log(this.value);
	var ginastas = document.querySelectorAll(".ginasta");

	if (this.value > 0) {
		for(var i = 0; i < ginastas.length; i++){
			var ginasta = ginastas[i];
			tdNome = ginasta.querySelector(".inf-nome");
			var nome = tdNome.textContent;

			if (nome != this.value) {
				ginasta.classList.add('invisible');
			}else {
				ginasta.classList.remove('invisible');
			}
		}
	}else {
		for(var i = 0; i < ginastas.length; i++){
			var ginasta = ginastas[i];
			ginasta.classList.remove('invisible');
		}
	}
});
var addButton = document.querySelector("#buscar");

addButton.addEventListener("click", function () {
	console.log('loading ...');

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function () {
		var erros = [];
		var errorAjax = document.querySelector("#error-ajax");
		if (xhr.status == 200) {
			errorAjax.classList.add('invisible');
			var result = xhr.responseText;
			var ginastas = JSON.parse(result);

			ginastas.forEach(function (element) {
				addOnTable(element);
			});
		}else {
			console.log(xhr.status);
			console.log(xhr.responseText);
			errorAjax.classList.remove('invisible');
			errorAjax.textContent = xhr.responseText;
		}
	});
	xhr.send();
});