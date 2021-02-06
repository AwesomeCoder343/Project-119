
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9mzun0lHT/model.json', modelLoaded);
}
function draw(){
image(video, 0,0,300,300)

classifier.classify(video, gotResults);
}
function modelLoaded(){
    console.log("model loaded");
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        console.log(results[0].label);
        console.log(results[0].confidence*100);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy_name").innerHTML=floor(results[0].confidence*100)+"%";
    }
}