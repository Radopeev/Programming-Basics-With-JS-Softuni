function trainingLab(input){
    let w=Number(input[0]);
    let h=Number(input[1]);
    let wInCentimeters=w*100;
    let hInCentimeters=h*100;
    let totalh=hInCentimeters-100;
    let rows=Math.floor(totalh/70);
    let columns=Math.floor(wInCentimeters/120);
    console.log(rows*columns-3);
}
trainingLab(["15",
"8.9"])