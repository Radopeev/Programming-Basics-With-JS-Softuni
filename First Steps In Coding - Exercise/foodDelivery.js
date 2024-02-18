function foodDelivery(input){
    let chickenMenu=Number(input[0]);
    let fishMenu=Number(input[1]);
    let vegetarainMenu=Number(input[2]);
    let price=chickenMenu*10.35+fishMenu*12.40+vegetarainMenu*8.15;
    let desert=price*0.2;
    let totalPrice=price+desert+2.5;
    console.log(totalPrice);
}
foodDelivery(["2 ","4 ","3 "])