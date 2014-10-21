/***
 * file: blink.js
 * version: 1.0
 * author: https://github.com/andrea-83
 * license: mit
 * description: in this example the led on digital io SD13 of the DigitalIO Shield will 
 *      blink every 1 second.
 ***/
 
var linino = require('ideino-linino-lib'),
    board = new linino.Board();
    
    board.addShield('digitalio');

board.connect( function(){
    var ctrl = true;
    
    board.pinMode('SD13', 'output');
    setInterval(function(){
        if(ctrl)
            board.digitalWrite('SD13', board.HIGH);
        else
            board.digitalWrite('SD13', board.LOW);
        ctrl = !ctrl;
    },1000);
});