function cleverLily(input){
    let age=Number(input[0]);
    let p=Number(input[1]);
    let toyPrice=Number(input[2]);
    let money=0;
    let toyCounter=0;
    let currentMoney=10;
    for(let i=1; i<=age; i++){
        if(i%2!==0){
            toyCounter++;
        }else if(i%2===0){
            money+=currentMoney;
            currentMoney+=10;
            money-=1;
        }
    }
    let toyMoney=toyCounter*toyPrice;
    let totalMoney=money+toyMoney;
    let diff=Math.abs(totalMoney-p);
    if(totalMoney>=p){
        console.log(`Yes! ${diff.toFixed(2)}`)
    }else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
cleverLily(["10",
"170.00",
"6"])