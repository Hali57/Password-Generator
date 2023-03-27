const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
//let count = prompt("Please enter the desired password length",15)
function randomPassword(){
    let count = prompt("Please enter the desired password length",15)
    pass1El.textContent = " "
    pass2El.textContent = " ";

    for(let i=0; i<count; i++){
    let randomNumber1 = Math.floor(Math.random()*characters.length)
    let randomNumber2 = Math.floor(Math.random()*characters.length)
    pass1El.textContent += characters[randomNumber1];
    pass2El.textContent += characters[randomNumber2];
    }
}



