let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")

let count = 0
let sum = 0

function increment() {
    count += 1
    countEl.textContent = count
}

//create save() function to save the count
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    sum += count
    countEl.textContent = 0
    count = 0
}
function calculateSum() {
    sumEl.textContent = sum
}