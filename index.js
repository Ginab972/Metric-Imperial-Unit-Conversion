/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let value = ""
let length = 0
let volume = 0
let mass = 0

const $ = (elem) => {
    return document.getElementById(elem)
}


const inputVal = $('input-value')
const valueEl = $('value-el')
const lengthEl = $('length-el')
const volumeEl = $('volume-el')
const massEl = $('mass-el')
const gBtn = document.getElementById("gBtn")

gBtn.addEventListener('click', (e) => {
    if(!inputVal.value || inputVal.value == "")
        value = ""
    else
        value = parseFloat(inputVal.value)
   
    convert()
})

function reloadThePage(){
    window.location.reload();
} 


function convert(){
    lengthEl.textContent = `${value} meters = ${meterToFeet(value)} feet | ${value} feet = ${feetToMeter(value)} meters`
    
    volumeEl.textContent = `${value} liters = ${gallonToLiter(value)} gallons | ${value} gallons = ${literToGallon(value)} liters`
    
    massEl.textContent = `${value} kilos = ${kilogramToPound(value)} pounds | ${value} pounds = ${poundToKilogram(value)} kilos`
}

function meterToFeet(mts){
    return (mts * 3.281).toFixed(3)
}
function feetToMeter(feet){
    return (feet / 3.281).toFixed(3)
}

function gallonToLiter(gallon){
    return (gallon / 3.785).toFixed(3)
}
function literToGallon(liter){
    return (liter * 3.785).toFixed(3)
}

function kilogramToPound(kilogram){
    return (kilogram * 2.205).toFixed(3)
}
function poundToKilogram(pound){
    return (pound / 2.205).toFixed(3)
}


convert()