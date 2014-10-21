/***
 * file: sens-mag.js
 * version: 1.0
 * author: https://github.com/quasto
 * license: mit
 * description: read data from the magnetometer sensor on the lucky shield through i2c bus.
 ***/
 
var linino = require('ideino-linino-lib'),
    board = new linino.Board();
    board.addShield('lucky');

board.connect( function(){
    
    var x = 0; y = 0, z = 0;
    
    board.i2cRead('MAG', 'in_magn_x_raw', {sampling: 500}, function(value){
        x = value; 
    });
    board.i2cRead('MAG', 'in_magn_y_raw', {sampling: 500}, function(value){
        y = value;
    });
    board.i2cRead('MAG', 'in_magn_z_raw', {sampling: 500}, function(value){
        z = value;
    }); 
    
    setInterval(function(){
        console.log("X: "+ x + " | Y: " + y + " | Z :" + z);
    },1000);
    
});