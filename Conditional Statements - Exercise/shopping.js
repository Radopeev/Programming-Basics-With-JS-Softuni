function shopping(input){
    let budget=Number(input[0]);
    let VGACount=Number(input[1]);
    let CPUCount=Number(input[2]);
    let RAMCount=Number(input[3]);
    let VGAPrice=VGACount*250;
    let CPUPrice=(VGAPrice*0.35)*CPUCount;
    let RAMPrice=(VGAPrice*0.1)*RAMCount;
    let totalPrice=VGAPrice+CPUPrice+RAMPrice;
    if(VGACount>CPUCount){
        totalPrice=totalPrice*0.85;
    }
    let diff=Math.abs(totalPrice-budget);
    if(totalPrice<=budget){
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    }
    else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
shopping(["900",
"2",
"1",
"3"])