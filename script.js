/*eslint-env es6*/

const video = document.getElementById('video');
let captureImage = document.getElementById('screenshot');
let godMode = document.getElementById('AI')
let refreshScore = document.getElementById('refresh');

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

startVideo()

captureImage.addEventListener('screenshot', function(){
    video.srcObject = stream;
})

var image 
