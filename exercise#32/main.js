var current_users = ["usman", "ali", "areeba", "zain", "osama"];
var new_users = ["hamza", "ayesha", "ali", "mahad", "areeba"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) {
        return current_one_user.toLowerCase() === new_one_user.toLowerCase();
    });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this user_name ".concat(new_one_user, " is available"));
    }
});