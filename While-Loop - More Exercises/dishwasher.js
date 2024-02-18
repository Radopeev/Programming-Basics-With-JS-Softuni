function dishwasher(input){
    let index=0;
    let bottle=Number(input[index]);
    index++
    let command=input[index];
    index;
    let detergent=bottle*750;
    let numberOfDished=0;
    let numberOfPots=0;
    while(command!=="End"){
        let itemsForCleaning=Number(command);
        if(index%3!==0){
            detergent=detergent-itemsForCleaning*5;
            numberOfDished+=itemsForCleaning;
        }else {
            numberOfPots+=itemsForCleaning;
            detergent=detergent-itemsForCleaning*15;
        }
        if(detergent<0){
            break;
        }
        index++;
        command=input[index];
        
    }
    if(detergent>=0){
        console.log(`Detergent was enough!`);
        console.log(`${numberOfDished} dishes and ${numberOfPots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`)
    }else {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`)
    }
}
dishwasher(["1","10","15","10","12","13","30"])