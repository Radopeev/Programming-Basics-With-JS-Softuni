function accountBalance(input){
    let balance=0;
    let index=0;
    let currentElement=input[index];
    while(currentElement!=="NoMoreMoney"){
        let elementAsNumber=Number(currentElement)
        if(elementAsNumber<0){
            console.log(`Invalid operation!`);
            break
        }
        balance+=elementAsNumber;
        console.log(`Increase : ${elementAsNumber.toFixed(2)}`);
        index++;
        currentElement=input[index];
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])