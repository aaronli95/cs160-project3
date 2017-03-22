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
	        var id = getParameterByName('id');
        	var row1 = $("<p>").append($("<p>").html(recipes[id]["RecipeName"]));
			$("tbody.information").append(row1);
        	var row2 = $("<p>").append(recipes[id]["Ingredients"]);
			$("tbody.ingredients").append(row2);

			function getParameterByName(name, url) {
			    if (!url) {
			      url = window.location.href;
			    }
			    name = name.replace(/[\[\]]/g, "\\$&");
			    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			        results = regex.exec(url);
			    if (!results) return null;
			    if (!results[2]) return '';
			    return decodeURIComponent(results[2].replace(/\+/g, " "));
			}
		});

		$("#Home").click(function() {
			window.location.href ="../templates/index.html";
		});

		$("#Back").click(function() {
		    window.history.back();
		});

		// Need to implement search button
	});
});