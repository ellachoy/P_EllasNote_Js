console.log('about:JS')
// wer ist Js? : script sprache basiert object./ interpreter sprache mit No type(bedeutet, don´t need compile process wie bei C )

// was kann JS?: 1. HTML-inhalt ändern (zb.document.getElementById("demo").innerHTML = "Hello JavaScript";)
//               2.HTML-Attributwerte ändern(zb.Wert des src(source)-Attributs eines <img>Tags:)
//               3.HTML-style ändern (CSS)(zb.document.getElementById("demo").style.fontSize = "35px";)

// besonderheit JS: camelCase, underscore_case,***keyword : var firstVar = 10;// var schlüsselwort/keyword zum variable declarieren  var  myFirstFunc {  // function ist keyword zum variable declarieren

// was beinhaltet JS?  

// 1.variable: Variablen sind Container zum Speichern von Daten (Werten). ->> wie excel zeile***
// var variable name;
// var variable name = Wert zuzuweisen;
// var sum; // variable  sum declarieren.-> undifined
// var a = 3; // variable  a declarieren. 3zuweisen
// var b, c, d;
// var e = 1,
//     f = 2,
//     g = 3; // mehrere variable declarieren.

// 2. operation :+, -, *, /, % ,   ++, --
// a = a + 1 (x),  a += 1 (o)

// 3.comparison operator==b,a!=b,a==b && a==c, a==b || a==c, a > b(a ist grösser als b)

// 4.Funktion 
// 1-1. funktion deklarieren. 
function notify(message) {
    console.log(message);
}
notify('say something');
// 1-2.
let notify2= function(message) {
    console.log(message);
}
notify2('say something');
// 1-3.
// let notify3=()=>{
//     console.log(message);
// }
// notify3('say something');