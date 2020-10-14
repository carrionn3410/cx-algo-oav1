nombre de fonctions(tableau, élément) {
    soit n = 0

    for (soit i = 0; i < array.length; i++) {
        if (tableau[i] === élément) {
            n++
        }
    }

    retour n
}

// Compter
console.log(
    compter([1, 1, 2, 5], 1),
)

fonction moyenne(tableau) {
    const total = tableau.longueur

    soit somme = 0
    for (soit i = 0; i < array.length; i++) {
        somme + = tableau[i] // somme = somme + tableau [i]
    }

    retour somme / total
}

// Moyenne
console.log(
    moyenne([1, 2, 3, 4])
)

function min(tableau) {
    laissez le plus petit = Infini

    for (soit i = 0; i < array.length; i++) {
        if (plus petit > tableau[i]) {
            plus petit = tableau[i]
        }
    }

    retour le plus petit
}

// min
console.log(
    min([58, 0, 45, 34]),
)

function max(tableau) {
    laissez le plus haut = -Infini

    for (soit i = 0; i < array.length; i++) {
        if (le plus élevé < tableau[i]) {
            le plus élevé = tableau[i]
        }
    }

    retour le plus élevé
}

// max
console.log(
    max([58, 0, 45, 34]),
)

fonction shift(tableau) {
    laissez newArray = []

    for (soit i = 1; i < array.length; i++) {
        newArray.push(tableau[i])
    }

    return newArray
}

// décalage
console.log(
    décalage([1, 2, 3, 4]),
)

function diff(tableau) {
    const plus haut = max(tableau)
    const plus petit = min(tableau)

    retourne Math.abs(le plus élevé - le plus petit)
}

// diff
console.log(
    diff([1, 9, 7, 45, 23]),
)