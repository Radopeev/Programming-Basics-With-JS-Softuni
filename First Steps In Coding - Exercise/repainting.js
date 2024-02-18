function repainting(input){
    let nylon=Number(input[0]);
    let paint=Number(input[1]);
    let thinner=Number(input[2]);
    let hours=Number(input[3]);
    nylon=nylon+2;
    paint=paint+paint*0.1;
    let price=nylon*1.50+paint*14.50+thinner*5+0.40;
    let WorkersPaychek=(price*0.3)*hours;
    let totalPrice=WorkersPaychek+price;
    console.log(totalPrice);
}
repainting(["10 ",
"11 ",
"4 ",
"8 "])