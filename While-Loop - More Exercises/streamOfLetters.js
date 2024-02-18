function streamOfLetters(input){
    let index=0;
    let letter=input[index];
    index++;
    let counterC=0;
    let counterO=0;
    let counterN=0;
    let secretWord="";
    let word="";
    while(letter!=="End"){
        if(letter>='a' && letter<='z' || letter>='A' && letter<'Z')
        {
            if(letter==="c" && counterC===0){
                counterC++;
            }
            else if(letter==="o" && counterO===0){
                counterO++;
            }
            else if(letter==="n" && counterN===0){
                counterN++;
            }
            else{
                word+=letter;
            }
            if(counterC+counterN+counterO===3){
                secretWord+=word;
                secretWord+=" ";
                word="";
                counterC=0;
                counterO=0;
                counterN=0;
            }
        }
        letter=input[index];
        index++;
    }
    console.log(secretWord);
}
streamOfLetters(["H","n","e","l","l","o","o","c","t","c","h","o","e","r","e","n","e","End"])