function setup(){
    canvas = createCanvas(450, 450)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}
song = "";

function play(){
   song.play()
}
function preload(){
    song = loadSound("hp.mp3")  
}
function draw(){
    image(video, 0, 0, 450, 450)
}
