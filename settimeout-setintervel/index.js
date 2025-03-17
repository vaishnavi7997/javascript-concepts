console.log("start");

console.log("end");

const timerId = setTimeout(function () {
    console.log("5 sec completed");  
    clearInterval(intervalId); 
},5000);


cancelBtn.addEventListener('click',function() {
    console.log("clicked");
    clearTimeout(timerId);
         
});

let counter = 1;
const intervalId = setInterval(function(){
    console.log("1 sec completed", counter);
    counter++;
}, 1000);