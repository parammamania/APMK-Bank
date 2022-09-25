//onsubmit function validation
function validation(){
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var pass = document.getElementById('pass').value;
	var confirmpass = document.getElementById('conpass').value;
	var mobileNumber = document.getElementById('mobileNumber').value;
	var emails = document.getElementById('emails').value;

	if(firstName == ""){
		document.getElementById('firstNameSpan').innerHTML = "Please fill the username field!";
		return false;
	}

	if((firstName.length < 2) || (firstName.length > 20)){
		document.getElementById('firstNameSpan').innerHTML = "Username length should be between 2 and 20!";
		return false;
	}

	if(!isNaN(firstName)){
		document.getElementById('firstNameSpan').innerHTML = "Username cannot be a number, only characters are allowed!";
		return false;
	}

	if(lastName == ""){
		document.getElementById('lastNameSpan').innerHTML = "Please fill the username field!";
		return false;
	}

	if((lastName.length < 2) || (lastName.length > 20)){
		document.getElementById('lastNameSpan').innerHTML = "Username length should be between 2 and 20!";
		return false;
	}

	if(!isNaN(lastName)){
		document.getElementById('lastNameSpan').innerHTML = "Username cannot be a number, only characters are allowed!";
		return false;
	}

	if(emails == ""){
		document.getElementById('emailids').innerHTML = "Please fill the email id field!";
		return false;
	}

	if(emails.indexOf('@') <= 0){
		document.getElementById('emailids').innerHTML = "Position of '@' is invalid!";
		return false;
	}

	if((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')){
		document.getElementById('emailids').innerHTML = "Position of '.' is invalid!";
		return false;
	}

	if(mobileNumber == ""){
		document.getElementById('mobileno').innerHTML = "Please fill the mobile number field!";
		return false;
	}

	if(isNaN(mobileNumber)){
		document.getElementById('mobileno').innerHTML = "Please enter only digits in this field!";
		return false;
	}

	if(mobileNumber.length != 10){
		document.getElementById('mobileno').innerHTML = "Mobile Number must be exactly 10 digits!";
		return false;
	}

	if(pass == ""){
		document.getElementById('passwords').innerHTML = "Please fill the password field!";
		return false;
	}

	if((pass.length < 8) || (pass.length > 20)){
		document.getElementById('passwords').innerHTML = "Password length should be between 8 and 20!";
		return false;
	}

	if(confirmpass == ""){
		document.getElementById('confrmpass').innerHTML = "Please fill the confirm password field!";
		return false;
	}

	if(pass != confirmpass){
		document.getElementById('confrmpass').innerHTML = "The passwords don't match!";
		return false;
	}

}

function onClickDisplay() {
	alert('Hi there!');
}

var a = 0;
var b = 0;
var c = 0;

function onMouseOverVanish() {
	var e = document.getElementById('hover1');
	e.style.display = 'none';
}

function focused() {
	var e = document.getElementById('inp');
	if (confirm('Password input box is focussed!')) {
	  e.blur();
	}
}

function onResetFunction() {
	alert("The form was reset");
}
