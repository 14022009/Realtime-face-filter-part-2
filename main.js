function preload() {

}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();
    canvas.position(283, 220)
    video = createCapture(VIDEO);
    // video.position(383, 260);
    video.position(383, 260);
    video.hide();
    posenet = ml5.poseNet(video, modalloded);
    posenet.on('pose', gotresult);
}

function draw() {
    image(video, 0, 0, 800, 600);
}

function take_and_download_snapshot() {
    save("Filtered_Image.png")
}

function modalloded() {
    console.log("PoseNet Loded");
}

function gotresult(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("Nose X =" + result[0].pose.nose.x);
        console.log("Nose Y =" + result[0].pose.nose.y);
    }
}