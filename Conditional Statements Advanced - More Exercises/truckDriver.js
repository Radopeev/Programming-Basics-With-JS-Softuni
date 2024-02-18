function truckDriver(input){
    let season=input[0];
    let km=Number(input[1]);
    let salary=0;
    if(km<=5000){
        switch(season){
            case "Spring":
            case "Autumn":
                salary=km*4*0.75;break;
            case "Summer":salary=km*4*0.90;break;
            case "Winter":salary=km*4*1.05;break;
        }
    }else if(km<=10000){
        switch(season){
            case "Spring":
            case "Autumn":
                salary=km*4*0.95;break;
            case "Summer":salary=km*4*1.1;break;
            case "Winter":salary=km*4*1.25;break;
        }
    }else if(km<=20000){
        salary=km*1.45*4;
    }
    let totalSalary=salary*0.9;
    console.log(`${totalSalary.toFixed(2)}`)
}
