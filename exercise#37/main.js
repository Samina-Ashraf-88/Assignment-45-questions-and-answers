function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "i love typescript"; }
    console.log("creating a ".concat(size, " size shirt with ").concat(printMessage, " printed on shirt."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love javascript");
