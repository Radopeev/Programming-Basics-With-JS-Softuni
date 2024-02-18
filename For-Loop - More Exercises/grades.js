function grades(input){
    let index=0;
    let num=Number(input[index]);
    index++;
    let totalGrades=0;
    let topStudents=0;
    let between4And5=0;
    let between3And4=0;
    let fail=0;
    for(let i=0; i<num; i++){
        let student=Number(input[index]);
        index++;
        if(student<3.00){
            fail++;
            totalGrades+=student;
        }else if(student<4){
            between3And4++;
            totalGrades+=student;
        }else if(student<5){
            between4And5++;
            totalGrades+=student;
        }else {
            topStudents++;
            totalGrades+=student;
        }
    }
    let avarageGrade=totalGrades/num;
    let p1=topStudents/num*100;
    let p2=between4And5/num*100;
    let p3=between3And4/num*100;
    let p4=fail/num*100;
    console.log(`Top students: ${p1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${p2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${p3.toFixed(2)}%`);
    console.log(`Fail: ${p4.toFixed(2)}%`);
    console.log(`Average: ${avarageGrade.toFixed(2)}`);
}
grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"])