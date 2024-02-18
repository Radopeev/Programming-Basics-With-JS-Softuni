function pets(input){
    let days=Number(input[0]);
    let leftFood=Number(input[1]);
    let dogFood=Number(input[2]);
    let catFood=Number(input[3]);
    let turtleFood=Number(input[4]);
    let totalDogFood=dogFood*days;
    let totalCatFood=catFood*days;
    let totalTurtleFood=(turtleFood*days)/1000;
    let totalFood=totalCatFood+totalDogFood+totalTurtleFood;
    let diff=Math.abs(totalFood-leftFood);
    if(leftFood>=totalFood){
        console.log(`${Math.floor(diff)} kilos of food left.`)
    }else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
}