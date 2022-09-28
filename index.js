const Element1 = document.getElementById('conteneur');
console.log(Element1);

const newElt = document.createElement("div");
let elt = document.getElementById("conteneur");

elt.appendChild(newElt);

elt.appendChild(newElt2);

const newElt2 = document.createElement("div");
let elt2 = document.getElementById('conteneur');
elt2.innerHTML = "<ul><li>Element1</li><li>Element2</li></ul>"