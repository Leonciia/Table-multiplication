//TABLE-1
console.log('TABLE 1 :');

for(let i=0; i<=10; i++){
    console.log('1 ' +'x ' +i  +' = ' +1*i);
    table1 = '1 ' +'x ' +i  +' = ' +1*i +'<br>';
    document.getElementById('table-1').innerHTML += table1;
}
console.log('-----------------------------------------------------');

//TABLE-2
console.log('TABLE 2 :');

for(let i=0; i<=10; i++){
    console.log('2 ' +'x ' +i  +' = ' +2*i +'<br>');
    table2 = '2 ' +'x ' +i  +' = ' +2*i +'<br>';
    document.getElementById('table-2').innerHTML += table2;
}
console.log('-----------------------------------------------------');

//TABLE-3
console.log('TABLE 3 :');

for(let i=0; i<=10; i++){
    console.log('3 ' +'x ' +i  +' = ' +3*i +'<br>');
    table3 = '3 ' +'x ' +i  +' = ' +3*i +'<br>';
    document.getElementById('table-3').innerHTML += table3;
}
console.log('-----------------------------------------------------');

//TABLE-4
console.log('TABLE 4 :');

for(let i=0; i<=10; i++){
    console.log('4 ' +'x ' +i  +' = ' +4*i +'<br>');
    table4 = '4 ' +'x ' +i  +' = ' +4*i +'<br>';
    document.getElementById('table-4').innerHTML += table4;
}
console.log('-----------------------------------------------------');

//TABLE-5
console.log('TABLE 5 :');

for(let i=0; i<=10; i++){
    console.log('5 ' +'x ' +i  +' = ' +5*i +'<br>');
    table5 = '5 ' +'x ' +i  +' = ' +5*i +'<br>';
    document.getElementById('table-5').innerHTML += table5;
}
console.log('-----------------------------------------------------');

//TABLE-6
console.log('TABLE 6 :');

for(let i=0; i<=10; i++){
    console.log('6 ' +'x ' +i  +' = ' +6*i +'<br>');
    table6 = '6 ' +'x ' +i  +' = ' +6*i +'<br>';
    document.getElementById('table-6').innerHTML += table6;
}
console.log('-----------------------------------------------------');

//TABLE-7
console.log('TABLE 7 :');

for(let i=0; i<=10; i++){
    console.log('7 ' +'x ' +i  +' = ' +7*i +'<br>');
    table7 = '7 ' +'x ' +i  +' = ' +7*i +'<br>';
    document.getElementById('table-7').innerHTML += table7;
}
console.log('-----------------------------------------------------');

//TABLE-8
console.log('TABLE 8 :');

for(let i=0; i<=10; i++){
    console.log('8 ' +'x ' +i  +' = ' +8*i +'<br>');
    table8 = '8 ' +'x ' +i  +' = ' +8*i +'<br>';
    document.getElementById('table-8').innerHTML += table8;
}
console.log('-----------------------------------------------------');

//TABLE-9
console.log('TABLE 9 :');

for(let i=0; i<=10; i++){
    console.log('9 ' +'x ' +i  +' = ' +9*i +'<br>');
    table9 = '9 ' +'x ' +i  +' = ' +9*i +'<br>';
    document.getElementById('table-9').innerHTML += table9;
}
console.log('-----------------------------------------------------');

//TABLE-10
console.log('TABLE 10 :');

for(let i=0; i<=10; i++){
    table10 = '10 ' +'x ' +i  +' = ' +10*i +'<br>';
    document.getElementById('table-10').innerHTML += table10;
    console.log('10 ' +'x ' +i  +' = ' +10*i +'<br>');
}
console.log('-----------------------------------------------------');

//TABLE-11
console.log('TABLE 11 :');

for(let i=0; i<=10; i++){
    table11 = '11 ' +'x ' +i  +' = ' +11*i +'<br>';
    document.getElementById('table-11').innerHTML += table11;
    console.log('11 ' +'x ' +i  +' = ' +11*i +'<br>');
}
console.log('-----------------------------------------------------');

//TABLE-12
console.log('TABLE 12 :');

for(let i=0; i<=10; i++){
    table12 = '12 ' +'x ' +i  +' = ' +12*i +'<br>';
    document.getElementById('table-12').innerHTML += table12;
    console.log('12 ' +'x ' +i  +' = ' +12*i +'<br>');
}
console.log('-----------------------------------------------------');

//DARK MODE
const themeToggle = document.getElementById('theme-toggle');

const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});