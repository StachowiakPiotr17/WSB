let komunikat = document.getElementById('komunikat');

//komunikat.innerHTML = 'tekst';
//komunikat.textContent = 'tekst';

/*
Użytkownik podaje z klawiatury swoją narodowść jeśli poda "Lech" to wyświetli się komunikat na stronie w bloku o treści "lech - ekstraklasa???"
"cracovia - kraków"
"inna drużyna" - poznan
*/

let druzyna = prompt('Podaj drużynę');

if (druzyna == 'lech' || druzyna == 'Lech')
  komunikat.textContent = 'lech - ekstakraklasa ???';
else if (druzyna == 'cracovia' || druzyna == 'Cracovia')
komunikat.textContent = 'Krakót';
else
komunikat.textContent = 'Poznań';



let elKomKw = document.getElementById('komKwadrat');
let bok = parseFloat(prompt('Podaj długość boku'));
if (bok > 0) {
  let pole = bok * bok;
  let obwod = 4 * bok;
  let text = '<hr>Pole wynosi: ' + pole + 'cm<sup>2</sup><br>'
      text += 'Obwód wynosi: ' + obwod + ' cm';
  elKomKw.innerHTML- text;
}else {
  elKomKw.innerHTML = '<span style="color:red">Błędne dane!</span';
}
