const fs = require('fs')
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    data : function (req,res) {
        res.send(heroes);
    },
    heroe : function (req,res) {
        // Acá lo primero será encontrar al héroe que corresponda
	let id = req.params.idHeroe
	let heroe = heroes.filter((heroe)=>{
		return heroe.id == id
	})
	heroe = heroe[0]

	if(heroe == undefined){
		res.send('Este heroe no ha sido encontrado pruebe con otro ID')
	}else{
		res.send(`Hola mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`)
	}
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
    },
    biografia : function (req,res) {
        // Acá lo primero será encontrar al héroe que corresponda
	let id = req.params.idHeroe
	let ok = req.params.ok
	let heroe = heroes.filter((heroe)=>{
		return heroe.id == id
	})
	heroe = heroe[0]

	if(heroe == undefined){
		return res.send('No encontramos un heroe para mostrarte la biografia')
	}
	if(ok == 'ok'){
		return res.send(`${heroe.nombre}: \n\n${heroe.resenia}`)
	}else{
		return res.send(`${heroe.nombre}: Lamento que no desees saber mas de mi`)
	}
	

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
    }
}