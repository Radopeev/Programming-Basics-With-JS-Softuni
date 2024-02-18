function hospital(input){
    let index=0;
    let period=Number(input[index]);
    index++;
    let doctors=7;  
    let treatedPatients=0;
    let Untreated=0;
    for(let i=1; i<=period; i++){
        let untreatedPatients=0;
        let patients=Number(input[index])
        if(i%3===0 && Untreated>treatedPatients){
            doctors++;
        }
        if(patients>=doctors){
            treatedPatients+=doctors;
            untreatedPatients=patients-doctors;
        }
        else{
            treatedPatients+=patients;
        }
        index++;
        Untreated+=untreatedPatients
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${Untreated}.`)
}
hospital(["4","7","27","9","1"])