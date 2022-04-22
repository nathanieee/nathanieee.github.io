var users = localStorage.getItem("users");
$(document).ready(function(){
    users = JSON.parse(users); // Convert String as an Object
    if (users === null) // If there is nothing intialize
        users = [];

    document.getElementById("submit").onclick = function() {
        if (check("inputFname") || check("inputUser") || check("inputEmail") || check("inputPassword")) {
            alert("Please fill out all the forms!")
            return
        } else {
            addItem();
        }
    };

    listRegistrants();
});

function deleteData(key){
    localStorage.removeItem(key);
    listRegistrants();
}

function check(value){
    if(document.getElementById(value).value.trim() == ""){
        return true;
    }
    return false;
}

function editData(key){
    document.getElementById("edit").style.display = 'block';
    document.getElementById("submit").style.display = 'none';
    localStorage.setItem("currentKey", key)

    var {fname, username, email, password} = document.forms.registration

    let data = JSON.parse(localStorage.getItem(key));
    fname.value = data["fname"];
    email.value = data["email"];
    password.value = data["password"];
    username.value = data["username"];
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

function listRegistrants() {

    $("#tbl-list").html("");
    $("#tbl-list").html(
            "<thead>" +
            "<tr>" +                
            "<th>Full name</th>" +
			"<th>Username</th>" +
            "<th>Email</th>" +
            "<th>Password</th>" +
            "<th>Edit</th>" +
            "<th>Delete</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            ); 
						
			for (i = 0; i < localStorage.length; i++) {
                key = localStorage.key(i);
                          
                let data = JSON.parse(localStorage.getItem(key));	 

				$("#tbl-list tbody").append("<tr>" +                    
						"<td>" + data["fname"] + "</td>" +
						"<td>" + data["username"] + "</td>" +
						"<td>" + data["email"] + "</td>" +
						"<td>" + data["password"] + "</td>" + 
                        "<td style=\"text-align : center\"><i class=\"fas fa-pencil-alt\" onclick=\"editData('" + key + "')\"></i></td>" +
                        "<td style=\"text-align : center\"><i class=\"fas fa-trash-alt\" onclick=\"deleteData('" + key + "')\"></i></td>"
                );
    } 
  }