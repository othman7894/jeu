alert("hello world !");

// commentaire sur une ligne

/* commentaire de type bloc*/

/* Les variables */

var a = 2;
var b = 5;

var result = a + b;


// console.log(typeof(result), result);



/* Booleans */

var vrai = true;
var faux = "false";


/* Forcer le type d'une variable caster) */

var str = "37";
var num = parseInt(str);


/* Échappement */

var str = 'L\'espace';

/* Les fonctions */

var sayhello = function(name){
  alert("Whaou" + " " + name);
};
sayhello("othman");

function sayhello2 (name){
  alert("hello" + name);
}

var addOne = function(n){
  return parseInt(n) + 1;
};
var res = addOne(12);
// console.log(res);

//  boucle for
for(var i = 0; i < 10; i++){
//  console.log(i);
};

// boucle While
var i = 0;
while(i < 10){
  //console.log(i);
  i++;
}

//  boucle DO while
var i = 0;
do{
  //console.log(i);
  i++;
}while(i < 10);

// tableau
var fruits = [
  "Banane",
  "Cerise",
  "Fraise",
   "Citron",
 ];


var displayFruits = function(arr){
  var str = "";
  str += "<ul>";
for(var i = 0; i < arr.length; i++){
  str += "<li>" + arr[i] + "</li>";
}
  str += "</ul>";
  document.body.append(str);
};
displayFruits(fruits);


var users = {
  "user1": {
    "firstname": "Glenn",
    "surname": "Le Gac",
    "age": 29,
    "role": "Formateur"
  },
  "user2": {
    "firstname": "John",
    "surname": "Doe",
    "age": 99,
    "role": "Inconnu"
  },
};
alert(users.user1.firstname);

var displayUsers = function(arr){
  for(var key in arr){   // key je peux l'appeler comme je veux et arr aussi
if (arr.hasOwnProperty(key)){

    var pFirstName = document.createElement('p');
      var pSurName = document.createElement('p');
        var pAge = document.createElement('p');
          var pRole = document.createElement('p');

          var firstNameTxt = document.createTextNode("Prénom: " + arr[key].firstname);
          var surNameTxt = document.createTextNode("Nom: " + arr[key].surname);
          var ageTxt = document.createTextNode("Age: " + arr[key].age);
          var roleTxt = document.createTextNode("Rôle: " + arr[key].role);

          pFirstName.append(firstNameTxt);
          pSurName.append(surNameTxt);
          pAge.append(ageTxt);
          pRole.append(roleTxt);

          document.body.append(pFirstName);
          document.body.append(pSurName);
          document.body.append(pAge);
          document.body.append(pRole);

          document.write("<br>");
  }
}
};
displayUsers(users);
