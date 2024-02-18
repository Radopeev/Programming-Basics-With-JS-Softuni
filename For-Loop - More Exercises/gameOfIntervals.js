function gameOfIntervals(input){
    let index=0;
    let moves=Number(input[index]);
    index++;
    let totalPoints=0;
    let from0To9=0;
    let from10To19=0;
    let from20To29=0;
    let from30To39=0;
    let from40To50=0;
    let invalidNumbers=0;
    for(let i=0; i<moves ; i++){
        let num=Number(input[index]);
        index++;
        if(num>=0 && num<=9){
            totalPoints+=num*0.2;
            from0To9++;
        }else if(num>=10 && num<=19){
            totalPoints+=num*0.3;
            from10To19++;
        }else if(num>=20 && num<=29){
            totalPoints+=num*0.4;
            from20To29++;
        }else if(num>=30 && num<=39){
            totalPoints+=50;
            from30To39++;
        }else if(num>=40 && num<=50){
            totalPoints+=100;
            from40To50++;
        }else if(num>50 || num<0){
            totalPoints=totalPoints/2;
            invalidNumbers++;
        }
    }
    let p1=from0To9/moves*100;
    let p2=from10To19/moves*100;
    let p3=from20To29/moves*100;
    let p4=from30To39/moves*100;
    let p5=from40To50/moves*100;
    let p6=invalidNumbers/moves*100;
    console.log(`${totalPoints.toFixed(2)}`);
    console.log(`From 0 to 9: ${p1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${p2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${p3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${p4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${p5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${p6.toFixed(2)}%`);
}
gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"])