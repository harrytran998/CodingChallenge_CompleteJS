// var domainInfo = {
//     name: 'freetuts.net',
//     setName: function (name) {
//         this.name = name;
//     }
// };

// // Hàm có tham số callback
// function test(callback, callbackObject) {
//     var name = "Nguyễn Văn Cường";
//     callback.apply(callbackObject, [name]);
// }

// // Gọi đến hàm và truyền hàm callback vào
// test(domainInfo.setName, domainInfo);

// // Kết quả: Nguyễn Văn Cường
// console.log(domainInfo.name);
//--------------------------------------------------------------------------------------------------------
var allUserData = [];
// generic logStuff function that prints to console
function logStuff(userData) {
    if (typeof userData === "string") {
        console.log(userData);
    } else if (typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }

}
// A function that takes two parameters, the last one a callback function
function getInput(options, callback) {
    allUserData.push(options);
    callback(options);

}
// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput({
    name: "Rich",
    speciality: "JavaScript"
}, logStuff);