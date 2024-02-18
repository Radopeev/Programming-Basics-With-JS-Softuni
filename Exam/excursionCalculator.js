function excursionCalculator(input){
    let people=Number(input[0]);
    let season=input[1];
    let sum=0;
    if(people<=5){
        switch(season){
            case "spring":sum+=people*50;break;
            case "summer":sum+=people*48.50*0.85;break;
            case "autumn":sum+=people*60;break;
            case "winter":sum+=people*86*1.08;break;
        }
    }else {
        switch(season){
            case "spring":sum+=people*48;break;
            case "summer":sum+=people*45*0.85;break;
            case "autumn":sum+=people*49.50;break;
            case "winter":sum+=people*85*1.08;break;
        }
    }
    console.log(`${sum.toFixed(2)} leva.`);
}
excursionCalculator(["10",
"summer"])