//part1
//document.getElementById('false').innerHTML = Number(false) + ' ' + String(false) + ' ' + Boolean(false);

console.log('false =' + ' ' + Number(false) + ' ' + String(false) + ' ' + Boolean(false));

console.log('true =' + ' ' + Number(true) + ' ' + String(true) + ' ' + Boolean(true));

console.log('0 =' + ' ' + Number(0) + ' ' + String(0) + ' ' + Boolean(0));

console.log('1 =' + ' ' + Number(1) + ' ' + String(1) + ' ' + Boolean(1));

console.log('"0" =' + ' ' + Number("0") + ' ' + String("0") + ' ' + Boolean("0"));

console.log('"000" =' + ' ' + Number("000") + ' ' + String("000") + ' ' + Boolean("000"));

console.log('"1" =' + ' ' + Number("1") + ' ' + String("1") + ' ' + Boolean("1"));

console.log('NaN =' + ' ' + Number(NaN) + ' ' + String(NaN) + ' ' + Boolean(NaN));

console.log('Infinity =' + ' ' + Number(Infinity) + ' ' + String(Infinity) + ' ' + Boolean(Infinity));

console.log('-Infinity =' + ' ' + Number(-Infinity) + ' ' + String(-Infinity) + ' ' + Boolean(-Infinity));

console.log('"" =' + ' ' + Number("") + ' ' + String("") + ' ' + Boolean(""));

console.log('"20" =' + ' ' + Number("20") + ' ' + String("20") + ' ' + Boolean("20"));

console.log('"Twenty" =' + ' ' + Number("Twenty") + ' ' + String("Twenty") + ' ' + Boolean("Twenty"));

console.log('null =' + ' ' + Number(null) + ' ' + String(null) + ' ' + Boolean(null));

console.log('undefined =' + ' ' + Number(undefined) + ' ' + String(undefined) + ' ' + Boolean(undefined));

// Part 2 Challenge 1
// Create an Age Calculator
{
let birthYear = 1994;
let futureYear = 2028;

let diffYear = futureYear - birthYear;

//Show in console

console.log(`I was born in ${birthYear} , then in ${futureYear} I,ll be ${diffYear}.`);

}


// Part 2 Challenge 2
// Create an Information card
{    
const info = {
    name: 'Bonn',
    location: 'Saraburi',
    hobby: 'sleeping'
}

//Show in console

console.log(`Hi, my name is ${info.name}. I live in ${info.location} and enjoy ${info.hobby}.`);

}