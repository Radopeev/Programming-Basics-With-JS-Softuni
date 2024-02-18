function sumSeconds(input){
    let competotor1=Number(input[0]);
    let competotor2=Number(input[1]);
    let competotor3=Number(input[2]);

    let time=competotor1+competotor2+competotor3;
    let m=Math.floor(time/60);
    let s=time%60;
    if(s<10){
        console.log(`${m}:0${s}`);
    }
    else{
        console.log(`${m}:${s}`);
    }
}
sumSeconds((["35",
"45",
"44"]))