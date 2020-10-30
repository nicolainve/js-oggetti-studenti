$(document).ready(function () {

    // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.

    var student = {
        name : 'Nicola',
        surname : 'Invernizzi',
        age : 23
    };

    for (var key in student) {
        console.log(key + ':', student[key]);
    };


    // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

    var students = [
        {
            name : 'Nicola',
            surname : 'Invernizzi'
        },
        {
            name : 'Mario',
            surname : 'Rossi'
        },
        {
            name : 'John',
            surname : 'Appleseed'
        }
    ];

    for (var i = 0; i < students.length; i++) {
        console.log(students[i].name, students[i].surname);
    }


    // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.

    var user = {
        name : prompt('Inserisci il tuo nome'),
        surname : prompt('Inserisci il tuo cognome'),
        age : parseInt(prompt('Inserisci la tua età'))
    };

    students.push(user);

    for (var key in user) {
        console.log(key + ': ' + user[key]);
    };

});