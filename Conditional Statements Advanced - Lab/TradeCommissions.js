function tradeCommissions(input){
    let city=input[0];
    let sales=Number(input[1]);
    let commission=0;
    if(sales>=0 && sales<=500){
        switch(city){
            case "Sofia":commission=sales*0.05;break;
            case "Varna":commission=sales*0.045;break;
            case "Plovdiv":commission=sales*0.055;break;
            default:console.log("error");break
        }
        if(commission!=0){
            console.log(commission.toFixed(2));
        }
    }
    else if(sales>500 && sales<=1000){
        switch(city){
            case "Sofia":commission=sales*0.07;break;
            case "Varna":commission=sales*0.075;break;
            case "Plovdiv":commission=sales*0.08;break;
            default:console.log("error");break;
        }
        if(commission!=0){
            console.log(commission.toFixed(2));
        }
    }
    else if(sales>1000 && sales<=10000){
        switch(city){
            case "Sofia":commission=sales*0.08;break;
            case "Varna":commission=sales*0.1;break;
            case "Plovdiv":commission=sales*0.12;break;
            default:console.log("error");
        }
        if(commission!=0){
            console.log(commission.toFixed(2));
        }
    }
    else if(sales>10000){
        switch(city){
            case "Sofia":commission=sales*0.12;break;
            case "Varna":commission=sales*0.13;break;
            case "Plovdiv":commission=sales*0.145;break;
            default:console.log("error");
        }
        if(commission!=0){
            console.log(commission.toFixed(2));
        }
    }
    else{
        console.log("error");
    }
}
tradeCommissions(["bourgas",
"1500"])