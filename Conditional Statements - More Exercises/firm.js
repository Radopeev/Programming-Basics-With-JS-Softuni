function firm(input){
    let hours=Number(input[0]);
    let days=Number(input[1]);
    let overtimeWorkers=Number(input[2]);
    let workingDays=days*0.9;
    let overtime=overtimeWorkers*(2*days);
    let totalTime=Math.floor(workingDays*8+overtime);
    let diff=Math.abs(totalTime-hours);
    if(totalTime>=hours){
        console.log(`Yes!${diff} hours left.`);
    }
    else {
        console.log(`Not enough time!${diff} hours needed.`);
    }
}