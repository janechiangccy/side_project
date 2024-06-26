/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(height){
    var Triangle = '';
    for ( var i = 1; i <= height; i++){
        Triangle = Triangle + makeLine(i);
    }
    return Triangle;
}
console.log(buildTriangle(10));
// test your code by uncommenting the following line
//console.log(buildTriangle(10));
