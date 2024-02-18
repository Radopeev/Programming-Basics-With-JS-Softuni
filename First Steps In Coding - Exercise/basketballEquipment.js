function basketballEquipment(input){
    let basketballTax=Number(input[0]);
    let basketballBoots=basketballTax-(basketballTax*0.4);
    let basketballJersey=basketballBoots-(basketballBoots*0.2);
    let basketballBall=basketballJersey*0.25;
    let basketballAccesories=basketballBall*0.2;
    let totalTax=basketballTax+basketballBoots+basketballJersey+basketballBall+basketballAccesories;
    console.log(totalTax);
}
basketballEquipment(["365"])