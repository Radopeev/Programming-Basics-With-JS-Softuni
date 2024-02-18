function minNumber(input){
    let currentElement=input[0];
    let min=10000000;
    let index=1;
    while(currentElement!=="Stop"){
        let elementAsNumber=Number(currentElement);
        if(elementAsNumber<min){
            min=elementAsNumber;
        }
       
        currentElement=input[index]; 
        index++;
    }
    console.log(min);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])