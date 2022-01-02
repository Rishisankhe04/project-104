Webcam.attach("#camera");
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg", 
    jpeg_quality:90
});
function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5ED1gGwIL/model.json", modelloaded);
function modelloaded(){
    console.log("model loaded");
}