function logistics(input){
    let index=0;
    let numLoad=Number(input[index]);
    index++;
    let microbus=0;
    let truck=0;
    let train=0;
    let totalLoad=0;
    let money=0;
    for(let i=0; i<numLoad;i++){
        let cargo=Number(input[index]);
        index++;
        if(cargo<=3){
            microbus+=cargo;
            totalLoad+=cargo;
            money=money+cargo*200;
        }else if(cargo<=11){
            truck+=cargo;
            totalLoad+=cargo;
            money+=cargo*175;
        }else {
            train+=cargo;
            totalLoad+=cargo;
            money+=cargo*120;
        }
    }
    let microbusProcent=microbus/totalLoad*100;
    let truckProcent=truck/totalLoad*100;
    let trainProcent=train/totalLoad*100;
    let averageTone=money/totalLoad;
    console.log(`${averageTone.toFixed(2)}`);
    console.log(`${microbusProcent.toFixed(2)}%`);
    console.log(`${truckProcent.toFixed(2)}%`);
    console.log(`${trainProcent.toFixed(2)}%`);
}
logistics(["4","1","5","16","3"])