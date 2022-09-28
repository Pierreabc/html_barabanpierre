const Element1 = document.getElementById('conteneur');
console.log(Element1);

const newElt = document.createElement("div");
let elt = document.getElementById("conteneur");

elt.appendChild(newElt);

const newElt2 = document.createElement("div");
elt.appendChild(newElt2);

let elt = document.getElementById('conteneur');
elt.innerHTML = "<ul><li>Element1</li><li>Element2</li></ul>"