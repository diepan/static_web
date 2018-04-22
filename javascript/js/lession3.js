var typeInterger= 100;
var typeString= "hello";
var typeBolean  = true;
var typeObject= {
    name: "an",
    age: 19

};

var typeArray = [
    'green', 'blue', 'red'
]

var a= 20 
var b= '20'
var c= a != b;

var d = (a +b)/c
document.getElementById('typeData1').innerHTML = d;
document.getElementById('typeData2').innerHTML = b;

function introProfile() {
    var name = 'an';
    var age = 19;
    var job = 'student';
    return 'toi la ' + name + ',toi' + age + 'tuoi. toi la mot' + job;
}

var result = introProfile()
function introProfile2(name, age, job){
    return 'ten tuoi nghe nghiep cua toi la: ' + name + age + job;
}
var result = introProfile2('An',19,'student');

document.getElementById('myProfile').innerHTML= result;