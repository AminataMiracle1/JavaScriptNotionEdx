function hello(){
    alert("Hello World!");
}
// Counter définir un variable.
let counter = 0;

function compter(){
    const valeurCompter = document.querySelector("emp");
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