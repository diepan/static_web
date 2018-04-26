
function introProfile() {
    var name = 'an';
    var age = 19;
    var job = 'student';
    return 'toi la ' + name + ',toi' + age + 'tuoi. toi la mot' + job;
}

var result = introProfile()

function introProfile2(name, age, job) {
    return 'ten tuoi nghe nghiep cua toi la: ' + name + age + job;
}
var result2 = introProfile2('An', 19, 'student');

function getMyProfile(name, age, job) {
    var myProfile = 'ten tuoi nghe nghiep cua toi la: ' + name + age + job;
    document.getElementById('myProfile').innerHTML = myProfile;

}
function hideMyProfile() {
    document.getElementById('myProfile').innerHTML = '';
}


function getNameStudent(student){
    var name = student.name;
    document.getElementById('student').innerHTML= name;

}
function getAgeStudent(student){
    var age = student.age;
    document.getElementById('student').innerHTML = age;
}
function learning(student){
    student.learn();
}
var Color = {
    color: 'reb',
    showColor: function(){
        document.getElementById('color').innerHTML = this.color;

    },
    showMultiColor: function(){
        var clor = 'blue';
        document.getElementById('color').innerHTML = this.color + ', ' + clor;

    }

};

var Song = {
    showLyrics: function(){
        var lyrics = "Ở một nơi xa xôi, bao quanh là núi đồi<br />\
                      Chuyện 'tình yêu' vẫn cứ cũ như thế sinh ra là có đôi<br />\
                      Người chọn sinh ra thôi, không may bị cuốn trôi<br />";
        document.getElementById('color').innerHTML = lyrics;      
        alert(lyrics.length);       
    }
};





console.log(student);

