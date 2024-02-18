function pipesInPool(input){
    let size=Number(input[0]);
    let p1=Number(input[1]);
    let p2=Number(input[2]);
    let h=Number(input[3]);
    let p1Water=p1*h;
    let p2Water=p2*h;
    let totalWater=(p1+p2)*h;
    let diff=Math.abs(size-totalWater);
    if(totalWater<=size){
        let totalProcent=(totalWater*100)/size;
        let procent1=(p1Water*100)/totalWater;
        let procent2=(p2Water*100)/totalWater;
        console.log(`The pool is ${totalProcent.toFixed(2)}% full. Pipe 1: ${procent1.toFixed(2)}%. Pipe 2: ${procent2.toFixed(2)}%.`)
    }else {
        console.log(`For ${h} hours the pool overflows with ${diff} liters."`)
    }
}
pipesInPool(["1000","100","120","3"])