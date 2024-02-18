function tennisRanklist(input){
    let index=0;
    let tournaments=Number(input[index]);
    index++;
    let startingPoint=Number(input[index]);
    index++;
    let finalPoints=startingPoint;
    let tournamentsWonCount=0;
    for(let i=0;i<tournaments;i++){
        let stage=input[index];
        index++;
        switch(stage){
            case "W":finalPoints+=2000;tournamentsWonCount++;break
            case "F":finalPoints+=1200;break;
            case "SF":finalPoints+=720;break;
        }
    }
    let averagePoints=(finalPoints-startingPoint)/tournaments;
    let tournamentsWon=tournamentsWonCount/tournaments*100;
    console.log(`Final points: ${Math.floor(finalPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${tournamentsWon.toFixed(2)}%`)
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])