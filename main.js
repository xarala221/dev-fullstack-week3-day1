console.log('Hello Js,')
// commentaire sur une seule ligne
/*
commentaires sur plusieurs lignes
*/
// variables
// var x = 42 // Entier / nombres
// let y = 25.5 // Float / Decimal
// const nom = 'Ousseynou' // Chaine de caratere / Text

// var nombre_1 = 12
// var nombre_2 = 5
// // addition
// var addition = nombre_1 + nombre_2
// var sous = nombre_1 - nombre_2
// var mult = nombre_1 * nombre_2
// var div = nombre_1 / nombre_2
// var modul = nombre_1 % nombre_2
// console.log('modul', modul)

// assignstion
// = 10 = 10 / x = y
// += / x += y == x = x + y

// operateurs logiques
// && et, || ou,
// operateurs de comparaison
// modou ==

// fonctions
function calculateur(nombre_1, nombre_2) {
  var total = nombre_1 + nombre_2
  console.log('Resultat total: ', total)
}

// calculateur(10, 5)

function nooDef(nom) {
  console.log(nom + ' Na nga def?')
}
/*
Si vous avez 17 ans, attendez l'annee prochaine.
L'etat du Senega, dit que l'age acceptée pour passer le bac et 18 ans ou plus.
L'age limite est 35 ans.
*/
function passerLeBac(age) {
  if (age === 17) {
    console.log("Attendez l'annee prochaine")
  } else if (age > 35) {
    console.log('Mon vieux, attendez les concours')
  } else if (age >= 18) {
    console.log('Vous etes admis')
  } else {
    console.log('Mon petit, Attendez')
  }
}

passerLeBac(16)
