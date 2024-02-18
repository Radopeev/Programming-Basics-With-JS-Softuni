function fishland(input){
    let mackerelPrice=Number(input[0]);
    let toyPrice=Number(input[1]);
    let kgBonito=Number(input[2]);
    let kgScad=Number(input[3]);
    let kgMussels=Number(input[4]);
    let priceBonito=(mackerelPrice*1.60)*kgBonito;
    let priceScad=(toyPrice*1.80)*kgScad;
    let priceMussels=kgMussels*7.50;
    let sum=priceBonito+priceScad+priceMussels;
    console.log(sum.toFixed(2));
}
fishland(["6.90",
"4.20",
"1.5",
"2.5",
"1"])