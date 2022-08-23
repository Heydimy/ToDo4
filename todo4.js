import readlineSync from 'readline-sync'

var usuario = readlineSync.question("eu como usuario de:" )
var desejo = readlineSync.question("desejo: ")
var funcionalidade = readlineSync.question("para:" )

console.log("Eu Como usuario de:" ,usuario, 'desejo' ,desejo, 'para' ,funcionalidade)
