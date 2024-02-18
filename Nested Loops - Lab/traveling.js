function travelling(input){
    let index=0;
    let destination=input[index];
    index++;
    let savedMoney=0;
    while(destination!=="End"){
        let needMoney=Number(input[index]);
        index++;
        while(needMoney>=savedMoney){
            let money=Number(input[index]);
            index++;
            savedMoney+=money;
            if(savedMoney>=needMoney){
                console.log(`Going to ${destination}!`);
            }
        }
        destination=input[index];
        index++;
        savedMoney=0;
    }
}
travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
