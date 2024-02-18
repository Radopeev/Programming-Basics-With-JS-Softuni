function matchTickets(input){
    let budget=Number(input[0]);
    let category=input[1];
    let count=Number(input[2]);
    let transport=0;
    let priceTickets=0;
    if(count>=1 && count<=4){
        transport=budget*0.75;
    }else if(count>=5 && count<=9){
        transport=budget*0.60;
    }else if(count>=10 && count<=24){
        transport=budget*0.50;
    }else if(count>=25 && count<=49){
        transport=budget*0.4;
    }else if(count>=50){
        transport=budget*0.25;
    }
    budget=budget-transport;
    if(category==="VIP"){
        priceTickets=count*499.99;
    }
    else if(category==="Normal"){
        priceTickets=count*249.99;
    }
    let diff=Math.abs(budget-priceTickets);
    if(budget>=priceTickets){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
matchTickets(["1000",
"Normal",
"1"])