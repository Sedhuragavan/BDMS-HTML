function validated() {

    if (username() && minweight() && phoneverify() && emailverify() && passverify() && confirmpassverify()) {
        alert("Register Sucessfully");
        window.open('../html/donor.html');
    }
    else {
        alert("Please fill the Correct Deatails");
        return false;
    }

}


function username() {
    var name = document.getElementById("name");
    var letters = /^[A-Za-z ]+$/;

    if (!name.value.match(letters)) {
        document.getElementById("name_error").innerHTML = "Alphabets only allowed";
        name.style.border = "2px solid red";
        return false;
    }
    document.getElementById("name_error").innerHTML = "";
    name.style.border = "2px solid green";
    return true;
}
// var birthDate = document.getElementById("dob");
// console.log(birthDate);

// function dateofbirth() {
// var birthDate = document.getElementById("dob");
// var today = new Date();
// var validMinDate = new Date(
//     today.getFullYear() - 18,
//     today.getMonth(),
//     today.getDate(),
//     today.getHours(),
// )
// if (birthDate > validMinDate) {
//     document.getElementById("dob_error").innerHTML = "Minimum Age must be 18 years";
//     name.style.border = "2px solid red";
//     return false;
// }
// document.getElementById("dob_error").innerHTML = "";
// dob.style.border = "2px solid green";
// return true;
// console.log(birthDate);
// }

function dateofbirth() {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    var maxYear = year - 18;
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var maxDate = maxYear + '-' + month + '-' + day;
    var minYear = year - 50;

    var minDate = minYear + '-' + month + '-' + day;
    var birthDate = document.getElementById("dob").value;

}




function minweight() {
    var weight = document.getElementById("weight");

    if (weight.value < 50) {
        document.getElementById("weight_error").innerHTML = "Minimum 50 KG weight required";
        weight.style.border = "2px solid red";
        return false;
    }
    document.getElementById("weight_error").innerHTML = "";
    weight.style.border = "2px solid green";
    return true;
}

function phoneverify() {
    var phoneno = "^[6-9]{1}[0-9]{9}$";
    var mobilenumber = document.getElementById("phone");
    if (!mobilenumber.value.match(phoneno)) {
        document.getElementById("phone_error").innerHTML = "Enter valid Phonenumber";
        mobilenumber.style.border = "2px solid red";
        return false;
    }
    document.getElementById("phone_error").innerHTML = "";
    mobilenumber.style.border = "2px solid green";
    return true;

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

function confirmpassverify() {
    var confirmpassword = document.getElementById("pass1");
    var password = document.getElementById("pass");

    if (confirmpassword.value != password.value) {
        document.getElementById("pass1_error").innerHTML = "Passwords are not Matched";
        confirmpassword.style.border = "2px solid red";
        return false;
    }
    document.getElementById("pass1_error").innerHTML = "";
    confirmpassword.style.border = "2px solid green";
    return true;
}