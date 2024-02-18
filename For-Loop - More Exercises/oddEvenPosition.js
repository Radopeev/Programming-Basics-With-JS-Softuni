function oddEvenPosition(input){
    let n=Number(input[0]);
    let oddSum=0;
    let oddMin=1000000;
    let oddMax=-1000000;
    let evenSum=0;
    let evenMin=1000000;
    let evenMax=-1000000;
    for(let i=1;i<=n;i++){
        let num=Number(input[i]);
        if(i%2===0){
            evenSum+=num;
            if(num>evenMax){
                evenMax=num;
            }
            if(num<evenMin){
                evenMin=num;
            }
        }else if(i%2!==0){
            oddSum+=num;
            if(num>oddMax){
                oddMax=num;
            }
            if(num<oddMin){
                oddMin=num;
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if(oddMin===1000000){
        console.log(`No,`)
    }else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    if(oddMax===-1000000){
        console.log(`No,`);
    }else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if(evenMin===1000000){
        console.log(`No,`);
    }else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }
    if(evenMax===-1000000){
        console.log(`No,`);
    }else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}
oddEvenPosition(["6","2","3","5","4","2","1"])