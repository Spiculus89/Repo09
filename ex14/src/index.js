// Only change code below this line
function myForLoop1 () {
    var evenNumbers = "";
    for (var i=0; i < 10; i+=2) {
        evenNumbers += i + ", ";
    }
    evenNumbers = evenNumbers.slice(0, -2);
    return evenNumbers;
}
function myForLoop2 () {
    var evenInverseNumbers = "";

    for (var i=8; i >= 0; i-=2) {
        evenInverseNumbers += i + ", ";
    }
    evenInverseNumbers = evenInverseNumbers.slice(0, -2);
    return evenInverseNumbers;
}
console.log(myForLoop1())
console.log(myForLoop2())
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};