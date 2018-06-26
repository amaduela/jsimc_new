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