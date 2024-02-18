function building(input){
    let rooms=Number(input[1]);
    let floor=Number(input[0]);
    let output="";
    let outputLargeApartments="";
    let index=0;
    while(index<rooms){
            outputLargeApartments+=`L${floor}${index} `;
            index++;
        }
    outputLargeApartments+='\n';
    for(let i=floor-1;i>=1;i--){
        for(let j=rooms-1;j>=0;j--){
            if(i%2===0){
                output+=`O${i}${rooms-j-1} `;
                if(j===0){
                    output+=`\n`;
                }
                
            }else {
                output+=`A${i}${rooms-j-1} `;
                if(j===0){
                    output+=`\n`;
                }
            }
        }
    }
    console.log(outputLargeApartments+output);
}
building(["9","5"])