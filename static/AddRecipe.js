$(document).ready(function(){	

	$(function(){
		$(document).ready(function(){
			var theUrl = "https://h89jpk0yjl.execute-api.us-east-1.amazonaws.com/prod/RecipeUpdate?TableName=Recipes"
			$("#Cancel").click(function() {
				window.location.href="../templates/index.html";
			});

			$("#AddRecipe").click(function() {
				var title = document.getElementById("newTitle");
				var img = document.getElementById("newImage");
				var ingredientsList = [];
				var directionsList = [];
				var ingString = "ing";
				var dirString = "dir";

				for (var i = 1; i < 19; i++) {
					var currentIng = document.getElementById(ingString + i.toString());
					var currentDir = document.getElementById(dirString + i.toString());
					ingredientsList.push(currentIng.value);
					directionsList.push(currentDir.value);
				}

				var resultIng = "";
				var resultDir = "";
				for (var i = 0; i < 18; i++) {
					if (ingredientsList[i] != "") {
						resultIng += ingredientsList[i];
						if (i != 17) {
							resultIng += "\n";
						}
					}
					if (directionsList[i] != "") {
						resultDir += directionsList[i];
						if (i != 17) {
							resultDir += "\n";
						}
					}
				}
				if (title.value == "" || img.value == "" || resultDir == "" || resultIng == "") {
					window.alert("Missing 1 or More Components Necessary for a New Recipe.");
				} else {
					$.ajaxSetup({
						async: false
					});
					$.ajax({
			        	url: theUrl,
			        	type: 'POST',
			        	data: JSON.stringify({"TableName": "Recipes", "Item": {"Directions":resultDir, "Ingredients":resultIng, "RecipeName":title.value, "URL":img.value}}),
			        	success: function(data) {
			        		alert("POSTed successfully");
			            },
			            error: function(xhr, ajaxOptions, thrownError) {
			                alert("Error");
			            }
			        });
			        window.location.href="../templates/index.html";
				}
			});
		});
	});
});