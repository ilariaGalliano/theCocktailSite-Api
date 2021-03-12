/*
* Data from Json detailed page
*/

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail')
    .then(response => response.json())
    .then(json => {
        classFetch = json;
        console.log('fetch', classFetch);

        
    function drinkTemplate(drink){
        return `
        <div class="drinks">
            <ul class="list-drinks pt-2 pb-2">
                <li class="list-unstyled">
                    <h3>Drink Name: ${drink.strDrink} (${drink.strCategory}) </h3> 
                    <img src="${drink.strDrinkThumb}">
                    <p class="pt-3">Instruction:  ${drink.strInstructions}</p>
                    <p>Istruzioni:  ${drink.strInstructionsIT}</p>
                </li>
            </ul>
        </div>
        `
    }

    document.getElementById('drinks').innerHTML = `
        ${classFetch.drinks.map(drinkTemplate).join('')}
    `

    document.getElementById('app').innerHTML = `
    <h2 class="text-center">Number of cocktails: ${classFetch.drinks.length}  
    <a class="btn" href="../index.html" target="_blank">
       HOME <i class="fas fa-cocktail"></i>
    </a>
    </h2>
    `;
})
.catch(function (err) {
    // If an error occured, you will catch it here 
});

    
/* Code to fix

document.getElementById('app').innerHTML = `<h1>Number of cocktails: ${classFetch.drinks.length} </h1>
${classFetch.drinks.map((drink)=> {
    return `
    <h2>Drink Name: ${drink.strDrink} (${drink.strCategory}) </h2>
    <div class="drinks">
        <img width="200" src="${drink.strDrinkThumb}">
    </div>
    `
}).join('-')}
    <p> subtitle</p>
    <p> description</p>
`; 

<div class="drinks"> 
            <h2>Drink Name: ${drink.strDrink} (${drink.strCategory}) </h2> 
            <p class="pt-3">Instruction:  ${drink.strInstructions}</p>
            <img class="img-responsive" src="${drink.strDrinkThumb}">
            <p>Istruzioni:  ${drink.strInstructionsIT}</p>
        </div>

// to remove comas - use method join
// map return a new array , creo una funzione anonima 

  /* ${classFetch.drinks.map(drinkTemplate).join('')}
        <p>Ilaria</p> 

*/