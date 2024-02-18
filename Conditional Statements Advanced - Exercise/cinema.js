function cinema(input){
    let typeOfProjection=input[0];
    let rows=Number(input[1]);
    let columns=Number(input[2]);
    let profit=0;
    switch(typeOfProjection){
        case "Premiere":profit=rows*columns*12;break;
        case "Normal":profit=rows*columns*7.50;break;
        case "Discount":profit=rows*columns*5;break;
    }
    console.log(`${profit.toFixed(2)} leva`);
}
cinema(["Premiere",
"10",
"12"])