const races = [
	{
		rarity: 1,
		race: "octopus"
	},
	{
		rarity: 2,
		race: "starfish"
	},
	{
		rarity: 3,
		meduse: "meduse"
	},
	{
		rarity: 4,
		race: "blobfish"
	},
	{
		rarity: 5,
		race: "piranha"
	},
	{
		rarity: 6,
		race: "tortue"
	},
];

const prob = {
	"hat": require('./hats'),
	"background": require('./background'),
	"glass": require('./glass'),
	"jackets": require('./jackets'),
	"mouth": require('./mouth'),
	"hand": require('./hand')
}

const allCaracteres = [];

const recursiveGenerator = function (source) {
	const allCaracteristique = Object.values(source)
	races.forEach(race => {
		geneCharater(race, allCaracteristique[0], allCaracteristique.slice(1))
	});
	function geneCharater(caractere, caracteristiques, nextCaracteristique) {
		if (caracteristiques) {
			caracteristiques.forEach(caracteristique => {
				let newCaractere = { ...caractere, [caracteristique.type]: { ...caracteristique } }
				geneCharater(newCaractere, nextCaracteristique[0], nextCaracteristique.slice(1))
			});
		} else {
			allCaracteres.push(caractere)
		}
	}
}


recursiveGenerator(prob)
console.log(allCaracteres[0], ' icci')