var addButton = document.querySelector("#buscar");

addButton.addEventListener("click", function () {
	console.log('loading ...');

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function () {
		var result = xhr.responseText;
		var ginastas = JSON.parse(result);

		ginastas.forEach(function (element) {
			addOnTable(element);
		});
	});
	xhr.send();
});