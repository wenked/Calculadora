const boxValue = document.getElementById('boxValue')
const oneButton = document.getElementById('oneButton')
const twoButton = document.getElementById('twoButton')
const threeButton = document.getElementById('threeButton')
const oprPlus = document.getElementById('oprPlus')
const oprMinus = document.getElementById('oprMinus')
const oprEqual = document.getElementById('oprEqual')
const oprClear = document.getElementById('oprClear')


// GERA OPERAÇÕES
const clearOpr = () => {
    boxValue.value = ''
}


const generateOprPlus = () => {
    boxValue.value += oprPlus.value 
    console.log(boxValue.value) 
}

const generateOprMinus = () => {
    boxValue.value += oprMinus.value 
    console.log(boxValue.value) 
}
const equalOpr = () => {
    let result = boxValue.value.split('')
    if(result.includes('+')){
        result = boxValue.value.split('+').map(Number).reduce((acc,value) => acc+value,0)
        boxValue.value = result

    }else if(result.includes('-')){
        result = boxValue.value.split('-').map(Number).reduce((acc,value) => acc-value)
        console.log(result)
        boxValue.value = result

    }else if(result.includes('*')){
        result = boxValue.value.split('*').map(Number).reduce((acc,value) => acc*value,0)
    }else if(result.includes('/')){
        result = boxValue.value.split('/').map(Number).reduce((acc,value) => acc/value,0)
    }
    
    //result = boxValue.value.split('+').map(Number).reduce((acc,value) => acc+value,0)
    //console.log(result)

}

// GERA NÚMEROS
const generateNum1 = () => boxValue.value += oneButton.value
const generateNum2 = () => boxValue.value += twoButton.value
const generateNum3 = () => boxValue.value += threeButton.value
const generateNum4 = () => boxValue.value += fourButton.value
const generateNum5 = () => boxValue.value += fiveButton.value
const generateNum6 = () => boxValue.value += sixButton.value
const generateNum7 = () => boxValue.value += sevenButton.value
const generateNum8 = () => boxValue.value += eightButton.value
const generateNum9 = () => boxValue.value += nineButton.value
const generateNum0 = () => boxValue.value += zeroButton.value