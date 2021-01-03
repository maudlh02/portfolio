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