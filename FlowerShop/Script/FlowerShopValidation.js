var isSecurityValid = false;
var isNameVAlid = false;
var isAddressValid = false;
var isTownValid = false;
var isMailValid = false;
var isPinValid = false;
var isCardValid = false;
var ismonthVaild = false;
var isyearValid = false;
var isphoneValid = false;

//Validating card number
function ValidateCardNumber() {
    var cardnum = document.getElementById("txtCardNumber").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var number = regex.test(cardnum);
    
    if (number) {
        document.getElementById("Valid").style.display = "none";
        isCardValid = true;
    }
    else {
        document.getElementById("Valid").style.display = "block"
        isCardvalid = false;
    }
}

//Validating security number
function ValidateSecurityCode() {
    var security = document.getElementById("txtSecurityCode").value;
    var regex = /^[0-9]{3}$/;
    var secureNumber = regex.test(security);
   
    if (secureNumber) {
        document.getElementById("ValidSecurity").style.display = "none";
        isSecurityValid = true;
    }
    else {
        document.getElementById("ValidSecurity").style.display = "block"
        isSecurityValid = false;
    }
}

//Validating card holder's name
function ValidateName() {
    var userName = document.getElementById("txtName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var name = regex.test(userName);
    if (name) {
        document.getElementById("ValidName").style.display = "none";
        isNameVAlid = true;
    }
    else {
        document.getElementById("ValidName").style.display = "block"
        isNameVAlid = false;
    }
}

//Validating address1
function ValidateAddress1() {
    var address = document.getElementById("txtAddress1").value;
    var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (validAddress) {
        document.getElementById("ValidAddress").style.display = "none";
        isAddressValid = true;
    }
    else {
        document.getElementById("ValidAddress").style.display = "block"
        isAddressValid = false;
    }
}

//Validating address2
function ValidateAddress2() {

    var address = document.getElementById("txtAddress2").value;
    var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (!validAddress) {
        alert("Enter the Valid Address2")
    }
}
//Validating address3
function ValidateAddress3() {

    var address = document.getElementById("txtAddress3").value;
    var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(userName);
    if (!validAddress) {
        alert("Enter the Valid Address3")
    }
}
//Validating city
function ValidateCity() {

    var city = document.getElementById("txtCity").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validCity = regex.test(city);
    if (validCity) {
        document.getElementById("ValidTown").style.display = "none";
        isTownValid = true;
    }
    else {
        document.getElementById("ValidTown").style.display = "block"
        isTownValid = false;
    }
}
//Validating Region
function ValidateRegion() {

    var region = document.getElementById("txtRegion").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validRegion = regex.test(region);
    if (!validRegion) {
        alert("Enter the Valid Region")
    }
}
//Validating pin number
function ValidatePin() {

    var pin = document.getElementById("txtPostcode").value;
    var regex = /^[0-9]{6}(?:-[0-9]{4})?$/;
    var validPin = regex.test(pin);
    if (validPin) {
        document.getElementById("ValidPin").style.display = "none";
        isPinValid = true;
    }
    else {
        document.getElementById("ValidPin").style.display = "block"
        isPinValid = false;
    }
}
//Validating phone number
function ValidatePhone() {

    var phone = document.getElementById("txtTelephone").value;
    var regex = /^[6789]\d{9}$/;
    var validPhone = regex.test(phone);
    if (validPhone) {
        document.getElementById("ValidPhone").style.display = "none";
        isphoneValid = true;
    }
    else {
        document.getElementById("ValidPhone").style.display = "block"
        isphoneValid = false
    }
}
//Validating mail id
function ValidateMail() {

    var mail = document.getElementById("txtEmail").value;
    var regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    var validMail = regex.test(mail);
    if (validMail) {
        document.getElementById("ValidMail").style.display = "none"
        isMailValid = true;
    }
    else {
        document.getElementById("ValidMail").style.display = "block"
        isMailValid = false;

    }
}
function ValidateMonth() {
    var month = document.getElementById("month").selectedIndex;
    if (month != 0) {
        document.getElementById("ValidMonth").style.display = "none"
        ismonthVaild = true;

    }
    else {
        document.getElementById("ValidMonth").style.display = "block"
        ismonthVaild = false;

    }
}
function ValidateYear() {
    var year = document.getElementById("year").selectedIndex;
    if (year != 0) {
        document.getElementById("ValidMonth").style.display = "none"
        isyearValid = true;
    }
    else {
        document.getElementById("ValidMonth").style.display = "block"
        isyearValid = false;

    }
}
//Validating on  payment
function Submit() {
    //var cardnum = document.getElementById("txtCardNumber").value;
    //var security = document.getElementById("txtSecurityCode").value;
    //var userName = document.getElementById("txtName").value;
    //var pin = document.getElementById("txtPostcode").value;
    //var mail = document.getElementById("txtEmail").value;
    //var address = document.getElementById("txtAddress1").value;
    //var city = document.getElementById("txtCity").value;
    ValidateCardNumber();
    ValidateName();
    ValidateSecurityCode();
    ValidatePin();
    ValidateMail();
    ValidateAddress1();
    ValidateCity();
    ValidateMonth();
    ValidateYear();
    if (isAddressValid && isTownValid && isNameVAlid && isPinValid && isSecurityValid && isMailValid && isCardValid && isyearValid && ismonthVaild && isphoneValid) {
        alert("Successfully registered")
    }
    //   
}
 