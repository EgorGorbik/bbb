const changeTimeFormat = (seconds) => {
    let minutes = Math.trunc(seconds / 60);
    seconds = Math.trunc(seconds % 60);
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    if(seconds < 10) {
        seconds = '0' + seconds
    }
    return minutes + ':' + seconds;
}

export default changeTimeFormat;