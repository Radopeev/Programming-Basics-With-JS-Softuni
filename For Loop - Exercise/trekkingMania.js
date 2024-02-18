function trekkingMania(input){
    let index=0;
    let numberOfGroups=Number(input[index]);
    index++;
    let Musala=0;
    let Monblan=0;
    let Kilimandjaro=0;
    let K2=0;
    let Everest=0;
    let totalCount=0;
    for(let i=0;i<numberOfGroups;i++){
        let x=Number(input[index]);
        index++;
        if(x<=5){
            Musala+=x;
            totalCount+=x;
        }else if(x>=6 && x<=12){
            Monblan+=x;
            totalCount+=x;
        }else if(x>=13 && x<=25){
            Kilimandjaro+=x;
            totalCount+=x;
        }else if(x>=26 && x<=40){
            K2+=x;
            totalCount+=x;
        }else if(x>=41){
            Everest+=x;
            totalCount+=x;
        }
    }
    let p1=Musala/totalCount*100;
    let p2=Monblan/totalCount*100;
    let p3=Kilimandjaro/totalCount*100;
    let p4=K2/totalCount*100;
    let p5=Everest/totalCount*100;
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])