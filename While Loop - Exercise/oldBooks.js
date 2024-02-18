function oldBooks(input){
    let searchedBook=input[0];
    let index=1;
    let currentBook=input[index];
    let flag=true;
    let count=0;
    while(currentBook!=="No More Books" && currentBook!==searchedBook){
        index++; 
        currentBook=input[index]; 
        if(currentBook===searchedBook){
            flag=true; 
             count++;
             break;
        }else {
            flag=false;
            count++;
        }
    }
    if(flag===true){
        console.log(`You checked ${count} books and found it.`);
    }else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`)
    }
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])