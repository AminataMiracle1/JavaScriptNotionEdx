console.log("Hello World!");
function hello(){
    alert("Hello World!");
}
// Counter définir un variable.
let counter = 0;

function compter(){
    let valeurCompter = document.querySelector("emp");
    counter++;
    valeurCompter.innerHTML = counter;
    // mettre une condition avec modulo pour afficher sur un alerte pour un multible
    // de 10 qui a reste 0
    if (counter % 10 === 0){
        alert(`Counter is now ${counter}!`);
    }
}

// fonction qui m'anipuler  un tag et afficher quel chose sur cette page n
// nous avons besoin de le selection.

function afficher(){
    document.querySelector("h1").innerHTML = "Goodbye!";
}

// Introduction des conditions en javascript
function conditionAfficher(){
    // Mettre le tag sur une variable.
    let heading = document.querySelector("h1");
    if (heading.innerHTML === "Hello!"){
        heading.innerHTML = "Goodbye!";
    }
    else {
        heading.innerHTML = "Hello!";
    }
}
////////// Exécuter les fonction ici ////////////////////////
// Une autre manière d'exuter un fonction sans utiliser le DOM du HTML est d'appeler le Id du tag que nous voulons affectter la fonction

/*document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("btnCompter").onclick = compter;
});
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("btnHello").onclick = conditionAfficher;
});*/

///////////////////////////////////////////////////// trier à l'envers la chaine à l'envers/////////////////////////////
let monPremierTableau = [1,2,3,4,5,6,7,8,9,10];
let pope = monPremierTableau.sort((a, b) => a - b);


console.log(pope);
console.log(`j'ai mangé ${4+ 5} pomme rouge
`)

