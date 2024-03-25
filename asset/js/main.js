// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo (tableName),
// nome dell'ospite (guestName),
// posto occupato (place),
// Generiamo e stampiamo in console la lista per i segnaposto.

const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

let result = [];

tavoloVip.forEach((element, index) => {
    let newInvitate = {
        tableName: 'tavolo vip',
        guestName: element,
        place: index
    }

    result.push(newInvitate);
});

console.log(result);

// Id  Name                Grades
// 213 Marco della Rovere      78
// 110 Paola Cortellessa       96
// 250 Andrea Mantegna         48
// 145 Gaia Borromini          74
// 196 Luigi Grimaldello       68
// 102 Piero della Francesca   50
// 120 Francesca da Polenta    84

const studenti = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
]

const printUpper = studenti.map((el) => {
    return el.name.toUpperCase();
})

let ulEl = document.querySelector('ul');

for (let i = 0; i < printUpper.length; i++) {
    const liEl = document.createElement('li');
    liEl.innerHTML = printUpper[i];
    ulEl.appendChild(liEl);
}

// console.log(printUpper); 


// lista superiori a 70
const over70 = studenti.filter((el) => {
    if (el.grades >= 70) {
        return true;
    }
})
// stampo la lista a schermo
let over70Print = document.getElementById('over70');
over70.forEach(el => {
    const liEl = document.createElement('li');
    liEl.innerHTML = el.name + ` ha ottenuto <strong>${el.grades}</strong> punti.`
    over70Print.appendChild(liEl)
});
//console.log(over70); 

// lista superiore a 70 e con id maggiore di 120

const overGradeId = studenti.filter((el) => {
    const idDesiderata = 120;
    if (el.grades >= 70 && el.id > idDesiderata) {
        return true;
    }
})
//stampa lista
let overGradeIdPrint = document.getElementsByTagName('div')[0];
overGradeId.forEach(el => {
    const liEl = document.createElement('p');
    liEl.innerHTML = el.id + ' ' + el.name + ' ' + el.grades;
    overGradeIdPrint.appendChild(liEl);
})
console.log(overGradeId);

// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const biciclette = [
    {
        nome: "Bianchi Oltre XR4",
        peso: 7.8,
    },
    {
        nome: "Colnago V3Rs",
        peso: 7.2,
    },
    {
        nome: "Pinarello Dogma F12",
        peso: 7.4,
    },
    {
        nome: "Specialized Tarmac SL7",
        peso: 6.8,
    },
    {
        nome: "Trek Émonda SLR",
        peso: 16.4,
    },
];

// crea array con pesi
let pesiBici = [];
biciclette.forEach(el => {
    bicicletta = el.peso;
    pesiBici.push(bicicletta);

});
console.log('Pesi bici è un array con dentro tutti i pesi', pesiBici);

// filtro l'array e definisco il minore 
const lower = biciclette.filter((el) => el.peso === Math.min(...pesiBici));
console.log(lower, lower.nome)
const { nome, peso } = lower;
console.log(nome, peso);
console.log(`La bici che pesa di meno è ${nome} con un peso di ${peso}`);

