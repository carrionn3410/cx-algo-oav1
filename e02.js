kevin chapon

function isAPangram(str) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    for (let char of alphabets) {
        if (!str.toLowerCase().includes(char)) {
            retourner faux
        }
    }

    retourne vrai
}

console.log(
    isAPangram('Bonjour Efrei'),
    isAPangram('LE renard brun RAPIDE saute par-dessus le chien paresseux'),
)