function check() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    var username = "sedhuragav303@gmail.com";
    var pwrd = "Sedhu@123";
    var donarname = "donor@gmail.com";
    var pass = "Donor@123";

    if (emailverify() && passverify()) {
        if (email == username && password == pwrd) {
            alert("Login Successfully");
            window.open('../html/admin.html');
        }
        else if (email == donarname && password == pass) {
            alert("Login Successfully");
            window.open('../html/donor.html');
        }
        else {
            alert("Invalid EmailId or Password");
            return false;
        }
    } else {
        alert("Enter Valid Details");
    }
}


function emailverify() {

    var email = document.getElementById("email");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.value.match(pattern)) {
        document.getElementById("email_error").innerHTML = "Enter the valid EmailId";
        email.style.border = "2px solid red";
        return false;
    }
    document.getElementById("email_error").innerHTML = "";
    email.style.border = "2px solid green";
    return true;
}

function passverify() {
    var password = document.getElementById("pass");
    var passset = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!password.value.match(passset)) {
        document.getElementById("password_error").innerHTML = "Minimun 6 Maximum 16 Characters<br/>Atleast one number<br/>Atleast one Special symbol";
        password.style.border = "2px solid red";
        return false;
    }
    document.getElementById("password_error").innerHTML = "";
    password.style.border = "2px solid green";
    return true;
}