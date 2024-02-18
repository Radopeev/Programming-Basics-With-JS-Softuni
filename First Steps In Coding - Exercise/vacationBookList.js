function vacationBookList(input){
    let bookPages=Number(input[0]);
    let pagesForHour=Number(input[1]);
    let numberOfDays=Number(input[2]);
    let hoursForBook=bookPages/pagesForHour;
    let hoursPerDay=hoursForBook/numberOfDays;
    console.log(hoursPerDay);
}
vacationBookList(["212 ",
"20 ",
"2 "])