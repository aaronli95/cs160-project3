$(document).ready(function(){	

	//Default so only the first page of the side bar is filled while the others are still transparent until clicked
	$(function(){
		$(document).ready(function(){
			// for (int i = 0; i < 20; i++) {
			// 	var ingredientRow = $("<tr>").append("hi");
			// 	var recipeRow =$("<tr>").append("hi");
			// 	$("#ingredients-table").append(ingredientRow);
			// 	$("#recipes-table").append(recipeRow);
			// }



			$("#Cancel").click(function() {
				window.location.href="../templates/index.html";
			});

			$("#AddRecipe").click(function() {
				$.ajax({
          			url: theUrl,
          			type: 'POST',
          			data: JSON.stringify({"TableName": "Recipes", "Item": {"Directions":"sucking myself off", "Ingredients":"eddy is a faggot", "RecipeName":"carmen sucks nuts"}}),
          		success: function(data) {
            		alert("POSTed successfully");
            		},
            		error: function(xhr, ajaxOptions, thrownError) {
                		alert("Error");
            		}
        		});
				window.location.href="../templates/index.html";
			});
		});
	});
});