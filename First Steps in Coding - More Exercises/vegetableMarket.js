function vegetableMarket(input){
    let priceVegetable=Number(input[0]);
    let priceFruit=Number(input[1]);
    let kgVegetable=Number(input[2]);
    let kgFruit=Number(input[3]);
    let totalPriceVegetable=priceVegetable*kgVegetable;
    let totalPriceFruit=priceFruit*kgFruit;
    let totalPrice=totalPriceFruit+totalPriceVegetable;
    console.log((totalPrice/1.94).toFixed(2));
}