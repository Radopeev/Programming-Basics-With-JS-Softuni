function worldSwimminRecord(input){

    let worldRecord=Number(input[0]);
    let distance=Number(input[1]);
    let timeForOneMeter=Number(input[2]);
    let ivanTime=distance*timeForOneMeter;
    let delay=(Math.floor(distance/15))*12.5;
    ivanTime=delay+ivanTime;
    if(ivanTime<worldRecord){

        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    }
    else {
        let diff=ivanTime-worldRecord;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldSwimminRecord(["55555.67",
"3017",
"5.03"])