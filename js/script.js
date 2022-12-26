const _NomeCognome = document.getElementById('name');
const _Kilometers = document.getElementById('kilometers');
const _YearsOld = document.getElementById('yearsold');
const _Submit = document.getElementById('create');


_Submit.addEventListener('click',

    function() {

        console.log(_NomeCognome.value);
        console.log(_Kilometers.value, typeof _Kilometers.value);
        console.log(_YearsOld.value);
        
        // Prezzo
        let _Price = (0.21 * _Kilometers.value);

        if (_YearsOld.value == 'notadult') {

            let _Discount = ((_Price / 100) * 20);
            _Price = _Price - _Discount;
            console.log('Hai meno di 18 anni, il prezzo originale è decurtato del 20%: ' + _Price.toFixed(2));
            document.getElementById('price').innerHTML = _Price;
            document.getElementById('type').innerHTML = 'Biglietto Minorenni';
            document.getElementById('nomecognome').innerHTML = _NomeCognome.value;

        } else if (_YearsOld.value == 'over') {

            let _Discount = ((_Price / 100) * 40);
            _Price = _Price - _Discount;
            console.log('Hai più di 65 anni, il prezzo originale è decurtato del 40%: ' + _Price.toFixed(2));
            document.getElementById('price').innerHTML = _Price;
            document.getElementById('type').innerHTML = 'Biglietto Over';
            document.getElementById('nomecognome').innerHTML = _NomeCognome.value;

        } else {

            console.log('Il prezzo originale è: ' + _Price.toFixed(2));
            document.getElementById('price').innerHTML = _Price;
            document.getElementById('type').innerHTML = 'Biglietto Standard';
            document.getElementById('nomecognome').innerHTML = _NomeCognome.value;

        }
        
    }
)




























/*

// Inserisci l'età
const _YearsOld = prompt('Inserisci la tua età');

// Inserisci i chilometri
const _Kilometers = prompt('Inserisci i km')

// Prezzo
let _Price = (0.21 * _Kilometers);

if (_YearsOld < 18) {

    let _Discount = ((_Price / 100) * 20);
    _Price = _Price - _Discount;
    console.log('Hai meno di 18 anni, il prezzo originale è decurtato del 20%: ' + _Price.toFixed(2));

} else if (_YearsOld >= 65) {

    let _Discount = ((_Price / 100) * 20);
    _Price = _Price - _Discount;
    console.log('Hai più di 65 anni, il prezzo originale è decurtato del 40%: ' + _Price.toFixed(2));

} else {
    console.log('Il prezzo originale è: ' + _Price.toFixed(2));
}


*/
