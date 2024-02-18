function reportSystem(input){
    let index=0;
    let neededMoney=Number(input[index]);
    index++;
    let command=input[index];
    index++;
    let money=0;
    let cashPayers=0;
    let cardPayers=0;
    let cashMoney=0;
    let cardMoney=0;
    while(command!=="End"){
        let num=Number(command);
        if(index%2===0){
            if(num>100){
                console.log(`Error in transaction!`);
            }else {
                console.log(`Product sold!`);
                cashPayers++;
                cashMoney+=num;
                money+=num;
            }
        }else {
            if(num<10){
                console.log(`Error in transaction!`);
            }else {
                console.log(`Product sold!`);
                cardPayers++;
                cardMoney+=num;
                money+=num;
            }
        }
        if(money>=neededMoney){
            let avgCash=cashMoney/cashPayers;
            let avgCard=cardMoney/cardPayers;
            console.log(`Average CS: ${avgCash.toFixed(2)}`);
            console.log(`Average CC: ${avgCard.toFixed(2)}`);
            break;
        }
        command=input[index];
        index++;
    }
    if(money<neededMoney){
        console.log(`Failed to collect required money for charity.`)
    }
}
reportSystem(["500","120","8","63","256","78","317"])