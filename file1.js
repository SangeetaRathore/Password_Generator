const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const myNumbers = "1234567890"
const symbols = "!@#$%^&*()_+{}[]/|\><.,"

function randomChar (data){
    return data[Math.floor(Math.random()*data.length)]
}

const upperInput = document.getElementById("Uppercase")
const lowerInput = document.getElementById("Lowercase")
const numberInput = document.getElementById("Numbers")
const symbolsInput = document.getElementById("Symbols")
const charNum = document.getElementById("char_text")
const textboxInput = document.getElementById("textbox")


function getGeneratedPassword (password = ""){
    if(upperInput.checked){
        password += randomChar(upperCase)
    }

    if(lowerInput.checked){
        password += randomChar(lowerCase)
    }

    if(numberInput.checked){
        password += randomChar(myNumbers)
    }

    if(symbolsInput.checked){
        password += randomChar(symbols)
    }
    
    if(password.length<charNum.value){
        return getGeneratedPassword(password)
    }
    
    textboxInput.innerText = truncateString(password,charNum.value)
}

getGeneratedPassword();
document.getElementById("btn").addEventListener(
    "click",
    function() {
        getGeneratedPassword();
    }

)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}