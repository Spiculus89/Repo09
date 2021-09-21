// Only change code below this line
    function myDoWhile() {
        var i = 0;
        var myNumbers = '';
        do {
            myNumbers += i + ", ";
            i++;
        }   while (i < 10);
        myNumbers = myNumbers.slice(0, -2);
        return myNumbers;
    }
console.log(myDoWhile())
// Only change code above this line
module.exports = myDoWhile;