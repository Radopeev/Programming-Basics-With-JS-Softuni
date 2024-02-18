function cinemaTickets(input){
    let index=0;
    let command=input[index];
    index++;
    let totalTickets=0;
    let studentTickets=0;
    let standardTickets=0;
    let kidTickets=0;
    while(command!=="Finish"){
        let movie=command;
        let numOfSeats=Number(input[index]);
        index++;
        let command2=input[index];
        index++; 
        let currentTickets=0;
        while(command2!=="End"){
            currentTickets++;
            switch(command2){
                case "standard":standardTickets++;break;
                case "kid":kidTickets++;break;
                case "student":studentTickets++;break;
            }
            if(currentTickets>=numOfSeats){
                break;
            }
            command2=input[index];
            index++;
        }
        totalTickets+=currentTickets;
        let percent=currentTickets/numOfSeats*100;
        console.log(`${movie} - ${percent.toFixed(2)}% full.`);
        command=input[index];
        index++; 
    }
    console.log(`Total tickets: ${totalTickets}`);
    let percentStudent=studentTickets/totalTickets*100;
    let percentStandard=standardTickets/totalTickets*100;
    let percentKid=kidTickets/totalTickets*100;
    console.log(`${percentStudent.toFixed(2)}% student tickets.`);
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentKid.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])