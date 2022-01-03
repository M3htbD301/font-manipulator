leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,550);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized")
}

function draw() {
    background("#90C3C8");
    textSize(50);
    fill("#54426B");
    text("Change My Color",75, 300);
}
function gotPoses(results) {
if (results.length>0) {
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    textSize(difference);
}
}
