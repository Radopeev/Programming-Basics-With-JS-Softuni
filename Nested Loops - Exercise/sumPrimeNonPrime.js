function sumPrimeNonPrime(input){
    let index=0;
    let command=input[index];
    let primeSum=0;
    let nonPrimeSum=0;
    let count=0;
    while(command!=="stop"){
        let num=Number(command);
        if(num<0){
            console.log(`Number is negative.`);
            index++;
            command=input[index];
            continue;
        }
        if(num===1){
            primeSum+=num;
            command=input[index];
            index++;
            continue;
        }
        let isPrime=true;
        for(let i=2;i<num;i++){
            if(num%i===0){
                isPrime=false;
            }
            
        }
        if(isPrime){
            primeSum+=num;
        }else {
            nonPrimeSum+=num;
        }
        index++;
        command=input[index];      
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["-1",
"83",
"33",
"30",
"20",
"stop"])