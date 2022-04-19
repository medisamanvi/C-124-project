function setup(){
    canvas=createCanvas(550,550)
    canvas.position(590,100)
    video=createCapture(VIDEO);
    video.size(550,550)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function draw(){
    background("#969A97")
}

function modelLoaded(){
    console.log("poseNet is intialised")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}