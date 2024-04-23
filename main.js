bigote_x=0;
bigote_y=0;
function preload()
    {
        bigote=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    }

function setup()
    {
        canvas=createCanvas(300,300);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(300, 300);
        video.hide();
        poseNet=ml5.poseNet(video, modeLoaded);
        poseNet.on("pose", gotPoses);
    }

    function gotPoses(results)
    {
        if(results.length>0)
        {
            console.log(results);
            bigote_x=results[0].pose.nose.x-15;
            bigote_y=results[0].pose.nose.y+2;   
        }
    }

    function modeLoaded()
    {
        console.log("poseNet esta inicializado");
    }

    function draw()
    {
        image(video, 0, 0, 300, 300);
        image(bigote, bigote_x, bigote_y, 30, 30);
    }

    function take_snapshot()
    {
        save("foto_mi_flitro.png");
    }