function bonusScore(input){
    let num=Number(input[0]);
    let bonusPoints=0.0;
    if(num<=100){
        bonusPoints=bonusPoints+5;
    }
    else if(num<=1000){
        bonusPoints=num*0.2;
    }
    else {
        bonusPoints=num*0.1; 
    }
    if(num%2===0){
        bonusPoints=bonusPoints+1;
    }
    else if(num%10===5){
        bonusPoints=bonusPoints+2;
    }
    console.log(bonusPoints)
    console.log(num+bonusPoints);
}
bonusScore(["175"])