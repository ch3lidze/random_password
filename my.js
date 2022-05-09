let input = document.getElementById("inputPassword")
let pPaswordCopy = document.getElementById("pPaswordCopy")
let pClickTxt = document.getElementById("pClickTxt")



function generate(){
    let str = ''
    let string = "asdfghjklASDFGHJKLQWERTqwert!@#$%^&*1234567890"
for(let i = 0; i < 8; i++){
    let random = Math.floor(Math.random()*string.length)
    str += string.charAt(random) 
    }
    return str
}






function generateClick(){
    inputPassword.value = generate()

    //click 'click me' and change  p text
    pClickTxt.style.display = "block";
    pPaswordCopy.style.display = "none";
}

function copyPassword(){
    var copyText = inputPassword;
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    //p text change
    pClickTxt.style.display = "none";
    pPaswordCopy.style.display = "block";
}







