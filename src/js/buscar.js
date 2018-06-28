var addButton = document.querySelector("#buscar");

addButton.addEventListener("click", function () {
	console.log('loading ...');

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/psacientes");

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