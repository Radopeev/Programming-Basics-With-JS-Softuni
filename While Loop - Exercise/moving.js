function moving(input){
    let index=0;
    let w=Number(input[index]);
    index++;
    let l=Number(input[index]);
    index++;
    let h=Number(input[index]);
    index++;
    let space=w*l*h;
    let command=input[index];
    index++;
    let flag=true;
    while(command!=="Done"){
        let boxes=Number(command);
        space-=boxes;
        if(space<0){
            flag=false;
            break;
        }
        command=input[index];
        index++;
    }
    if(flag){
        console.log(`${space} Cubic meters left.`)
    }else {
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`)
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])