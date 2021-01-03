/* page contact */

function valider(){
    
    var a = document.getElementById("email").value.indexOf("@")
    
    var b = document.getElementById("email").value.indexOf(".",a+2)
    
    if (document.getElementById("nom").value == ""){
        alert('Please, fill the field : "Last name".')
}
    else if (document.getElementById("prenom").value == ""){
        alert('Please, fill the field : "First name".')
    }
    
    else if (document.getElementById("email").value == ""){
        alert('Please, fill the field : "Mail address".')
    }
    
    else if (document.getElementById("email").value.indexOf("@") == -1){
        alert("The mail address is not valid.")
    }
    
    else if (document.getElementById("email").value.indexOf(".",a+3) == -1){
        alert("The mail address is not valid.")
    }
    
    else if (document.getElementById("email").value.substring(b+2, b+3) == ""){
        alert("The mail address is not valid.")
    }    
    
    else if (document.getElementById("message").value == ""){
        alert("Please, enter a message into the message area.")
    }
    
    else if (document.getElementById("donnees").checked == false){
        alert("Please, check the box about your personal data.")
    }
    
    else{
    document.getElementById("formulaire").innerHTML="Thanks for contacting me ! I will answer you as soon as I can."
    
    }
}

function check(){

    if((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 61 || event.keyCode > 122) && event.keyCode != 45 && event.keyCode != 8 && event.keyCode != 16) {
        event.returnValue = false; 
    }
}

function checkNum(){

    if((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !=8 && event.keyCode != 16) {
        event.returnValue = false; 
       }
}

/* page competences */

function devWeb() {
    var elem = document.getElementById("devWeb");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function dev() {
    var elem = document.getElementById("dev");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function data() {
    var elem = document.getElementById("data");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function env() {
    var elem = document.getElementById("env");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function res() {
    var elem = document.getElementById("res");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function intellij() {
    var elem = document.getElementById("intellij");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function php() {
    var elem = document.getElementById("php");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function pycharm() {
    var elem = document.getElementById("pycharm");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 68) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function trello() {
    var elem = document.getElementById("trello");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function git() {
    var elem = document.getElementById("git");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function brackets() {
    var elem = document.getElementById("bra");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function word() {
    var elem = document.getElementById("word");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function powerpoint() {
    var elem = document.getElementById("point");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function excel() {
    var elem = document.getElementById("excel");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 65) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}


function scroll() {
  if ((document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) && count == 0) {
      devWeb();
      dev();
      data();
      env();
      res();
      intellij();
      count++;
  }
  else if ((document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) && count1 == 0) {   
      php();
      pycharm();
      trello();
      git();
      brackets();
      word();
      powerpoint();
      excel();
      count1++;
  }
}

window.onscroll = function() {scroll()};

var count = 0;
var count1 = 0;