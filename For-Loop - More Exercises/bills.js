function bills(input){
    let index=0;
    let months=Number(input[index]);
    index++;
    let water=0;
    let internet=0;
    let other=0;
    let totalElectricity=0;
    let totalExpenses=0;
    for(let i=0;i<months;i++){
        let electricity=Number(input[index]);
        index++;
        totalElectricity+=electricity;
        water=months*20;
        internet=months*15;
        other+=((20+15+electricity)+(20+15+electricity)*0.2);
        totalExpenses+=water+internet+other+totalElectricity;
    }
    let averageExpenses=totalExpenses/months;
    console.log(`Electricity: ${totalElectricity.toFixed(2)}lv`);
    console.log(`Water: ${water.toFixed(2)}lv`);
    console.log(`Internet: ${internet.toFixed(2)}lv`);
    console.log(`Other: ${other.toFixed(2)}lv`);
    console.log(`Average: ${averageExpenses.toFixed(2)}lv`);
}
bills(["5","68.63","89.25","132.53","93.53","63.22"])