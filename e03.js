function marsos(str) {
    const sosCount = str.longueur / 3
    const messages = "SOS".répéter(sosCount)

    laissez errorCount = 0
    for (soit i = 0; i < str.length; i++) {
        if (str[i] ! == messages[i]) {
            errorCount++
        }
    }

    return errorCount
}