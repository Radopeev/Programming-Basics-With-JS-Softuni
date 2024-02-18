function fishingBoat(input){
    let budget=Number(input[0]);
    let season=input[1];
    let count=Number(input[2]);
    let price=0;
    switch(season){
        case "Spring":price=3000;break;
        case "Summer":price=4200;break;
        case "Autumn":price=4200;break;
        case "Winter":price=2600;break;
    }
    if(count<=6){
        price=price*0.90;
    }
    if(count>6 && count<=11){
        price=price*0.85;
    }
    if(count>11){
        price=price*0.75;
    }
    if(season!=="Autumn"){
        if(count%2===0){
            price=price*0.95;
        }
    }
    let diff=Math.abs(budget-price);
    if(budget>=price){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["3000",
"Summer",
"11"])