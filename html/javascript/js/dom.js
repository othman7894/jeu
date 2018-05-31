// var square1 = document.getElementsByClassName('square1')[0];
// var square2 = document.getElementsByClassName('square2')[0];
//
//  square1.style.backgroundColor = "blue";
// posiionnement du flag, c'est pour connaitre letat 2 cas possible vai ou faux le nom 'toogle' est libre
// toogle = false;

// // selection de l'element button par son "id" le nom btn est libre
//  var btn = document.getElementById('toogle');
// // // déclenchement d'une fonction sur l'evenement "clic"
//  btn.onclick = function(){
//   toogleThis ();
//  }
//
//  var toogleThis = function(){
//    toogle = !toogle;
//
//   var square1 = document.getElementsByClassName('square1')[0];
//    var square2 = document.getElementsByClassName('square2')[0];
//
//   if(toogle){
//      square1.style.backgroundColor = "green";
//     square2.style.backgroundColor = "red";
//    }else{
//       square1.style.backgroundColor = "red";
//       square2.style.backgroundColor = "green";
//   }
//    return;
//  }


// colorer les paragraphe en rouge 1/2
var para = document.getElementsByTagName("p");

for(var i = 0; i < para.length; i++){
  if(!(i % 2)){
    para[i].style.color = "red";
  }

para[i].onmouseover = function(){
  this.style.backgroundColor = "yellow";
}
para[i].onmouseout = function(){
  this.style.backgroundColor = "white";
}
}
