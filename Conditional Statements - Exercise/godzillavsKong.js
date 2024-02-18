function godzillaVSKong(input){
    let budget=Number(input[0]);
    let extrasCount=Number(input[1]);
    let extrasClothesPrice=Number(input[2]);
    
    let decor=budget*0.1;
    let extrasPrice=extrasCount*extrasClothesPrice;
    if(extrasCount>150){
        extrasPrice=extrasPrice*0.9;
    }
    let totalAmount=decor+extrasPrice;
    let diff=Math.abs(totalAmount-budget)
    if(totalAmount>budget){
        console.log(`Not enough money! 
        Wingard needs ${diff.toFixed(2)} leva more.`)
    }
    else{
        console.log(`Action!
         Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}
godzillaVSKong(["9587.88",
"222",
"55.68"])