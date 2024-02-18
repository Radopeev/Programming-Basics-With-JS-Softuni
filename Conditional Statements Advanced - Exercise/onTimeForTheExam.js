function onTimeForTheExam(input){
    let examHour=Number(input[0]);
    let examMinute=Number(input[1]);
    let arriveHour=Number(input[2]);
    let arriveMinute=Number(input[3]);
    let examTime=examHour*60+examMinute;
    let arriveTime=arriveHour*60+arriveMinute;
    if(examTime<arriveTime){
        console.log("Late");
        let diff=Math.abs(examTime-arriveTime);
        let h=Math.floor(diff/60);
        let m=diff%60;
        if(h>=1){
            if(m<10){
                console.log(`${h}:0${m} hours after the start`)
            }
            else {
                console.log(`${h}:${m} hours after the start`)
            }
        }
        else {
            console.log(`${m} minutes after the start`);
        }
    } else if(examTime===arriveTime || examTime-arriveTime<=30){
        console.log("On time");
        let diff=Math.abs(examTime-arriveTime);
        if(diff!==0){
            let m=diff%60;
            console.log(`${m} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff=Math.abs(arriveTime-examTime);
        let h=Math.floor(diff/60);
        let m=diff%60;
        if(h>=1){
            if(m<10){
                console.log(`${h}:0${m} hours before the start`);
            }
            else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
        else {
            console.log(`${m} minutes before the start`);
        }   
    }
}
onTimeForTheExam(["9",
"00",
"8",
"30"])