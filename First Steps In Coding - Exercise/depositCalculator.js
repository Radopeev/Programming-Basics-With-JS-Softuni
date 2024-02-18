function depositCalculator(input){
    let depositSum=Number(input[0]);
    let depositTerm=Number(input[1]);
    let interestRate=Number(input[2]);
    let sumWithInterest=depositSum*(interestRate/100);
    let interestPerMonth=sumWithInterest/12;
    let totalSum=depositSum+depositTerm*interestPerMonth;
    console.log(totalSum);
}
depositCalculator(["200 ","3 ","5.7 "])