// VOIR API CONSOLE :
function getPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((response) => response.json())
    .then((response) => { console.log(response); })

    .catch((error) => {
      console.log("Pokemon not found", error);
    });
}

getPokemon()

// LE FOR D'APPARITION ET DE REMPLISSAGE DES BOXS

for (let i = 1; i < 199; i++) {

  function fetchPokedex() {

    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())

      .then((json) => {

        // INSERTION DU NOM  :
        name.innerHTML = `${json.name}`

        // INSERTION DE LIMAGE
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

        // INSERTION DES ID #001...      
        p.innerHTML = `#${json.id.toString().padStart(3, 0)}`

        // AFFICHAGE DES TABLEAUX DANS LA CONSOLE
        console.log(json)

        // IF DES COULEURS EN FONCTION DES TYPES :

        if (json.types[0].type.name == "rock") {
          name.style.backgroundColor = "#B69E31";
        }

        else if (json.types[0].type.name == "ghost") {
          name.style.backgroundColor = "#70559B"
        }

        else if (json.types[0].type.name == "steel") {
          name.style.backgroundColor = "#B7B9D0"
        }

        else if (json.types[0].type.name == "water") {
          name.style.backgroundColor = "#6493EB"
        }

        else if (json.types[0].type.name == "grass") {
          name.style.backgroundColor = "#74CB48"
        }

        else if (json.types[0].type.name == "psychic") {
          name.style.backgroundColor = "#FB5584"
        }

        else if (json.types[0].type.name == "ice") {
          name.style.backgroundColor = "#9AD6DF"
        }

        else if (json.types[0].type.name == "dark") {
          name.style.backgroundColor = "#75574C"
        }

        else if (json.types[0].type.name == "fairy") {
          name.style.backgroundColor = "E69EAC"
        }

        else if (json.types[0].type.name == "normal") {
          name.style.backgroundColor = "#AAA67F"
        }

        else if (json.types[0].type.name == "fighting") {
          name.style.backgroundColor = "C12239"
        }

        else if (json.types[0].type.name == "flying") {
          name.style.backgroundColor = "#A891EC"
        }

        else if (json.types[0].type.name == "poison") {
          name.style.backgroundColor = "#A43E9E"
        }

        else if (json.types[0].type.name == "ground") {
          name.style.backgroundColor = "#DEC16B"
        }

        else if (json.types[0].type.name == "bug") {
          name.style.backgroundColor = "#A7B723"
        }

        else if (json.types[0].type.name == "fire") {
          name.style.backgroundColor = "#F57D31"
        }

        else if (json.types[0].type.name == "electric") {
          name.style.backgroundColor = "#F9CF30"
        }

        else if (json.types[0].type.name == "dragon") {
          name.style.backgroundColor = "#7037FF"
        }

      })
  }

  console.log(fetchPokedex());

  // CRÉATION D'UNE DIV À CHAQUE ITÉRATION :
  let box = document.createElement('div');
  box.classList.add('box');

  // INSERTION DE BOX DANS SECTION :
  let section = document.querySelector("section")
  section.append(box);

  // CRÉATION D'UNE DIV POUR CHAQUE NOMS :
  let name = document.createElement('div');
  name.classList.add("name")
  // INSERTION DE LA DIV P DANS CHAQUE BOX :
  let p = document.createElement("div");
  p.classList.add("p");
  box.append(p);
  // INSERTION DE L'IMAGE DANS CHAQUE DIV :
  let img = document.createElement("img")
  box.append(img);



  // INSERTION DU NOM DANS CHAQUE DIV CRÉÉES
  box.append(name);


}

// TABLEAU DES TYPES :

const colors = {
  // rock: "#B69E31",
  // ghost: "#70559B",
  // steel: "#B7B9D0",
  // water: "#6493EB",
  // grass: "#74CB48",
  // psychic: "#FB5584",
  // ice: "#9AD6DF",
  // dark: "#75574C",
  // fairy: "E69EAC",
  // normal: "#AAA67F",
  // fighting: "C12239",
  // flying: "#A891EC",
  // poison: "#A43E9E",
  // ground: "#DEC16B",
  // bug: "#A7B723",
  // fire: "#F57D31",
  // electric: "#F9CF30",
  // dragon: "#7037FF"
}
