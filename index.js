
let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function() {
   let baseValue = inputEl.value
   
   const  meterToFeet = (3.281 * baseValue).toFixed(3);
   const feetToMeter = (baseValue / 3.281).toFixed(3);

   const literToGallon = (0.264 * baseValue).toFixed(3); 
   const gallonToLiter = (baseValue / 0.264).toFixed(3)

   const kilogramToPound = (2.204 * baseValue).toFixed(3);
   const poundToKilogram = (baseValue / 2.204).toFixed(3); 

   lengthEl.textContent = `${baseValue} meter = ${meterToFeet} feet | ${baseValue} feet = ${feetToMeter} meters `

   volumeEl.textContent = `${baseValue} liter = ${literToGallon} gallon | ${baseValue} gallons = ${gallonToLiter} liters `

   massEl.textContent = `${baseValue} kilos = ${kilogramToPound} pounds | ${baseValue} pounds = ${feetToMeter} kilos `
})

/*
const meterToFeet = 3.281 feet
const literToGallon = 0.264 gallon
const kilogramToPound = 2.204 pound
*/

/*convertBtn.addEventListener("click", function() {
   let baseValue = inputEl.value

   lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`

   volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue / literToGallon).toFixed(3)} liters`

   massEl.textContent = `${baseValue} kilogram = ${(baseValue * kilogramToPound).toFixed(3)} pound | ${baseValue} pound = ${(baseValue / kilogramToPound).toFixed(3)} kilogram`

})
*/
