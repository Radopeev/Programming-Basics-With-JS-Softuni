function journey(input){
    let budget = Number(input[0]);
    let season=input[1];
    let typeOfJourney;
    let price=0;
    let destination;
    if(budget<=100){
        if(season==="summer"){
            price=budget*0.3;
            typeOfJourney="Camp";
        }
        else if(season==="winter"){
            price=budget*0.7;
            typeOfJourney="Hotel";
        }
        destination="Bulgaria";
    }
    else if(budget<=1000){
        if(season==="summer"){
            price=budget*0.4;
            typeOfJourney="Camp";
        }
        else if(season==="winter"){
            price=budget*0.8;
            typeOfJourney="Hotel";
        }
        destination="Balkans";
    }
    else {
        price=budget*0.9;
        typeOfJourney="Hotel";
        destination="Europe";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfJourney} - ${price.toFixed(2)}`);
}
journey(["75", "winter"])