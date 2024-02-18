function newHouse(input){
    let flower=input[0];
    let numOfFlowers=Number(input[1]);
    let budget=Number(input[2]);
    let price=0;
    switch(flower){
        case "Roses":
            price=numOfFlowers*5;
        if(numOfFlowers>80){
            price=price*0.9;
        }
        break;
        case "Dahlias":
            price=numOfFlowers*3.80;
        if(numOfFlowers>90){
            price=price*0.85;
        }
        break;
        case "Tulips":
            price=numOfFlowers*2.80;
        if(numOfFlowers>80){
            price=price*0.85;
        }
        break;
        case "Narcissus":
            price=numOfFlowers*3;
        
        if(numOfFlowers<120){
        price=price*1.15;
        }
        break;
        case "Gladiolus":
            price=numOfFlowers*2.50;
        if(numOfFlowers<80){
            price=price*1.20;
        }
        break;
    }  
    let diff=Math.abs(budget-price);
    if(budget>=price){
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${flower} and ${diff.toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}
newHouse(["Roses",
"55",
"250"])