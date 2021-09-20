var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
  recognition.start();
}
recognition.onresult=function(event)
{
console.log(event);
var content = event.result[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content);
if(content=="take my selfie")
{
  console.log("Selfie Loading...");
  speak(); 
}  
}

function speak()
{
  synth=window.speechSynthesis;
  var speakdata=document.getElementById("textbox").value;
  var utterthis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);
Webcam.attacch(camera);
settimeout(function(){
  takesnapshot();
  save();
},5000);
  

}

Webcam.set(
  {
    width:360,height:255,image_format:'png',png_quality:90
  }
);
camera=document.getElementById("camera");

function takesnapshot()
{
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfieimg" src=" '+data_uri+' ">'
  })
}
function save()
{
  link=document.getElementById("link");
  Image=document.getElementById("selfieimage").src;
  link.href=Image;
  link.click();
}