function setup()
{
video = createCanvas(VIDEO);
video.size = (500,500);
canvas = createCanvas(500,500);
canvas.position(500,500);

poseNet = ml5.poseNet(video, modelLoaded);
}

function draw()
{
    background('#A1FC7B');
}

function modelLoaded(results)
{
    if (results > 0)
    {
        console.log(results);
    }
}

