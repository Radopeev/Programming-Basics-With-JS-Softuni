function graduation(input){
    let name=input[0];
    let index=1;
    let sumOfGrades=0;
    let count=0;
    let numOfFailures=0;
    while(count<=12){
        let currentGrade=Number(input[index]);
        index++;
        if(currentGrade>=4){
            sumOfGrades+=currentGrade;
        }else {
            numOfFailures++;
        } 
       
        if(numOfFailures>=2){
            break;
        } 
        count++;
    }
    let averageGrade=sumOfGrades/12;
    if(numOfFailures<2){
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }else {
        console.log(`${name} has been excluded at ${count} grade`)
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])