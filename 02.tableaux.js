console.log("02 - Tableaux");


var villes = ["nantes","paris","saint-nazaire","angers","le mans"];

villes.forEach(function(element){
    
console.log(element);

});

var lettreADansToutesLesVilles = villes.every(function(element){

    return (element.indexOf("a")!== -1);

})

console.log(lettreADansToutesLesVilles);


var auMoinsUneVilleAvecUnTiret = villes.some(function(element){

    return element.indexOf("-")!== -1 ;
});

console.log(auMoinsUneVilleAvecUnTiret);


var villesSansTiretSansEspace = villes.filter(function(element){


    return ((element.indexOf(" ")==-1 )&& (element.indexOf("-") ==-1));

});

console.log(villesSansTiretSansEspace);


var villesMajusculesSeTerminantParS = villes

.filter(function(element){

    return (element.charAt(element.length-1) ==="s");
 
 })

 .map(function(element){

    return element.toUpperCase();

});


console.log(villesMajusculesSeTerminantParS);