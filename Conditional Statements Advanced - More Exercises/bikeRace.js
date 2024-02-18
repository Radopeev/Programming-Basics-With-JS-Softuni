function bikeRace(input){
    let juniors=Number(input[0]);
    let seniors=Number(input[1]);
    let trace=input[2];
    let taxJuniors=0;
    let taxSeniors=0;
    if(trace==="trail"){
        taxJuniors=juniors*5.50;
        taxSeniors=seniors*7;
    }else if(trace==="cross-country"){
        taxJuniors=juniors*8;
        taxSeniors=seniors*9.50;
    }else if(trace==="downhill"){
        taxJuniors=juniors*12.25;
        taxSeniors=seniors*13.75;
    }else if(trace==="road"){
        taxJuniors=juniors*20;
        taxSeniors=seniors*21.50;
    }
    let tax=taxJuniors+taxSeniors;
    if(trace==="cross-country" && (seniors+juniors)>=50){
        tax=tax*0.75;
    }
    let totalTax=tax*0.95;
    console.log(`${totalTax.toFixed(2)}`);
}
bikeRace(["10",
"20",
"trail"])