/*jshint esversion: 6 */

var line = "";
var size = 8;
let x = 1;

for (var i = 1; i <= size; i++){
    if (i % 2 == 0){
        for(var j = 1; j < 5; j++){
            line+='# ';

        }
        console.log(line);
        line="";
    }
    else {
        for(var j = 1; j < 5; j++){

            line+=' #';

        }
        console.log(line);
        line = "";
    }
}