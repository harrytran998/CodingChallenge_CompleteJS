// var Nhat = {
//     fullName: 'Tran Quang Nhat',
//     Age: 20,
//     hadGirlFriend: 'No',
//     presentation: function (style) {
//         if (style === 'freak') {
//             console.log(this.fullName + ', ' + this.Age +
//                 ' age and ' + this.hadGirlFriend + ' Girlfriend');
//         }
//     }
// };

// var Girlfriend = {
//     fullName: '............',
//     Age: 18,
//     hadGirlFriend: 'Yes'
// };

// Nhat.presentation.call(Girlfriend, 'freak');

//-----------------------------------------------------
var years = [1990, 1993, 1996, 1999, 2001, 2004];
/**
 * 
 * @param {Array} arr 
 * @param {Boolean} fn 
 */
function arrayCal(arr, fn) {
    var arrTemp = [];
    for (let i = 0; i < arr.length; i++) {
        arrTemp.push(fn(arr[i]));
    }
    return arrTemp;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCal(years, calculateAge);
var fulljapan = arrayCal(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fulljapan);