function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,550);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialiezed")
}

function draw() {
    background("#90C3C8");
}
function gotPoses(results) {
if (results.length>0) {
    console.log(results);
}
}