

function store() {
	var full_name = document.getElementById('full_name');
var email_address = document.getElementById('email_address');
var user_name = document.getElementById('user_name');
var pwd = document.getElementById('pwd');
var phone_number = document.getElementById('phone_number');
var present_address = document.getElementById('present_address');
var permanent_address = document.getElementById('permanent_address');


    localStorage.setItem('full_name', full_name.value);
    localStorage.setItem('email_address', email-address.value);
	localStorage.setItem('user_name', user_name.value);
    localStorage.setItem('pwd_address', pwd.value);
	localStorage.setItem('phone_number', Phone_number.value);
    localStorage.setItem('present_address', present_address.value);
    localStorage.setItem('permanent_address', permanent_addressaddress.value);
	alert('You are succesfully registered.');
}

function check() {

    var storedName = localStorage.getItem('user_name');
    var storedPw = localStorage.getItem('pwd');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

   if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
	
}