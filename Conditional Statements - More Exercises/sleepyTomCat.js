function sleepyTomCat(input){
    let restDays=Number(input[0]);
    let workdays=365-restDays;
    let play=restDays*127+workdays*63;
    let diff=Math.abs(30000-play);
    let h=Math.floor(diff/60);
    let m=diff%60;
    if(play>30000){
        console.log(`Tom will run away`);
        console.log(`${h} hours and ${m} minutes more for play`)
    }
    else {
        console.log(`Tom sleeps well`);
        console.log(`${h} hours and ${m} minutes less for play`)
    }
}
