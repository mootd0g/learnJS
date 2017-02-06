'use strict'

function makeLogging(f, log) {

    return function() {
        [].forEach.call(arguments, function(currentElement) {
            log.push(currentElement);
        });

        return f.apply(null, arguments);
    }
}

// выводит массив удвоенных аргументов
function double() {
    return [].map.call(arguments, function(currentElement) {
        return currentElement * 2;
    });
}

var logArray = [];

var doubleWthLogging = makeLogging(double, logArray); 

console.log( doubleWthLogging(2, 3, 4, 5) );
console.log( logArray );
