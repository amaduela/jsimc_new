var filter = document.querySelector("#filtrar-tabela");

filter.addEventListener("input", function () {
	console.log(this.value);
	var ginastas = document.querySelectorAll(".ginasta");

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
});