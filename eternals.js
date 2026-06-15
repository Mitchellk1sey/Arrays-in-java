const herosData = [
    {
        heroName: "Ikaris", 
        yearsActive: 5000,
        title: "Leader", 
        powers: ["flight", "super strength", "laser eyes"],
        image: "images/Ikaris.png"
    },
    {
        heroName: "Sersi", 
        yearsActive: 5000,
        title: "Transuter", 
        powers: ["Telekinesis", "immortality", "matter manipulation"],
        image: "images/Sersi.png"
    },
    {  
        heroName: "Thena", 
        yearsActive: 5000,
        title: "Warrior", 
        powers: ["sword", "combat", "teleportation"],
        image: "images/Thena.png"
    },
    {  
        heroName: "Kingo", 
        yearsActive: 5000,
        title: "Energy Shooter", 
        powers: ["energy blasts", "agility", "sword"],
        image: "images/Kingo.png"
    },
    {  
        heroName: "Makkari", 
        yearsActive: 5000,
        title: "Speedster", 
        powers: ["super spped", "agility", "communication"],
        image: "images/Makkari.png"
    },
];

document.querySelector(".intro").textContent = 
  `Meet the Eternals — powerful beings with unique abilities. The first on our list is ${herosData[0].heroName}, the ${herosData[0].title}.`;

let heroHTML = "<ol>";
herosData.forEach(h => {
    heroHTML += `<li>${h.heroName} - ${h.title}</li>`;
});
heroHTML += "</ol>";
document.querySelector(".heroList").innerHTML = heroHTML;

let allPowers = [...new Set(herosData.flatMap(h => h.powers))];
document.querySelector(".powers").textContent = "Available powers: " + allPowers.join(", ");

const findHero = () => {
    let searchInput = document.querySelector("#powerInput").value.toLowerCase().trim();
    let matches = herosData.filter(h => h.powers.some(p => p.toLowerCase() === searchInput));

    let resultText = document.querySelector(".result");
    let heroImage = document.querySelector(".heroImg");

    if (matches.length > 0) {
        let heroNames = matches.map(h => h.heroName).join(", ");
        resultText.textContent = `Eternals with "${searchInput}": ${heroNames}`; 
        heroImage.src = matches[0].image;
    } else {
        resultText.textContent = `No Eternals found with "${searchInput}".`;
        heroImage.src = "";
    }
};

