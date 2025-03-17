const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const incrementBy5 = document.getElementById("incrementBy5");
const decrementBy5 = document.getElementById("decrementBy5");
const reset = document.getElementById("resetBtn");
const resultElement = document.getElementById('result');

console.log(incrementBtn);
let counter = 0;
incrementBtn.addEventListener('click',function() {
    console.log("clicking");
    counter = counter + 1;
    resultElement.textContent = counter;
});
decrementBtn.addEventListener('click',function(){
    if (counter > 0) {
        counter = counter - 1;
    }
    resultElement.textContent = counter;
});
incrementBy5.addEventListener('click', function() {
    counter = counter + 5;
    resultElement.textContent = counter;
});
decrementBy5.addEventListener('click',function(){
    if (counter > 0) {
        counter = counter - 5;
    }
    resultElement.textContent = counter;
});
resetBtn.addEventListener('click', function() {
    counter = 0
    resultElement.textContent = counter;
})
console.log("remaing thing");