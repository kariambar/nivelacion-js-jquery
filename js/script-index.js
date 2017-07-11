
$(document).ready(function(){
//Con esta propiedad (hide) oculto el icono de flecha al cargar el sitio
	$(".icon-arrow-left-alt").hide(function(){ //
});

function printNews(print){ //funcion para añadir un nuevo contenido
	$(".pnews").append("NUEVAS RECETAS"); //append inserta el contenido al final del elemento
}

printNews(); // se llama a la function para poder imprimir 

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
});



/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(element) { //El método forEach() recorre el arreglo en este caso el  elemento recipesArray
    //console.log(element);
    if(element.highlighted == true){ // el if hace una condicion, en este caso verifica que el elemnto higlighted sea true
    	renderRecipe(element); // SI LA CONDICION anterior se cumple (en este caso si), invoco la siguiente funcion(renderRecipe)
    		}
    });

};

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe); 
	$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + recipe.title + '</span><span class="metadata-recipe"><span class="author-recipe">' + recipe.source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span> </span></span></span><img src="img/recipes/320x350/' + recipe.name + '.jpg"/></a>');

}
/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	activitiesArray.forEach(function renderActivity(recipe){
		if(activitiesArray.length > 0){
			$('.wrapper-message').hide();
		}
	});

	$('.list-activities').append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="img/acitivity/' + activitiesArray.userAvatar + 'class="image-avatar"></span><span class="meta"><span class="author">' + acitivitiesArray.userName + '</span> made <span class="recipe">' + acitivitiesArray.recipeName + '</span>:' + activitiesArray.text + '<span class="location">&mdash;' + activitiesArray.place + '</span></span></span><div class="bg-image" style="background-image: url(' + activitiesArray.image + ');"></div></a>')
}



/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


