function schoolCamp(input){
    let season=input[0];
    let group=input[1];
    let students=Number(input[2]);
    let nights=Number(input[3]);
    let price=0;
    let sport;
    if(season==="Winter"){
        if(group==="boys" || group==="girls"){
            price=students*9.60*nights;
        }else if(group==="mixed"){
            price=students*10*nights;
        }
    }else if(season==="Spring"){
        if(group==="boys" || group==="girls"){
            price=students*7.20*nights;
        }else if(group==="mixed"){
            price=students*9.50*nights;
        }
    }else if(season==="Summer"){
        if(group==="boys" || group==="girls"){
            price=students*15*nights;
        }else if(group==="mixed"){
            price=students*20*nights;
        }
    }
    if(students>=50){
        price=price*0.5;
    }else if(students>=20 && students<50){
        price=price*0.85;
    }else if(students>=10 && students<20){
        price=price*0.95;
    }
    if(season==="Winter" && group==="girls"){
        sport="Gymnastics";
    }else if(season==="Winter" && group==="boys"){
        sport="Judo";
    }else if(season==="Winter" && group==="mixed"){
        sport="Ski";
    }else if(season==="Spring" && group==="girls"){
        sport="Athletics";
    }else if(season==="Spring" && group==="boys"){
        sport="Tennis";
    }else if(season==="Spring" && group==="mixed"){
        sport="Cycling";
    }else if(season==="Summer" && group==="girls"){
        sport="Volleyball";
    }else if(season==="Summer" && group==="boys"){
        sport="Football";
    }else if(season==="Summer" && group==="boys"){
        sport="Swimming";
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`)
}
schoolCamp(["Spring",
"girls",
"20",
"7"])