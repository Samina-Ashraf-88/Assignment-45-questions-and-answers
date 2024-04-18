function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (names) { return "the great ".concat(names); });
}
var magician_names = ["harry", "hermoine", "ron"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
