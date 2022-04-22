// STORING VALUE TO LOCAL STORAGE
$(document).ready(function(){
    var checkBox = document.getElementById("checkbox");

    document.getElementById("submit").onclick = function() {
        if (check("inputFname") || check("inputUser") || check("inputEmail") || check("inputPassword") || checkBox.checked == false) {
            alert("Please fill out all the forms!")
            return
        } else {
            addItem();
            location.href = "thankyou.html";
        }
    };

    function check(value){
        if(document.getElementById(value).value.trim() == ""){
            return true;
        }
        return false;
    }

    function randomString(length = 6) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789";
        var charactersLength = characters.length;
    
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function addItem(){
        var inputFname = document.getElementById("inputFname");
        var inputUser = document.getElementById("inputUser");
        var inputEmail = document.getElementById("inputEmail");
        var inputPassword = document.getElementById("inputPassword");
    
        var key = randomString();
        var fnameValue = ("fname", inputFname.value)
        var userValue = ("username", inputUser.value)
        var emailValue = ("email", inputEmail.value)
        var passwordValue = ("password", inputPassword.value)

        var users = localStorage.getItem("users"); 
        users = JSON.parse(users);

        var user = JSON.stringify({
            fname : fnameValue,
            username : userValue,
            email : emailValue,
            password : passwordValue
        });

        localStorage.setItem(key, user); 
    }
    
  });