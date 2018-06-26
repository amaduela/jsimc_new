var tabela = document.querySelector("table");

tabela.addEventListener("dbclick", function (event) {
	event.target.parentNode.classList.add("fadeOut");
	event.target.parentNode.remove();
});