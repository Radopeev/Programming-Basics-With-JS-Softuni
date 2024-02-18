function christmasPreparation(input){
    let paper=Number(input[0]);
    let fabric=Number(input[1]);
    let glue=Number(input[2]);
    let discount=Number(input[3]);
    let sum=paper*5.8+fabric*7.20+1.20*glue;
    let totalSum=sum-(sum*discount/100);
    console.log(totalSum.toFixed(3));
}
christmasPreparation(["2",
"3",
"2.5",
"25"])
