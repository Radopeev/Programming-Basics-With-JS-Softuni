function maxNumber(input){
    let currentElement=input[0];
    let max=-10000000;
    let index=1;
    while(currentElement!=="Stop"){
        let elementAsNumber=Number(currentElement);
        if(elementAsNumber>max){
            max=elementAsNumber;
        }
       
        currentElement=input[index]; 
        index++;
    }
    console.log(max);
}
maxNumber(["-10",
"20",
"-30",
"Stop"])