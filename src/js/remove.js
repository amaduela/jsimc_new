var tabela = document.querySelector("table");

tabela.addEventListener("dbclick", function (event) {
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function () {
		event.target.parentNode.remove();
	}, 500);
});