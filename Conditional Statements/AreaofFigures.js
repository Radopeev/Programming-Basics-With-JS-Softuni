function areaofFigures(input){
    let figure=input[0];
    if(figure==="square"){
        let a=Number(input[1]);
        console.log(a*a);
    }
    else if(figure==="rectangle"){
        let a=Number(input[1]);
        let b=Number(input[2]);
        console.log(a*b);
    }
    else if(figure==="circle"){
        let a=Number(input[1]);
        console.log(a*a*Math.PI);
    }
    else if(figure==="triangle"){
        let a=Number(input[1]);
        let h=Number(input[2]);
        console.log((a*h)/2);
    }
}
areaofFigures(["circle","6"])