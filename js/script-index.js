
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
    	renderRecipe(element.highlighted); // SI LA CONDICION anterior se cumple (en este caso si), invoco la siguiente funcion(renderRecipe)
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
	$(".list-recipes").append("<a class='item-recipe' href='#'></a>");
	$(".item-recipe").append("<span class='attribution'</span>");
	$(".attribution").append("<span class='title-recipe'</span>");
	$(".title-recipe").append("<span class='metadata-recipe'</span>");
	$(".metadata-recipe").append("<span class='author-recipe'</span>");
	$(".metadata-recipe").append("<span class='bookmarks-recipe'</span>");
	$(".bookmarks-recipe").append("<span class='icon-bookmark'</span>");
	$(".item-recipe").append("<img src='URL DE LA IMAGEN'/>");
}
renderRecipe();


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


