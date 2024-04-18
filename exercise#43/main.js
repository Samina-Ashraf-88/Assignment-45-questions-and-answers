function show_magicians(magicians) {
    magicians.forEach(function (name) {
        return console.log(name);
    });
}
function make_great(magicians) {
    return magicians.map(function (names) {
        return "the great ".concat(names);
    });
}
var magician_names = ["harry", "hermoine", "ron"];
var copy_magician_names = magician_names.slice();
var copy_great_magicians = make_great(copy_magician_names);
show_magicians(magician_names);
show_magicians(copy_great_magicians);
