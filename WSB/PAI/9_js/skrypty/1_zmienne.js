// alert("test")
zmienna = 7;

/*
zmienna - nazwa zmiennej
= operator przypisania
7 wartość zmiennej
*/

var imie = "Janusz";
let nazwisko;
nazwisko = "Nowak";
document.write('Twoje imię: ' + imie + '<br>');
// + konkatenacja
let wiek = 21;
document.write('Twoj wiek: ' + wiek + '<br>');
document.write('Twoj wiek: ' , wiek , '<br>');

console.log(wiek);
console.log('wynik = ',3*5);

let x, y;
x = 10;
y = 7;
let suma = x + y;
wynik = 'Suma wynosi: ';
wynik += suma;
wynik += '<br>';
document.write(wynik);

//działania: + - * /

//potęgowanie
let potega = Math.pow(2, 10);
//alert('Potega: ' + potega);

//modulo - reszta z dzielenia;

let modulo = x % y;
document.write(modulo);

//typy danych

let a = 10, b = '10a';
console.log(typeof(a)); //number;
console.log(typeof(b)); //string

let prawda = true;
console.log(typeof(prawda)); //boolean

let nic = null;
console.log(typeof(nic)); //object

let pusta;
console.log(typeof(pusta)); //undefinde

//system liczbowe
 let dziesietny = 11;
 let oktalny = 010;
  console.log(oktalny); //0

 let szesnastkowy = 0x10;
 console.log(szesnastkowy); //16

let l1 = prompt('Podaj pierwszą liczbę');
console.log('Podana piersza liczba z klawiatury: ', l1)

let l2 = prompt('Podaj drugą liczbę');
console.log('Podana druga liczba z klawiatury: ', l2)

suma = l1 + l2;
console.log('Suma liczb ' + l1 + ' i ' + l2 + ' wynosi: ' + suma);

console.log(typeof(l1)); //string
console.log(typeof(l2)); //string
 // konwersja typów danych

 l1 = parseInt(l1);
 l2 = parseInt(l2);

 console.log(typeof(l1)); //number
 console.log(typeof(l2)); //number

 suma = l1 + l2;
 console.log('Suma liczb ' + l1 + ' i ' + l2 + ' wynosi: ' + suma);

 /*
suma dwóch liczb zmiennoprzecinkowych
wyświetl sumę dwóch liczb w formacie: a + b = wynik
 */

// camel case pierwszaZmienna maszNaImie

/* MOJE WŁASNE
let liczba1 = prompt('Podaj pierwszą liczbę');
let liczba2 = prompt('Podaj drugą liczbę');
liczba1 = parseInt(liczba1);
liczba2 = parseInt(liczba2);
wynik1 = liczba1 + liczba2;
document.write('<br>' + liczba1 + ' + ' + liczba2 + ' = ' + wynik1);
*/

l1 = parseFloat(prompt('Podaj pierwszą liczbę: ', 'np. 2.5'));
l2 = parseFloat(prompt('Podaj drugą liczbę: ', 'np. 2.5'));
suma = l1 + l2;
document.write('<br>' + l1 + ' + ' + l2 + ' = ' + suma);

/*
zad1
Napisz program, który oblicza pole prostokąta (dane podaje użytkownik z klawiatury, liczby zmiennoprzecinkowe)
Wynik wyświetl na ekranie w formacie: "Boka: ..., bokb: ...,
pole wynosi: ...cm^2"
(2 w indeksie górnym)

zad. 2,3
W podobny sposób oblicz pole trójkąta oraz kołoa
*/


/* Wyświetl imię i nazwisko użytkownie (dane podane z klawiatury), w formacie: Imię: Janusz (kolor czerwony), nazwisko: Kowal (kolor niebieski) */

let i = prompt('Podaj swoje imię:', 'np. Janusz');
let n = prompt('Podaj swoje nazwisko:', 'np. Kowal');

dane = '<hr> Imię: <span style="color:red">' + i;
dane += '</span>, Nazwisko: <span style="color:blue">' + n + '</span>';

document.write(dane);
