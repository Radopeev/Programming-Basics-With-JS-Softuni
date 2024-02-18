function excursionSale(input){
    let index=0;
    let seaExcursion=Number(input[index]);
    index++;
    let mountainExcursion=Number(input[index]);
    index++;
    let command=input[index];
    index++;
    let profit=0;
    while(command!=="Stop"){
        if(command==="sea" && seaExcursion!==0){
            profit+=680;
            seaExcursion--;
        }else if(command==="mountain" && mountainExcursion!==0){
            profit+=499;
            mountainExcursion--;
        }
        
        if(seaExcursion===0 && mountainExcursion===0){
            break;
        }
        command=input[index];
        index++;
        if(seaExcursion===0){
            continue;
        }
        if(mountainExcursion===0){
            continue;
        }
    }
    if(seaExcursion===0 && mountainExcursion===0){
        console.log(`Good job! Everything is sold.`);
        console.log(`Profit: ${profit} leva.`); 
    }else {
        console.log(`Profit: ${profit} leva.`)
    }
}
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])