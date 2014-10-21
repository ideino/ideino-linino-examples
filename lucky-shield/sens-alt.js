/***
 * file: sens-alt.js
 * version: 1.0
 * author: https://github.com/quasto
 * license: mit
 * description: read data from the altimeter / pressure sensor on the lucky shield through i2c bus.
 ***/
 
var linino = require('ideino-linino-lib'),
    board = new linino.Board();
    board.addShield('lucky');

board.connect( function(){
    
    board.i2cRead('ALT', 'in_pressure_raw', {sampling: 5000}, function(value){
        console.log("Pressure Raw: " + value); 
        var p0 = 101325;
        var pressure = value;

        var altitude = 44330.77 * (1 - (Math.pow(pressure/p0), 0.1902632) * 0.00025);
        console.log(altitude*0.00025);
    });
    
});