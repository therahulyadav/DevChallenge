//Dom element
let copyBtn = document.querySelector("#copyBtn");
let upperCase = document.querySelector("#upperCase");
let lowerCase = document.querySelector("#lowerCase");
let numbers = document.querySelector("#number");
let symbols = document.querySelector("#symbol");
let GenBtn =  document.querySelector("#genBtn");
let PasswordField = document.querySelector(".generatedPassword");
let char = "";
let GenPassword = "";
function genPass(){
//preprocessing
if(upperCase.checked == true){
    GenPassword = "";
    char = "";
    char += "ASDFGHJKLQWERTYUIOPZXCVBNM";
}
if(symbols.checked == true){
    char += "!@#$%^&*()+_?/|][{};:.";
}
if(lowerCase.checked == true){
    char +="qwertyuiopzxcvbnmasdfghjkl";
}
if(numbers.checked == true){
    char+="1234567890";
}
//password creation
for(let i = 0 ; i <8 ; i++){
    let random = Math.floor(Math.random() * char.length);
    GenPassword += char.substring(random , random+1);
}
PasswordField.value = GenPassword;
}
function copyPassword(){
    PasswordField.select();
    document.execCommand("copy");
}
GenBtn.addEventListener('click',()=>{
genPass();
})
copyBtn.addEventListener('click' , ()=>{
    copyPassword();
})

