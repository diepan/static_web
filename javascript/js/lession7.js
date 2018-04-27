// toString()
var year = 1999;
var yearString = year.toString();
console.log(typeof yearString);
// toExponential()

// toFixed()
var rateAvegare = 7.797989;
var rateAvegareFix = rateAvegare.toFixed(3);
console.log(rateAvegare + ' - ' + rateAvegareFix);
// munber()

var year = Number(true);
console.log(year);

var not = Number(false);
console.log(not);

var time = new Date();
console.log(Number(time));

var name = 'tien dat';
console.log(Number(name));

var birthYear = '1999';
console.log(Number(birthYear));

var birthDay = '01 03 1999';
console.log(Number(birthDay));

var year = parseInt(true);
console.log(year);

var not = parseInt(false);
console.log(not);

var birthYear = '1999';
console.log(parseInt(birthYear));

var stringNum = 'haha 1999';
console.log(parseInt(stringNum));

// parseFloat()
var year = parseFloat(true);
console.log(year);



