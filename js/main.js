let suspectsArray = [
    {
        name: "mrGreen",
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green",
    },
    {
        name: "drOrchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: " PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "https://images-ext-2.discordapp.net/external/XhTQdlN7ru7Z3GPD1Yh-n8_KsyuCIOT1PWGCzqpNx1w/%3Fwidth%3D620%26quality%3D45%26dpr%3D2%26s%3Dnone/https/i.guim.co.uk/img/media/00e0d30234b685b8bf5f26c0324397756f5753e0/0_0_1912_2419/master/1912.jpg?width=555&height=702",
        color: "white"
    },
    {
        name: "profPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designe",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple",
    },
    {
        name: "missScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: 31,
        description: "She is an A- list movie star with a dark past",
        image: " https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg",
        color: "red"
    },
    {
        name: "mrsPeacock",
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: " https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg",
        color: "blue"
    },
    {
        name: "mrMustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
];

let weaponsArray = [
    {
        name: "rope",
        weight: 10,
    },
    {
        name: "knife",
        weight: 8,
    },
    {
        name: "candlestick",
        weight: 2,
    },
    {
        name: "dumbbell",
        weight: 30,
    },
    {
        name: "poisen",
        weight: 2,
    },
    {
        name: "axe",
        weight: 15,
    },
    {
        name: "bat",
        weight: 13,
    },
    {
        name: "trophy",
        weight: 25,
    },
    {
        name: "pistol",
        weight: 20,
    },
];

let roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "BilliardRoom", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

function selectRandom(array) {
    //Zufallszahl zwischen 1-3
    let randomNumber = Math.floor((Math.random() * array.length - 1) + 1);
    let randomArray = array[randomNumber];
    return randomArray;
}

//Speichere 3 Zufällige Karten
function pickMystery() {
    let newMystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    return newMystery;
}



function revealMystery(object) {
    let outputEl = document.querySelector("#output");
    let divEl = document.querySelector("#card");
    outputEl.textContent = `${object.suspect.firstName} ${object.suspect.name} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room}! `;

    let newImg = document.createElement("img");
    newImg.src = `${object.suspect.image}`;
    //Bedingung ? true: false
    //Wenn das <div> ein Kind hat, entferne es. Die zweiten "" sind nur Platzhalter
    divEl.childElementCount > 0 ? divEl.innerHTML = "" : "";
    //Füge ein neues Bild als Kind hinzu
    divEl.appendChild(newImg);

    let newPName = document.createElement("p");
    newPName.textContent = `${object.suspect.name}`;
    divEl.appendChild(newPName);

    let newPDescr = document.createElement("p");
    newPDescr.textContent = `${object.suspect.description}`;
    divEl.appendChild(newPDescr);



}
let buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", () => {

    revealMystery(pickMystery());
})
