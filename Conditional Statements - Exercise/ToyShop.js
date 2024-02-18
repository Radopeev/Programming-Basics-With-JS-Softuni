function toyShop(input){
    let excursionPrice=Number(input[0]);
    let puzzle=Number(input[1]);
    let talkingDull=Number(input[2]);
    let fluffyBear=Number(input[3]);
    let minions=Number(input[4]);
    let truck=Number(input[5]);
    let profit=puzzle*2.60+talkingDull*3+fluffyBear*4.10+minions*8.20+truck*2;
    let count=puzzle+talkingDull+fluffyBear+minions+truck;
    if(count>=50){
      profit=profit*0.75;
    }
    profit=profit*0.9;
    let moneyLeft=Math.abs(profit-excursionPrice);
    if(profit>=excursionPrice){
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    }
    else{
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`)
    }
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])