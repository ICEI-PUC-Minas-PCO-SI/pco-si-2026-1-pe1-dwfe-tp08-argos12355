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

console.log("Títulos:", titulosEmCaixaAlta);
// C) Seleção com filter

const naoAssistidos = catalogo.filter(function(item) {
  return item.assistido === false;
});

console.log("Quantidade de não assistidos:", naoAssistidos.length);

// D) Busca com find

const itemNotaAlta = catalogo.find(function(item) {
  return item.nota >= 9;
});

if (itemNotaAlta) {
  console.log(`Primeiro item com nota >= 9: ${itemNotaAlta.titulo} - Nota: ${itemNotaAlta.nota}`);
} else {
  console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}

// E) Agregação com reduce

const somaNotas = catalogo.reduce(function(soma, item) {
  return soma + item.nota;
}, 0);

const mediaNotas = somaNotas / catalogo.length;

const assistidos = catalogo.filter(function(item) {
  return item.assistido === true;
});

const somaNotasAssistidos = assistidos.reduce(function(soma, item) {
  return soma + item.nota;
}, 0);

const mediaAssistidos = somaNotasAssistidos / assistidos.length;

console.log("Média geral das notas:", mediaNotas.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

// F) Checagens com some e every

const existeAntesDe2000 = catalogo.some(function(item) {
  return item.ano < 2000;
});

const todosTemGenero = catalogo.every(function(item) {
  return item.generos.length > 0;
});

console.log("Existe algum item antes de 2000?", existeAntesDe2000);
console.log("Todos os itens têm pelo menos 1 gênero?", todosTemGenero);

// B.4 - Saída na tela

const quantidadeFilmes = catalogo.filter(function(item) {
  return item.tipo === "filme";
}).length;

const quantidadeSeries = catalogo.filter(function(item) {
  return item.tipo === "serie";
}).length;

const ranking = [...catalogo]
  .sort(function(a, b) {
    return b.nota - a.nota;
  })
  .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
  <h2>Resumo do Catálogo</h2>

  <p>Total de itens no catálogo: ${catalogo.length}</p>
  <p>Quantidade de filmes: ${quantidadeFilmes}</p>
  <p>Quantidade de séries: ${quantidadeSeries}</p>
  <p>Quantidade de não assistidos: ${naoAssistidos.length}</p>
  <p>Média geral de notas: ${mediaNotas.toFixed(2)}</p>

  <h3>Top 3 notas</h3>
  <ol>
    ${ranking.map(function(item) {
      return `<li>${item.titulo} - Nota: ${item.nota}</li>`;
    }).join("")}
  </ol>
`;