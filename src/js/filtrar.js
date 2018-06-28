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