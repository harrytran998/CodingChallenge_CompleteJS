/**
 * 
 * @param {Number} value 
 */
Number.prototype.plus = function (value) {
    return this.valueOf() + parseInt(value);
};

var age = Number(12);
console.log(age.plus(12) + "\n");

/**
 * @param {Number} value 
 */
Boolean.prototype.checkGAY = function (value) {
    return value == 69 ? 1 : 0;
};