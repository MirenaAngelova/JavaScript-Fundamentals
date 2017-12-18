function nowPlaying(array) {
    let [trackName, artistName, duration] = array;
    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`);
}
nowPlaying(['Number One', 'Nelly', '4:09']);