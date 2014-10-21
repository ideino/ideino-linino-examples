/***
 * file: blink-double.js
 * version: 1.0
 * author: https://github.com/quasto
 * license: mit
 * description: in this example the shield leds will blink alternate every 1 second .
 ***/
 
var linino = require('ideino-linino-lib'),
    board = new linino.Board();
    board.addShield('lucky');
    
board.connect( function(){
    var LED1 = board.pin.digital.LED1,
        LED2 = board.pin.digital.LED2,
        ctrl = Number(true);
    
    board.pinMode('LED1', board.MODES.OUTPUT);
    board.pinMode('LED2', board.MODES.OUTPUT);
    
    setInterval(function(){
        
            board.digitalWrite('LED1', ctrl);
            board.digitalWrite('LED2', ctrl);
            ctrl = Number(!ctrl);
            
    },1000);
});