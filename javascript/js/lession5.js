// lenght
var hello= 'hello';
console.log('chieu dai cua bien hello' + hello.length);
// toUpperCase
console.log(hello.toUpperCase());
// toLowerCase()
console.log(hello.toLowerCase());

// concat()
var anh = 'anh';
var em = 'em';
var love = anh.concat('yeu' ,em);
console.log(love);

// indexOf()
var cha = "hai cha con di tren cat con khoc";
var con = "con";
var indexOfCon = cha.indexOf(con);
console.log(indexOfCon);

// lastIndexOf()
var lastIndexOfCon = cha.lastIndexOf(con);
console.log(lastIndexOfCon);

// charAt()
var char = cha.charAt(8);
console.log(char);

// substr()
var string = cha.substr(8, 11);
console.log(string);

// substring()
var sstring = cha.substring(8, cha.length);
console.log(sstring);

// replace()
var newCha = cha.replace('khoc', 'cuoi');
console.log(newCha);

// match()
var con = cha.match(/con/i);
console.log(con);

//Đếm số lượng ký tự của chuỗi
var text = "Tai lieu hoc JavaScript";
var a = text.length;
document.write(a);


var b = "JavaScript".length;
document.write(b);

//Chuyển chuỗi về dạng chữ in hoa
var text = "Tai lieu hoc JavaScript";
var a = text.toUpperCase();
document.write(a);
// Chuyển chuỗi về dạng chữ thường
var text = "Tai lieu hoc JavaScript";
var a = text.toLowerCase();
document.write(a);
//Nối các chuỗi lại với nhau
var a = "Lập ";
var b = "trình";
var c = " web";

var str1 = a.concat(b, c);
var str2 = a.concat(b, " di động");
var str3 = "Java".concat("Script");

document.getElementById("demo1").innerHTML = str1;
document.getElementById("demo2").innerHTML = str2;
document.getElementById("demo3").innerHTML = str3;
// Xác định chỉ số của một chuỗi con
var text = "Tài liệu học HTML và tài liệu học CSS";
var a = text.indexOf("học");
var b = text.lastIndexOf("học");

document.getElementById("demo4").innerHTML = a;
document.getElementById("demo5").innerHTML = b;
//Trích xuất một ký tự trong chuỗi
var text = "TÀI LIỆU HỌC HTML";
var a = text.charAt(4);
document.write(a);

//Trích xuất một chuỗi con
var text = "TÀI LIỆU HỌC HTML";
var a = text.substring(4, 14);
document.write(a);

//Phương thức substr()
var text = "TÀI LIỆU HỌC HTML";
var a = text.substr(4, 3);
document.write(a);
//Thay thế nội dung trong chuỗi
var text = "Tài liệu học HTML";
var a = text.replace("học", "tham khảo");
document.write(a);
//Thay thế tất cả nội dung trùng khớp
var text = "Tài liệu học HTML và tài liệu học CSS";
var a = text.replace("học", "tham khảo");
document.write(a);


//Thay thế nội dung không phân biệt trường hợp chữ hoa hay thường
var text = "Tài liệu học HTML";
var a = text.replace("HọC", "tham khảo");
document.write(a);

// không phân biệt trường hợp chữ in hoa hay chữ thường 
var text = "Tài liệu học HTML";
var a = text.replace(/HọC/i, "tham khảo");
document.write(a);	
//không phân biệt trường hợp chữ in hoa hay chữ thường 
var text = "Tài liệu học HTML và tài liệu học CSS";
var a = text.replace(/HọC/gi, "tham khảo");
document.write(a);
