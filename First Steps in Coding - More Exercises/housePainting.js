function housePainting(input){
    let x=Number(input[0]);
    let y=Number(input[1]);
    let h=Number(input[2]);
    let frontWall=(x*x)-(1.2*2);
    let backWall=x*x;;
    let sideWalls=2*((x*y)-(1.5*1.5));
    let roofSideWalls=2*(x*y);
    let roofFrontWalls=2*((x*h)/2);
    let greenPaint=(frontWall+backWall+sideWalls)/3.4;
    let redPaint=(roofFrontWalls+roofSideWalls)/4.3;
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}