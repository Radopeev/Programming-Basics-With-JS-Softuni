function lunchBreak(input){
    let seriesName=input[0];
    let episodeTime=Number(input[1]);
    let breakTime=Number(input[2]);
    let lunchTime=breakTime/8;
    let restTime=breakTime/4;
    let availableTime=breakTime-(lunchTime+restTime);
    if(availableTime>=episodeTime){
        let diff=availableTime-episodeTime;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(diff)} minutes free time.`)
    }
    else{
        let diff=episodeTime-availableTime;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
