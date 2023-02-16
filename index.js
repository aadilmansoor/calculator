operators ={
    "+" : 1,
    "-" : 1,
    "x": 1,
    "/" : 1,
}

function displayNum(num){
    if(num in operators && result.innerText.length == 0)
        return
    if((num in operators) && (result.innerText[result.innerText.length-1] in operators)){
        result.innerText = result.innerText.slice(0,-1) +num
    } else {
    result.innerText +=num
    }
}

function allClear(){
    result.innerText = ""
}

function evalExp(){
    exp=""
    for(i of result.innerText){
        if(i == "x"){
            exp += "*"
        } else {
            exp += i
        }
    }
    result.innerText = eval(exp)
}

function backspace() {
    result.innerText = result.innerText.slice(0,-1)
}