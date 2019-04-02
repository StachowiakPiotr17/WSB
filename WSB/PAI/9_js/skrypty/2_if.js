let k = document.getElementByID('komunikat')
let x = prompt('Podaj co chcesz obliczyć', 'k - kwadrat, p - prostokąt, t - trójkąt');
let pole, bokA, bokB;

if (x == 'k') {
  bokA = prompt('Podaj długość boku a');
  pole = bokA * bokA;
  k.innerHTML = 'Pola kwadratu wynosi: ' + pole + 'cm<sup>2</sup>';
}else if (x == 'p') {
  bokA = prompt('Podaj długość boku a');
  bokB = prompt('Podaj długość boku b');
  pole = bokA * bokB;
  k.innerHTML = 'Pola prostokąta wynosi: ' + pole + 'cm<sup>2</sup>';
}else if (x == 't') {
  bokA = prompt('Podaj długość boku a');
  bokB = prompt('Podaj długość boku b');
  pole = bokA * bokB;
  k.innerHTML = 'Pola trójkąta wynosi: ' + pole + 'cm<sup>2</sup>';


}
