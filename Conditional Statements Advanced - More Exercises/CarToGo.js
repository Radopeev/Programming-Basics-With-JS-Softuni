function carToGo(input){
    let budget=Number(input[0]);
    let season=input[1];
    let typeOfCar;
    let priceOfCar=0;
    if(budget<=100){
        console.log("Economy class")
        if(season==="Summer"){
            typeOfCar="Cabrio";
            priceOfCar=budget*0.35;
            console.log(`${typeOfCar} - ${priceOfCar.toFixed(2)}`);
        }else if(season==="Winter"){
            typeOfCar="Jeep";
            priceOfCar=budget*0.65;
            console.log(`${typeOfCar} - ${priceOfCar.toFixed(2)}`);
        }
    }else if(budget>100 && budget<=500){
        console.log("Compact class");
        if(season==="Summer"){
            typeOfCar="Cabrio";
            priceOfCar=budget*0.45;
            console.log(`${typeOfCar} - ${priceOfCar.toFixed(2)}`);
        }else if(season==="Winter"){
            typeOfCar="Jeep";
            priceOfCar=budget*0.8;
            console.log(`${typeOfCar} - ${priceOfCar.toFixed(2)}`);
        }
    }else if(budget>500){
        console.log("Luxury class")
        typeOfCar="Jeep";
        priceOfCar=budget*0.9;
        console.log(`${typeOfCar} - ${priceOfCar.toFixed(2)}`);
    }
}
carToGo(["450",
    "Summer"	])