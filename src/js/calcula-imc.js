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
	if (peso >= 0 && peso <= 100) {
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