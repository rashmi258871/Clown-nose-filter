noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage("https://i.postimg.cc/DZDpHfg4/image-processing20201104-19485-1bcnn8g.png");
}                
function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
} 

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose,noseX-100,noseY-130,180,180);
}

function take_snapshot() {
save('myFilterImage.png');
}

function modelLoaded()
{
console.log('poseNet is initialized');
}

function gotPoses(results)
{
if(results.length > 0)
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y
console.log("nose y =" + noseX);
console.log("nose x =" + noseY);
}

