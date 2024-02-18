function transportPrice(input){
    let km=Number(input[0]);
    let dayOrNight=input[1];
    let taxiPrice=0;
    let busPrice=0;
    let trainPrice=0;
    if(km<20){
        switch(dayOrNight){
            case "day":taxiPrice=0.70+(0.79*km);break;
            case "night":taxiPrice=0.70+(0.90*km);break;
        }
        console.log(taxiPrice.toFixed(2));
    }else if(km<100){
        busPrice=0.09*km;
        console.log(busPrice.toFixed(2));
    }
    else {
        trainPrice=0.06*km;
        console.log(trainPrice.toFixed(2));
    }
}