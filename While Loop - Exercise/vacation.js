function vacation(input){
    let index=0;
    let moneyForVacation=Number(input[index]);
    index++;
    let budget=Number(input[index]);
    index++;
    let days=0;
    let daysOfSpending=0;
    while(budget<moneyForVacation){
        let action=input[index];
        index++;
        let money=Number(input[index]);
        index++; 
        days++;
        switch(action){
            case "spend":
                budget-=money;
                if(budget<=0){
                    budget=0;
                }
                daysOfSpending++;
                break;
            case "save":
                budget+=money;
                daysOfSpending=0;
                break;
        }
        if(daysOfSpending===5){
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }
    }
    if(budget>=moneyForVacation){
        console.log(`You saved the money for ${days} days.`)
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])