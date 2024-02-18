function specialNumbers(input){
    let n=Number(input[0]);
    let count=0;
    let output="";
    for(let i=1111;i<=9999;i++){
        let currentNumber=""+i;
        for(let j=0;j<4;j++){
            let currentDigit=Number(currentNumber.charAt(j));
            if(n%currentDigit===0){
                count++;
            }
            if(count===4){
                output+=currentNumber+" ";
            }
        }
        count=0;
    }
    console.log(output);
}
specialNumbers(["3"])