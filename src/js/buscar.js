var addButton = document.querySelector("#buscar");

addButton.addEventListener("click", function () {
	console.log('loading ...');

	var xhr = new new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function () {
		var result = xhr.responseText;
		console.log(result);
	});
	xhr.send();
});