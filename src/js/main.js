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

	var campoIMC = paciente.querySelector('.inf-imc');

	if (_peso <= 0 || _peso >= 600) {
		campoIMC.textContent = "Peso inválido!";
		paciente.classList.add('paciente-invalido');
	}else if (_altura <= 0 || _altura >= 3.0) {
		campoIMC.textContent = "Altura inválida!";
		paciente.classList.add('paciente-invalido');
	}else {
		var imc = _peso / (_altura * _altura);
		campoIMC.textContent = imc.toFixed(2);
	}
}