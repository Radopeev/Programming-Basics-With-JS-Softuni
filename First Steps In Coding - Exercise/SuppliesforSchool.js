function suppliesForSchool(input){
    let numberPens=Number(input[0]);
    let numberMarkers=Number(input[1]);
    let deterangent=Number(input[2]);
    let discount= Number(input[3]);
    let price=numberPens*5.80+numberMarkers*7.20+deterangent*1.20;
    let totalDiscount=price*(discount/100);
    let totalPrice=price-totalDiscount;
    console.log(totalPrice);
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "])