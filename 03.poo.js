console.log("03 - Poo")

//Constructeur d'objet

function Personne(nom, prenom, pseudo) {

    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {

        return this.nom + this.prenom + this.pseudo;

    }

}


var jules = new Personne("LEMAIRE", "Jules", "jules77");

var paul = new Personne("LEMAIRE", "Paul", "paul44");


console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());


function afficherPersonne(objPers) {

    console.log(objPers.nom);
    console.log(objPers.prenom);
    console.log(objPers.pseudo);
    console.log(objPers.getNomComplet());


}


afficherPersonne(paul);


// Modifier un objet

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

// Ajouter propriete

console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";

console.log(jules.age);

jules.age = 30;

console.log(jules.age);

//Ajout Methode

Personne.prototype.getInitiales = function () {

    return this.nom.charAt(0) + this.prenom.charAt(0);

}

console.log(jules.getInitiales());


//Objet sans fonction constructeur


var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function () {
        return this.nom + this.prenom + this.pseudo;
    }

}

afficherPersonne(robert);



function Client(nom, prenom, pseudo, numC) {

    Personne.call(this,nom, prenom, pseudo);

    this.numeroClient = numC;

    this.getInfos = function () {
        return this.numeroClient + this.nom + this.prenom;
    }



}

var steve = new Client("LUCAS","Steve","steve44","A01");

afficherPersonne(steve);

console.log(steve.numeroClient);

console.log(steve.getInfos());