function yardGreening(input){
    let area=input[0];
    let price=area*7.61;
    let discount=price*0.18;
    let TotalPrice=price-discount;
    console.log(`The final price is: ${TotalPrice} lv.
The discount is: ${discount} lv.`);
}
yardGreening([550]);