let input;
var something = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()-=_+[]\{}|;':,./<>?";
console.log(something.length);
let img;
var width1 =60;
var width2 =window.innerWidth;
var ah=false;
var Base =[];
function setup() {
  input = createFileInput(handleFile);
  input.class="btn";
  var c = createCanvas(width2,width2);
}

var i =0;
function draw() {
  
  if (img) {
      if(i==10){
         loadPixels();
         getPixels();
         
      }
      i++;
      if(ah==false){
        background(255);
            image(img, 0, 0, width1, width1);
      }if(ah==true){
          
           
      }
    filter(THRESHOLD);
  }
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}
function getPixels(){
    var f =0;
    var pix =[];
    var d = true;
    for(var i =0;i<width1;i++){
        for(var j =0;j<width1;j++){
            if((get(i,j)[0]==255)){
                pix[f]=1;
            }else{
              pix[f]=0;
            }
            f++;
        }
    }
    print(pix);
    ah=true;
    drawpix(pix);
}
function drawpix(pix){
    background(255);
    var h =0;
    var t =1;
    for(var i =0;i<width1;i++){
        for(var j =0;j<width1;j++){
          addToArray(pix[h]);
          h++;
        }
    }
    dPix2();
    console.log(pix);
    console.log(Base);
}
function dPix2(){
  noStroke();
  background(255);
  var t = Base[0];
  print(t);
  var switch1 =0;
  var f =1;
/*if(pix[h]==1){
            fill(255);
            rect(i,j,1,1);
          }else if(pix[h]==0){
           fill(0);
           rect(i,j,1,1);
          }
          */
         for(var i =0;i<width1;i++){
            for(var j =0;j<width1;j++){
              fill(255*(t%2));
              rect(i*(width2/width1),j*(width2/width1),1*(width2/width1),1*(width2/width1));
              switch1++;
              if(Base[f]==switch1){
                f++;
                t++;
                switch1=0;
              }
            }
         }
         
         
       Stringify();  
}
var f =0;
function addToArray(t){
    if(f==0){
      if(t==1){
        Base[f]=1;
        f++;
        Base[f]=1;
      }else{
        Base[f]=0;
        f++;
        Base[f]=1;
      }
    }else{
      if((f+Base[0]+1)%2==t){
        Base[f]++;
      }else{
        f++;
        Base[f]=1;
      }
    }
}
var characters="";
function Stringify(){
  characters="";
  for(var i =0;i<(Base.length-1);i++){
  if(Base[i]>89){
    characters+=something[(Math.floor(Base[i]/90))];
    characters+=" ";
    characters+=something[Base[i]%90];
    
  }
  else{
    characters+=something[Base[i]];
  }
  
}
  characters+="0";
  var f = document.getElementById("b");
  f.value=characters;
}
function yfignirtS(){
  var f =0;
  for(var i =0;i<characters.length;i++){
    if(characters[i]==" "){
      Base[f-1]=(90*(something.indexOf(characters[i-1]))+something.indexOf(characters[i+1]));
      i++;
    }else{
      Base[f]=something.indexOf(characters[i]);
      f++;
    }
  }
  dPix2();
}
function go(){
  console.log("HEY");
  var f = document.getElementById("b");
  characters=f.value;
  console.log(characters);
  yfignirtS();
}
function mouseDragged() {
  fill(0);
  ellipse(mouseX,mouseY,50,50);
}
function UpdateMap(){
  saveCanvas();
}
function test(){
  c = canvas.toDataURL()
  img = createImg(c,'');
  img.hide();
}