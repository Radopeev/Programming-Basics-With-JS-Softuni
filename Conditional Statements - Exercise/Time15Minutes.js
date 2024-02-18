function time15Minutes(input){
    let hours=Number(input[0]);
    let minutes=Number(input[1]);
    let time=hours*60+minutes+15;
    let hoursNew=Math.floor(time/60);
    let minutesNew=time%60;
    if(hoursNew>23){
        hoursNew=0;
    }
    if(minutesNew<10){
        console.log(`${hoursNew}:0${minutesNew}`);
    }
    else {
        console.log(`${hoursNew}:${minutesNew}`);
    }
    
}
time15Minutes((["1", "46"]))