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