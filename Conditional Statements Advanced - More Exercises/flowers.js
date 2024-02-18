function flowers(input){
    let chrysanthemums=Number(input[0]);
    let roses=Number(input[1]);
    let tulips=Number(input[2]);
    let season=input[3];
    let isHoliday=input[4];
    let chrysanthemumsPrice=0;
    let rosesPrice=0;
    let tulipsPrice=0;
    let price=0;
    if(season==="Spring" || season==="Summer"){
        chrysanthemumsPrice=chrysanthemums*2;
        rosesPrice=roses*4.10;
        tulipsPrice=tulips*2.50;   
    }else if(season==="Autumn" || season==="Winter"){
        chrysanthemumsPrice=chrysanthemums*3.75;
        rosesPrice=roses*4.50;
        tulipsPrice=tulips*4.15; 
    }
    price=chrysanthemumsPrice+rosesPrice+tulipsPrice;
    if(isHoliday==="Y"){
        price=price*1.15;
    }else if(isHoliday==="N"){
        price=price;
    }
    if(season==="Spring" && tulips>7){
        price=price*0.95;
    }
    if(season==="Winter" && roses>=10){
        price=price*0.9;
    }
    if((chrysanthemums+roses+tulips)>=20){
        price=price*0.8;
    }
    let totalPrice=price+2;
    console.log(totalPrice.toFixed(2));
}
flowers([
    "3",
    "10",
    "9",
    "Winter",
    "N"])