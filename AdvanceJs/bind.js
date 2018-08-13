// var blog = {
//     domain: "freetuts.net",
//     author: "Nguyễn Văn Cường",
//     showWebsite: function (callbackFunction) {
//         callbackFunction();
//     },
//     render: function () {
//         var main = this;
//         this.showWebsite(function () {
//             console.log(main); // là đối tượng window
//             console.log(main.domain); // nên thuộc tính domain không tồn tại
//             console.log(main.author); /// nên thuộc tính author không tồn tại
//         });
//     }
// };

// blog.render();

var blog = {
    domain: "freetuts.net",
    author: "Nguyễn Văn Cường",
    showWebsite: function (callbackFunction) {
        callbackFunction();
    },
    render: function () {
        this.showWebsite(function () {
            console.log(this); // là đối tượng this
            console.log(this.domain); // ok
            console.log(this.author); /// ok
        }.bind(this));
    }
};

var blog2 = {
    showWebsite: function (callbackFunction) {
        callbackFunction();
    },
    render: function () {
        this.showWebsite(function () {
            console.log(this); // This chính là mảng truyền vào
        }.bind(["freetuts.net", "thehalfheart@gmail.com"]));
    }
};
blog.render();