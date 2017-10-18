function validate_login() {
    var email = document.forms["loginform"]["username"].value;
    var password = document.forms["loginform"]["password"].value;
    var re_email = new RegExp('^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$');
    var re_password = new RegExp('^.*{6,}$');

    if (re_email.test(email)) {
    	return true;
    } else {
        alert("Email or password is not valid");
        return true;
    }
}