var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favouritePlaces = ["khana-e-kaaba", "madina", "uk", "egypt"];
console.log(favouritePlaces);
console.log(__spreadArray([], favouritePlaces, true).sort());
console.log(favouritePlaces);
console.log(__spreadArray([], favouritePlaces, true).reverse());
console.log(favouritePlaces);
console.log(favouritePlaces.reverse());
console.log(favouritePlaces.reverse());
console.log(favouritePlaces.sort());
console.log(favouritePlaces.reverse());
