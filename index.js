const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
    ":",";","<",">",".","?",
"/"]
let passwordone = document.getElementById("password1")
let passwordtwo = document.getElementById("password2")
function RandomPassword ()
{
    passwordone.textContent =""
    passwordtwo.textContent =""
   
   for (let i = 0; i<15; i++)
    {
        let randomNumber = Math.floor(Math.random()*characters.length)
        passwordone.textContent +=characters[randomNumber]
        randomNumber = Math.floor(Math.random()*characters.length)
        passwordtwo.textContent +=characters[randomNumber]
    }
}