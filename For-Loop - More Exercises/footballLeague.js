function footballLeague(input){
    let index=0;
    let capacity=Number(input[index]);
    index++;
    let fans=Number(input[index]);
    index++;
    let sectorA=0;
    let sectorB=0;
    let sectorV=0;
    let sectorG=0;
    for(let i=0; i<fans; i++){
        let sector=input[index];
        index++;
        switch(sector){
            case "A":sectorA++;break;
            case "B":sectorB++;break;
            case "V":sectorV++;break;
            case "G":sectorG++;break;
        }
    }
    let p1=sectorA/fans*100;
    let p2=sectorB/fans*100;
    let p3=sectorV/fans*100;
    let p4=sectorG/fans*100;
    let p5=fans/capacity*100;
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"])