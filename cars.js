// Instrukcijos
// Pradžioje viską darykite paprastai be atskirų modules, vėliau išskaidykite ir viską sukelkite į pagrindinį :)


// 1. Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą. Šios funkcijos tikslas - į app.innerHTML pridėti (t.y. +=) header'io kodą (pasirašykite standartinį HTML su inline CSS). Šį modulį importuokite į pagrindinį script file'ą ir perduokite app vietoje document.body kaip argumentą. Tokiu būdu per DOM, puslapio viršuje turėtų atsivaizduoti header'is, kuris importuotas iš header.js.
// 2. Papildykite antrą užduotį sukurdami dar vieną modulį, pavadinimu cars.js. Šis modulis turės funkciją, kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML). Tačiau šį kartą - funkcija viduj turės array (["BMW", "VW", "AUDI", "MB"]). O su innerHTML bus map metodas panaudotas ant array, kuris atvaizduos <ul> tag'e sugeneruos po kiekvieną automobilį <li> elemente (t.y.
// <ul>
// ${array.map((item) => <li></li>}
// </ul>)

function addCarsToApp(app) {
    const carArray = ["BMW", "VW", "AUDI", "MB"];
    const carsHTML = `
        <div class="main">
            <ul>
                ${carArray.map((car) => `<li>${car}</li>`).join('')}
            </ul>
        </div>
    `;
    app.innerHTML += carsHTML;
}

// Exportuoja funkciją
export { addCarsToApp };