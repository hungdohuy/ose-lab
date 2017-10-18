function validate_login() {
    var email = document.forms["loginform"]["username"].value;
    var password = document.forms["loginform"]["password"].value;
    var re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    var re_password = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/;

    if ((re_email.test(email)) && (re_password.test(password))) {
    	console.log('Valid');
        return true;
    } else {
        console.log('Not valid');
        alert("Email or password is not valid");
        return false;
    }
}