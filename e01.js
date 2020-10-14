function isUpperCase(code) {
    retour(code > = 65 && code <= 90)
}

function howManyCamelCase(str) {
    if (!str) {
        return 0
    }

    let count = 1 // je

    for (soit i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)
        if (isUpperCase(charCode)) {
            count++
        }
    }

    nombre de retours
}