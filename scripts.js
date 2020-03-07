let itemName = prompt("Enter the name of the item");
const basePrice = prompt("What is the base price of the item?");
let blackFridayDeal = prompt("Is today Black Friday?");
let searchEngine = prompt("Did the purchaser find the product through a search engine?");
let customerCompare = prompt("Did the customer visit a comparison shopping site?");
let finalPrice = basePrice;

if (searchEngine === "yes") {
   finalPrice = (finalPrice *= 1.01);
   console.log(finalPrice);
   alert( "The purchaser came through a search engine, so we will increase the price by 1%. \r\n" + "New Final Price: " + "$" + finalPrice.toFixed(2) );
}
if (customerCompare === "yes") {
    finalPrice = (finalPrice *= 0.9);
    console.log(finalPrice);
    alert( "This purchaser is a comparison shopper, so we will reduce the price by 10%. \r\n" + "New Final Price: " + "$" + finalPrice.toFixed(2) );
}
if (blackFridayDeal === "yes") {
    finalPrice = (finalPrice *= 0.75);
    console.log(finalPrice);
    alert( "Since it's Black Friday, we will reduce the price by 25%. \r\n" + "New Final Price: " + "$" + finalPrice.toFixed(2) );
}
alert ( "Item Name: " + itemName + "\r\n" + "Base Price: $" + basePrice + "\r\n" + "Black Friday? " + blackFridayDeal + "\r\n" + "Find through a search engine? " + searchEngine + "\r\n" + "Comparison Site? " + customerCompare + "\r\n" + "Final Price: $" + finalPrice.toFixed(2) );