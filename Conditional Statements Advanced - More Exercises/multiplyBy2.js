function multiplyBy2(input){
    let index=0;
    let n=Number(input[index]);
    index++;
    let flag=false;
    while(n>=0){
        console.log("Result: "+(2*n).toFixed(2));
        n=Number(input[index]);
        index++;
        if(n<0){
            flag=true;
            break;
        }
    }
    if(flag){
        console.log(`Negative number!`)
    }
}
multiplyBy2(["12","43.2144","12.3","543.23","-20"])