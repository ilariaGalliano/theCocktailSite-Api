/**
 * Data from Json 
 */

const btn = document.getElementById('btn');
const result = document.getElementById('result');
const img = document.getElementById('img');

let classFetch;
let list = '';
let images = '';
// Event on click
btn.addEventListener('click', ()=>{
    // Metodo Fetch
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail')
    .then(response => response.json())
    .then(json => {
        classFetch = json;
        console.log('fetch', classFetch);
        console.log('ArrayObject', classFetch.drinks);

        classFetch.drinks.forEach((element) => {
            console.log('drink name:' + element.strDrink);
            img.innerHTML = images +=  `
                <a href="pages/page2.html" target="_blank">
                    <img width="200" src="${element.strDrinkThumb}"/>
                </a>
            `
        });
        
    })
    .catch(function (err) {
        // If an error occured, you will catch it here
    });

});








   

