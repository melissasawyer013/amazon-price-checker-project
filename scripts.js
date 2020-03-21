let itemName;
let basePrice; 
let blackFridayDeal;
let searchEngine;
let customerCompare;
let finalPrice = basePrice;


function onClick() {
    itemName = prompt("Enter the name of the item").trim().toLowerCase();
    basePrice = Number(prompt("What is the base price of the item?")).toFixed(2);
    blackFridayDeal = prompt("Is today Black Friday?").trim().toLowerCase();
    searchEngine = prompt("Did the purchaser find the product through a search engine?").trim().toLowerCase();
    customerCompare = prompt("Did the customer visit a comparison shopping site?").trim().toLowerCase();
    finalPrice = Number(basePrice);
}

function calculatePrice(name, startPrice, deal, search, compare, endPrice) {
    console.log(`${name} Base Price: $${startPrice}`);
    if ( deal === "yes" ) {
        endPrice = (endPrice *= 0.75);
        console.log(`Price after Black Friday savings: $${endPrice.toFixed(2)}`);
        alert(`Since it's Black Friday, we will reduce the price by 25%. \r\nNew Final Price: $${Number(endPrice.toFixed(2))}`);
    } else {
        console.log(`Not a Black Friday deal. No price change.`);
    }
    if ( search === "yes" ) {
        endPrice = (endPrice *= 1.01);
        console.log(`Price after search engine markup: $${endPrice.toFixed(2)}`);
        alert(`The purchaser came through a search engine, so we will increase the price by 1%. \r\nNew Final Price: $${Number(endPrice.toFixed(2))}`);
    } else {
        console.log(`Customer didn't use a search engine. No price change.`);
    }
    if ( compare === "yes" ) {
        endPrice = (endPrice *= 0.9);
        console.log(`Price after comparisons discount: $${endPrice.toFixed(2)} \r\n \r\n`);
        alert(`This purchaser is a comparison shopper, so we will reduce the price by 10%. \r\nNew Final Price: $${Number(endPrice.toFixed(2))}`);
    } else {
        console.log(`Customer did not compare item price. No price change.\r\n \r\n`);
    }
    alert (`Item Name: ${name} \r\nBase Price: $${startPrice} \r\nBlack Friday?: ${deal} \r\nFind through a search engine?: ${search} \r\nComparison site?: ${compare} \r\nFinal Price: $${Number(endPrice.toFixed(2))}`);
}

