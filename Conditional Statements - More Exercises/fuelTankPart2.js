function fuelTankPart2(input){
    let fuel=input[0];
    let liters=Number(input[1]);
    let card=input[2];
    let price=0;
    if(fuel==="Gas"){
        if(card==="Yes"){
            price=liters*0.85;
        }
        else if(card==="No"){
            price=liters*0.93;
        }
    }else if(fuel==="Gasoline"){
        if(card==="Yes"){
            price=liters*2.04;
        }
        else if(card==="No"){
            price=liters*2.22;
        }
    }else if(fuel==="Diesel"){
        if(card==="Yes"){
            price=liters*2.21;
        }
        else if(card==="No"){
            price=liters*2.33;
        }
    }
    if(liters>=20 && liters<=25){
        price=price*0.92;
    }
    else if(liters>25){
        price=price*0.9;
    }
    console.log(`${price.toFixed(2)} lv.`)
}