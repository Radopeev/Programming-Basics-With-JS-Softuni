function vacation(input){
    let budget=Number(input[0]);
    let season=input[1];
    let location;
    let place;
    if(budget<=1000){
        place="Camp";
        if(season==="Summer"){
            location="Alaska";
            budget=budget*0.65;
        }
        else if(season==="Winter"){
            location="Morocco";
            budget=budget*0.45;
        }
    }else if(budget<=3000){
        place="Hut";
        if(season==="Summer"){
            location="Alaska";
            budget=budget*0.8;
        }
        else if(season==="Winter"){
            location="Morocco";
            budget=budget*0.60;
        }
    }else {
        place="Hotel";
        if(season==="Summer"){
            location="Alaska";
            budget=budget*0.9;
        }
        else if(season==="Winter"){
            location="Morocco";
            budget=budget*0.9;
        }
    }
    console.log(`${location} - ${place} - ${budget.toFixed(2)}`)
}
vacation(["800",
"Summer"])