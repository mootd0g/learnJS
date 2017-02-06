'use strict'

var timers = {}; // объект для хранения таймеров 

function logging() {
    console.log( 'Я сделаль' );
}

// func, название тайьера
function timingDecorator(func, timerName) {

    return function() {
        var start = performance.now();

        var returnValue = func.apply(null, arguments);
        timers[timerName] = performance.now() - start;

        return returnValue;
    }
}

var f = timingDecorator(logging, "first timer");

f();
