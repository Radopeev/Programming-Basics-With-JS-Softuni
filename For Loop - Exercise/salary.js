function salary(input){
    let index=0;
    let tabs=Number(input[index]);
    index++;
    let salary=Number(input[index]);
    index++;
    for(let i=0;i<=tabs;i++){
        let x=input[index];
        index++;
        switch(x){
            case "Facebook":salary=salary-150;break;
            case "Instagram":salary=salary-100;break;
            case "Reddit":salary=salary-50;break;
        }
    }
    if(salary<=0){
        console.log(`You have lost your salary.`);
    }else {
        console.log(`${Math.round(salary)}`)
    }
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])