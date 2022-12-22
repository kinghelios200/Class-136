noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Posenet Is Initialized!");
}

function draw(){
    background("#FFBF00");
    fill("#87CEEB");
    stroke("#87CEEB");
    square(noseX, noseY, difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWrist" + leftWrist + "rightWrist" + rightWrist + "difference" + difference);
        document.getElementById("square_sides").innerHTML = "Width & height of the square is = " + difference
    }
}