// const Element1 = document.getElementById('conteneur');
// console.log(Element1);

// const newElt = document.createElement("div");
// let elt = document.getElementById("conteneur");

// elt.appendChild(newElt);

// elt.appendChild(newElt2);

// const newElt2 = document.createElement("div");
// let elt2 = document.getElementById('conteneur');
// elt2.innerHTML = "<ul><li>Element1</li><li>Element2</li></ul>"


localStorage.setItem("Pierre", "dany");
localStorage.getItem("Pierre");

let objJson = {
    prenom : "dany",
    age : 30,
    taille : 170
}

let objLinea = JSON.stringify(objson);
localStorage.setItem("obj",objLinea);

localStorage.getItem("obj");
JSON.parse(objLinea);
alert(objJson.age) // renvoie 30