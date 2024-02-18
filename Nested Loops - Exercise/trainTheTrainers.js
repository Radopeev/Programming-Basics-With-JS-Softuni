function trainTheTrainers(input){
    let index=0;
    let juryNumber=Number(input[index]);
    index++;
    let command=input[index];
    let sumOfGrades=0;
    let totalSum=0;
    let presentationNumber=0;
    while(command!=="Finish"){
        let presentationName=command;
        index++;
        for(let i=0;i<juryNumber;i++){
            let grade=Number(input[index]);
            index++;
            sumOfGrades+=grade;
            totalSum+=grade;
            presentationNumber++;
        }
        let avgScore=sumOfGrades/juryNumber;
        sumOfGrades=0;
        console.log(`${presentationName} - ${avgScore.toFixed(2)}.`);
        command=input[index];
    } 
    let average=totalSum/presentationNumber;
    console.log(`Student's final assessment is ${average.toFixed(2)}.`)
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])