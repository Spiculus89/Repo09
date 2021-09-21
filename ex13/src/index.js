// Only change code below this line
    function inverseWhile() {
        var i = 5;
        var fiveNumbers = "";
        while (i > 0) {
            fiveNumbers += i + ",";
            i--;
        }
        fiveNumbers = fiveNumbers.slice(0, -1);
        return fiveNumbers;
    }
    
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;