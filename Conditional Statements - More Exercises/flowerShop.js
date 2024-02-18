function flowerShop(input){
    let magnolia=Number(input[0]);
    let hyacinth=Number(input[1]);
    let rose=Number(input[2]);
    let cactus=Number(input[3]);
    let gift=Number(input[4])
    let sum=(magnolia*3.25)+(hyacinth*4)+(rose*3.50)+(cactus*8);
    let totalSum=sum*0.95;
    let diff=Math.abs(gift-totalSum);
    if(totalSum>=gift){
        console.log(`She is left with ${Math.floor(diff)} leva.`)
    }else{
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }
}
flowerShop(["2",
"3",
"5",
"1",
"50"])