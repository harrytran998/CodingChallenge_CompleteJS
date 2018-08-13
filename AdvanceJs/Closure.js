// var kanji = 100;

// function lear() {
//     var kanji = "";
//     var quantity = 100;
//     return {
//         set: function (kanjis, quantitys) {
//             kanji = kanjis;
//             quantity = quantitys;
//         },
//         getKanji: function () {
//             return kanji;
//         },
//         getQuantity: function () {
//             return quantity;
//         }
//     };
// }
// var listKanji = lear();
// listKanji.set('xxxx', 1000);
// console.log(listKanji.getQuantity());
// console.log(listKanji.getKanji());


// var x = showMessage();
// x();
/*
function retirement(retirementAge) {
    var a = 'Fuck';
    return function (yearOfBirh) {
        var age = 2018 - yearOfBirh;
        console.log((retirementAge - age) + ' ' + a);
    };
}

var retirementUs = retirement(60)(1998);
*/
/**
 * 
 * @param {String} money 
 */
function buyABitch(money) {
    if (money < 100) {
        return function (weight, face) {
            // if (weight < 150 && face.localeCompare('Good')) {
            //     return function (name, time) {
            //         console.log("You bought successful a BITCH");
            //         console.log("Information Bitch : ");
            //         console.log("Name : " + name +
            //             " , Time engagement : " + time +
            //             "The Weight : " + weight +
            //             "Shape Face : " + face +
            //             "Money  : " + money);
            //     };
            // }
        };
    }
}
var bitch = buyABitch(80)(150, 'Good');
//(149, 'Good')('Maria Ozawa', '1000 days !')