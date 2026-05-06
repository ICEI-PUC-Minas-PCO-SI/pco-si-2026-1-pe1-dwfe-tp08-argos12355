//B.1. Definição dos dados (JSON)

const catalogo = [
  {
    id: 1,
    titulo: "Homem-Aranha",
    tipo: "filme",
    ano: 2002,
    generos: ["ação", "aventura"],
    nota: 8.4,
    assistido: true
  },
  {
    id: 2,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["ficção", "suspense"],
    nota: 6.2,
    assistido: false

  },
  {
    id: 3,
    titulo: "Pokémon",
    tipo: "serie",
    ano: 1992,
    generos: ["anime", "aventura", "comédia fantástica"],
    nota: 10,
    assistido: true
  },
  {
    id: 4,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 7.6,
    assistido: false
  },
  {
    id: 5,
    titulo: "Voltron",
    tipo: "serie",
    ano: 1984,
    generos: ["ação-aventura", "ficção científica", "mecha"],
    nota: 8,
    assistido: true
  },
  {
    id: 6,
    titulo: "Bleach",
    tipo: "serie",
    ano: 2001,
    generos: ["shonen", "ação", "aventura"],
    nota: 9.5,
    assistido: false
  },
]
  //B.2 - Acesso e leitura dos dados

 console.log(catalogo);
 console.log("Título do primeiro item:", catalogo[0].titulo);
 console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

 if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
  } else {
  console.log("O terceiro item não possui segundo gênero.");
  }

//B.3 - Iterações com iterators

// A) Listagem com forEach

catalogo.forEach(function(item) {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

//B) Transformação com map

const titulosEmCaixaAlta = catalogo.map(function(item) {
  return item.titulo.toUpperCase();
});

console.log("Títulos em caixa alta:", titulosEmCaixaAlta);