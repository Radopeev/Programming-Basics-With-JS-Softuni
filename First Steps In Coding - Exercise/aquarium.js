function aquarium(input){
    let length=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let pump=Number(input[3]);
    let volume=length*width*height;
    let volumeInLitres=volume/1000;
    let totalVolume=volumeInLitres*(1-(pump)/100);
    console.log(totalVolume);
}
aquarium(["85 ",
"75 ",
"47 ",
"17 "])