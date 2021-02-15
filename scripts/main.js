function ValidateEmail() {
	var email = document.getElementById("emailInput");
	var message = document.getElementById("messageInput");
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email.value.match(mailformat) && message.value) {
		email.value = "";
		message.value = "";
		alert("Message sent!");
		return true;
	}
	if (!email.value.match(mailformat)) {
		alert("Invalid email");
		email.focus();
		return false;
	}
	if (!message.value) {
		alert("Please enter a message!");
		message.focus();
		return false;
	}
}
