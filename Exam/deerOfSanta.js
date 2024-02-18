function deerOfSanta(input){
    let daysMissing=Number(input[0]);
    let food=Number(input[1]);
    let foodForFirstDeer=Number(input[2]);
    let foodForSecondDeer=Number(input[3]);
    let foodForThirdDeer=Number(input[4]);
    let neededFood=daysMissing*(foodForFirstDeer+foodForSecondDeer+foodForThirdDeer);
    let diff=Math.abs(food-neededFood);
    if(neededFood<=food){
        console.log(`${Math.floor(diff)} kilos of food left.`)
    }else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])