
console.log("time to start the timer!");
let timeElapsed = 0;
let myTimer = 0;

function start() {
    myTimer = setInterval(function(){
        timeElapsed += 1;
         document.getElementById("time").innerText = timeElapsed;
    }, 1000) ;

}
function stop() {
    clearInterval(myTimer);
}
function reset() {
   timeElapsed = 0;
   clearInterval(myTimer);
   document.getElementById("time").innerHTML = timeElapsed;
}
