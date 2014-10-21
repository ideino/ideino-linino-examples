/***
 * file: button.js
 * version: 1.0
 * authors: https://github.com/andrea-83
 * license: mit
 * description: in this example there is a button connected at digital pin SD2 of the DigitalIO Shield (IN3 Button).
 *      when the button is pressed the led on DigitalIO Shield (digital pin SD15) will turn on, 
 *      when the button is released the led will turn off.
 ***/
 
 
var linino = require('ideino-linino-lib'),
    board = new linino.Board({logger: {level:'debug'}});

board.addShield('digitalio');
        
board.connect( function(){
    
    board.pinMode('SD13', 'output');
    board.pinMode('SD2', 'input');
 
    board.digitalRead('SD2', function(value){
        board.digitalWrite('SD13',value);
    });    
});