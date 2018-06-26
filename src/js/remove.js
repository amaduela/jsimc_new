var ginasta = document.querySelectorAll(".ginasta");

ginasta.forEach(function (ginasta) {
	ginasta.addEventListener("dbclick", function () {
		console.log("Clicked!");
	});
});