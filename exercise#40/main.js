function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("hamza", "album title 1");
var album2 = make_album("usman", "album title 2");
var album3 = make_album("ali", "album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
