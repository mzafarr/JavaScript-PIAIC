make_album = (artist, albumTitle, noOfTracks) => {
    return {
        artist: artist,
        albumTitle: albumTitle,
        noOfTracks: noOfTracks || ''
    }
}
console.log(make_album('name1', 'title1'))
console.log(make_album('name2', 'title2'))
console.log(make_album('name3', 'title2', 3))