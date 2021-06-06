img = "";
objectDetect = "";
object = "";
function preload(){
img = loadImage("person.jpeg")
}
function setup(){
canvas =  createCanvas(640, 420)
canvas.center()
objectDetect = ml5.objectDetector('cocossd',modelLoaded)
}
function modelLoaded(){
    console.log("op in the chat ")
}
function draw(){
    image(img, 0, 0, 640, 420)
    objectDetect.detect(img, gotResult);
    for(i = 0; i < object.length; i++){
        document.getElementById("status").innerHTML = "Status :- {detected objects}";
        fill("#FF0000")
        percent = floor(object[i].confidence *100);
        text(object[i].label + " " + percent + "%", object[i].x, object[i].y)
        noFill()
        stroke("#FF0000")
        rect(object[i].x, object[i].y, object[i].width, object[i].height)
    }
}
function gotResult(error, results){
if(error){
console.error(error);
}
else{
    console.log(results);
    object = results;
}
}

