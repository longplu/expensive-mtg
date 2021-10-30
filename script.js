// Constant Variables
const BASE_URL= 'https://api.scryfall.com/cards/search';

// Application State Variables
let apiData;

// Cached Element References
const $main = $('main');

// Event Listeners

// Functions
getData();


function getData(){
    
    $.ajax(BASE_URL + '?order=usd&q=usd>=1000')
    .then(function(data){
        apiData = data;
        // console.log(apiData.data[0].name);
        for (const card in apiData.data){console.log(apiData.data[card].prices.usd)};
        // console.log(apiData.data[0].image_uris.normal)
        // render();
    }, function(error){

    });

    
}

function render(){


    // const imgCards = apiData.map(function(imgCard){
    //     return `
    //         <article style="background-image: url(${imgCard.imageuris.normal})">
    //         </article>;
    //     `
    // });
    // $main.html(`<section>${imgCards}</section>`);

}
