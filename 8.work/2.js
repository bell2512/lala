// let Start = document.getElementById("Start");
// let Stop = document.getElementById("Stop");
// let input = document.getElementById("input");
// Start.onclick = function set(){
//     let time = 5;
//     time --;
//     setInterval(function(){ alert(time); }, 1000);
// }
// Stop.onclick = function clear(){
//     clearInterval(function(){ alert(time)})
// }
// if(time === 0 ) clear();

function Counter(options) {
    var timer = document.getElementById("input");
    var instance = this;
    var seconds = options.seconds || 10;
    var onUpdateStatus = options.onUpdateStatus || function() {};
    var onCounterEnd = options.onCounterEnd || function() {};
    var onCounterStart = options.onCounterStart || function() {};

    function decrementCounter() {
        onUpdateStatus(seconds);
        if (seconds === 0) {
            stopCounter();
            onCounterEnd();
            return;
        }
        seconds--;
    };

    function startCounter() {
        onCounterStart();
        clearInterval(timer);
        timer = 0;
        decrementCounter();
        timer = setInterval(decrementCounter, 1000);
    };

    function stopCounter() {
        clearInterval(timer);
    };

    return {
        start : function() {
            startCounter();
        },
        stop : function() {
            stopCounter();
        }
    }
};