function computerFirm(input){
    let index=0;
    let computers=Number(input[index]);
    index++;
    let doneSales=0;
    let ratings=0;
    let totalSales=0;
    for(let i=0;i<computers;i++){
        let computer=input[index];
        index++;
        let rating=computer.charAt(2);
        ratings+=Number(rating);
        let sales=Math.floor(Number(computer)/10);
        switch(rating){
            case "2":doneSales=0;totalSales+=doneSales;break;
            case "3":doneSales=0.5*sales;totalSales+=doneSales;break;
            case "4":doneSales=0.7*sales;totalSales+=doneSales;break;
            case "5":doneSales=0.85*sales;totalSales+=doneSales;break;
            case "6":doneSales=sales;totalSales+=doneSales;break;
        }
    }
    let avgRating=ratings/computers;
    console.log(`${totalSales.toFixed(2)}`);
    console.log(`${avgRating.toFixed(2)}`);
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])