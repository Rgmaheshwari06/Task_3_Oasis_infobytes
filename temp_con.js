let celciusInput = document.querySelector('#celcius > input')
let FahrenheitInput = document.querySelector('#Fahrenheit > input')
let KelvinInput = document.querySelector('#Kelvin  > input')

let btn=document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input',function(){
    let c = parseFloat(celciusInput.value)
    let f = c * (9/5) + 32
    let k = c + 273.15
    FahrenheitInput.value = roundNumber(f)
    KelvinInput.value = roundNumber(k) 
    
})

FahrenheitInput.addEventListener('input',function(){
    let f = parseFloat(FahrenheitInput.value)
    let c = (f-32) * (5/9)
    let k = (f-32) * (5/9) +273.15
    celciusInput.value = roundNumber(c)
    KelvinInput.value = roundNumber(k)
    
})

KelvinInput.addEventListener('input',function(){
let k = parseFloat(KelvinInput.value)
let c = k - 273.15
let f = (k - 273.15) * (9/5) + 32 
celciusInput.value = roundNumber(c)
FahrenheitInput.value = roundNumber(f)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    FahrenheitInput.value = ""
    KelvinInput.value = ""
})