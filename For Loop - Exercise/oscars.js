function oscars(input){
    let index=0;
    let actorName=input[index];
    index++;
    let academyPoints=Number(input[index]);
    index++;
    let judgesNum=Number(input[index]);
    index++;
    let isNiminee=false;
    for(let i=0; i<judgesNum;i++){
        let name=input[index];
        index++;
        let tempPoints=Number(input[index]);
        index++;
        academyPoints+=name.length*tempPoints/2;
        if(academyPoints>=1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            isNiminee=true;
            break;
        }
    }
    if(!isNiminee){
        let diff=1250.5-academyPoints;
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])