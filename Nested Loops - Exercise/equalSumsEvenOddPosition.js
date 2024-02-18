function equalSumsEvenOddPosition(input){
    let startNumber=Number(input[0]);
    let endNumber=Number(input[1]);
    let printLine="";
    for(let i=startNumber;i<=endNumber;i++){
        let currentNumber=""+i;
        let oddSum=0;
        let evenSum=0;
        for(let j=0;j<currentNumber.length;j++){
            let currentDigit=Number(currentNumber.charAt(j));
            if(j%2===0){
                evenSum+=currentDigit;
            }else {
                oddSum+=currentDigit;
            }
        }
        if(oddSum===evenSum){
            printLine+=` ${i}`;
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["100001",
"100050"])