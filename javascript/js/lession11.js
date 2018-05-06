function submitForm() {
    validateFullName();
    validateEmail();
    validatePhone();
    validatePass();

}

function validateFullName() {
    var fullName = document.getElementById('fullName').value;
    var length = fullName.length;
    if (length < 6 || length > 15) {
        document.getElementById('errorFullName').innerHTML = "Họ và tên không được quá ngắn hoặc quá dài";
    }

}
function validateEmail(){
    var address = document.getElementById('address').value;
    var indexOfA = address.indexOf("@");
    if (indexOfA < 0){
        document.getElementById('errorEmail').innerHTML = "Địa chỉ email phải có chữ @";

    }
}
function validatePhone() {
     var phone = document.getElementById('phone').value;
     var substring = phone.substring(0, 2);
     console.log(substring);
     if (substring != "09" && substring != "01") {
        document.getElementById('errorPhone').innerHTML = "Số điện thoại phải bắt đầu bằng 09 hoặc 01";

     }

}
function validatePass() {
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    if(pass1 != pass2) {
        document.getElementById('errorpass').innerHTML = "Mật khẩu xác nhận không đúng";
    }
}