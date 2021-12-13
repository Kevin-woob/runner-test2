const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
const audioPaths = [
    "path/to/audio_file1.wav",
    "path/to/audio_file2.wav",
    "path/to/audio_file3.wav"
];
let promises = [];


// utility function to load an audio file and resolve it as a decoded audio buffer
function getBuffer(url, audioCtx) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("Missing url!");
            return;
        }

        if (!audioCtx) {
            reject("Missing audio context!");
            return;
        }

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "arraybuffer";

        xhr.onload = function() {
            let arrayBuffer = xhr.response;
            audioCtx.decodeAudioData(arrayBuffer, decodedBuffer => {
                resolve(decodedBuffer);
            });
        };

        xhr.onerror = function() {
            reject("An error occurred.");
        };

        xhr.send();
    });
}


audioPaths.forEach(p => {
    promises.push(getBuffer(p, ctx));
});


// Once all your sounds are loaded, create an AudioBufferSource for each one and start sound
Promise.all(promises).then(buffers => {
    buffers.forEach(b => {
        let source = ctx.createBufferSource();
        source.buffer = b;
        source.connect(ctx.destination);
        source.start();
    })
});