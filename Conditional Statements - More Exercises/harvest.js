function harvest(input){
    let areaVines=Number(input[0]);
    let kgGrapesPerSqMeter=Number(input[1]);
    let litersForSale=Number(input[2]);
    let workers=Number(input[3]);
    let harvest=kgGrapesPerSqMeter*areaVines;
    let grapesForWine=harvest*0.4;
    let totalWine=grapesForWine/2.5; 
    let diff=Math.abs(totalWine-litersForSale);
    if(litersForSale<=totalWine){ 
        let winePerWorker=diff/workers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`)
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`)
    }
    else {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
    }
}
harvest(["650",
"2",
"175",
"3"])