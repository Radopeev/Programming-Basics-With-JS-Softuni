function equalPairs(input){
    let index=0;
    let n=Number(input[index]);
    index++;
    let currentSum=0;
    let previousSum=0;
    let diff=0;
    for(let i=1;i<=n;i++){
        if(i===1){
            let firstNum=Number(input[index]);
            index++;
            let secondNum=Number(input[index]);
            index++;
            previousSum=firstNum+secondNum;
        }
        else{
            let firstNum2=Number(input[index]);
            index++;
            let secondNum2=Number(input[index]);
            index++;
            currentSum=firstNum2+secondNum2;
            if(Math.abs(currentSum-previousSum)>diff){
                diff=Math.abs(currentSum-previousSum);
            }
            previousSum=currentSum;
        }
        
    }
    if(diff>0){
        console.log(`No, maxdiff=${diff}`);
    }else {
        console.log(`Yes, value=${previousSum}`);
    }
}
equalPairs(["3","1","2","0","3","4","-1"])