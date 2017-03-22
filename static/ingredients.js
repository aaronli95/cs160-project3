$(document).ready(function(){	
	$(function(){
		$(document).ready(function(){
			document.getElementById("data").innerHTML = localStorage.getItem("splitData");
			document.getElementById("recName").innerHTML = localStorage.getItem("name") + " Ingredients";

			// console.log(document.getElementById("data").innerHTML);
			var splitIngredients = document.getElementById("data").innerHTML.split(",");
			// console.log(splitIngredients);
			for (var i = 0; i < splitIngredients.length; i++) {
				$("#father").append("<div class='font centerDiv' style='font-size:20px; font-weight:bold'>" + splitIngredients[i] + "</div>");
			}
		});

		$(".back").click(function() {
			window.location.href ="../templates/index.html";
		});
	});
});