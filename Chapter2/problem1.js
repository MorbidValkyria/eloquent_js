var square = function(x){
    return x * x;
};

console.log(square(12));

var makeNoise = function(){
    console.log("Pling!");
};

makeNoise();

var power = function(base, exponent){
    var result = 1;
    for(var count = 0; count < exponent; count++ )
        result*=base;
    return result;
};

console.log(power(9, 2));

var landscape = function(){
    var result = "";
    var flat = function(size){
        for(var count = 0; count < size; count++)
            result+="_";
    };

    var mountains = function(size){
        result+="/";
        for(var count = 0; count < size; count++)
            result+="'";
        result+="\\";
    };
    flat(4);
    mountains(6);
    flat(2);
    mountains(2);
    return result;
};
console.log(landscape());
