function sumOfTwoNumber(input){
    let start=Number(input[0]);
    let end=Number(input[1]);
    let magicNumber=Number(input[2]);
    let isMagicNumber=false;
    let totalCombinations=0;
    for(let i=start;i<=end;i++){
        for(let j=start;j<=end;j++){
          totalCombinations++;
          if(i+j===magicNumber){
              console.log(`Combination N:${totalCombinations} (${i} + ${j} = ${magicNumber})`);
              isMagicNumber=true;
              break;
          }
        }  
        if(isMagicNumber){
            break;
        }
    }
    if(!isMagicNumber){
        console.log(`${totalCombinations} combinations - neither equals ${magicNumber}`)
        }
}
sumOfTwoNumber(["1","10","5"])