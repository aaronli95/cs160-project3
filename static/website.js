$(document).ready(function(){	

	//Default so only the first page of the side bar is filled while the others are still transparent until clicked
	$(function(){
		$(document).ready(function(){
		    var theUrl = "https://h89jpk0yjl.execute-api.us-east-1.amazonaws.com/prod/RecipeUpdate?TableName=Recipes"
	        var recipes = [];
	        var ingredientsImg = "<img class='ingredients button' src='../static/harvest.png'/>";
			var recipeImg = "<img class='recipes button' src='../static/recipe.png'/>";
	        $.ajaxSetup({
				async: false
			});

	        $.get(theUrl, function(data, status){
	            console.log(data);
	            recipes = data["Items"];
	            console.log(recipes[0]);
	        });
	        console.log(recipes);
	        for (var i = 0; i < recipes.length; i++) {
	        	var row = $("<tr>").append("<img class='recipes' style='height:64px' src=" + recipes[i]["URL"] + "/>");
				row.append($("<td>").html(recipes[i]["RecipeName"]));
				row.append("<td>" + ingredientsImg + "</td>");
				row.append("<td>" + recipeImg + "</td>");
				$("tbody").append(row);
			}

			// @Aaron Your part goes here
			$(".ingredients").click(function() {
				console.log("Clicking Ingredients Button");
				window.location.href ="../templates/ingredientPage.html";
			});

			// @Carmen Your part goes here
			$(".recipes").click(function() {
				console.log("Clicking Recipes Button");
				window.location.href="../templates/displayRecipePage.html";
			});
		});

		$("#Add").click(function() {
			window.location.href ="../templates/recipePage.html";
		});

		$(".recipes").click(function() {
			console.log("Clicking Recipes BUtton");
		});
	});
});