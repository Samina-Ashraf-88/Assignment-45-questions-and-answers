var userNames = ["mahad", "ali", "zeeshan", "admin", "usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("Hello ".concat(oneUser, ", admin, would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
