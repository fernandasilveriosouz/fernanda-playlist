// ============================================================
//  API DE PLAYLIST  -  Relacionando Musicas e Artistas
//  Backend 2DAT2  -  3o Trimestre
//  O frontend ja esta pronto em public/. Complete os TODOs.
// ============================================================
const express = require("express");
const app = express();
const port = 3000;  


app.use(express.json());
app.use(express.static("public"));
// ---- LISTA 1: artistas (cada um tem um id) ----
const artistas = [
  { id: 1, nome: "Shakira", pais: "Colômbia" },
  { id: 2, nome: "The Weeknd", pais: "Canadá" },
  { id: 3, nome: "Anitta", pais: "Brasil" },
  { id: 4, nome: "Ed Sheeran", pais: "Reino Unido" },
];

// ---- LISTA 2: musicas (guardam so o artistaId, nao o nome) ----
const musicas = [
  { titulo: "Hips Don't Lie", duracao: 218, artistaId: 1 },
  { titulo: "Waka Waka (This Time for Africa)", duracao: 202, artistaId: 1 },
  { titulo: "Blinding Lights", duracao: 200, artistaId: 2 },
  { titulo: "Save Your Tears", duracao: 215, artistaId: 2 },
  { titulo: "Envolver", duracao: 193, artistaId: 3 },
  { titulo: "Shape of You", duracao: 234, artistaId: 4 },
];

// 1) LISTAR ARTISTAS
app.get("/artistas", (req, res) => {
  res.status(200).json(artistas);
});

  // TODO: responder a lista de artistas com res.status(200).json(...)
app.get("/musicas", (req, res) => {
  const RESULTADO = musicas.map((m) => {
    const ARTISTA = artistas.find((a) => a.id === m.artistaId);
    return {
      titulo: m.titulo,
      duracao: m.duracao,
      artista: ARTISTA ? ARTISTA.nome : "Artista desconhecido",
      pais: ARTISTA ? ARTISTA.pais : "País desconhecido",
    };
  });
  res.status(200).json(RESULTADO);
});

// 2) LISTAR MUSICAS  (juntando cada musica com o seu artista)
app.get("/musicas", (req, res) => { 
  const ID = Number(req.params.id);
  const doArtista = musicas.filter((m) => m.artistaId === id);
  res.status(200).json(doArtista);
});

app.listen(port, () => {
  console.log(`PLaylist no ar em http://localhost:${port}`);
 });
 
  // TODO: use map para percorrer 'musicas'.
  //       para cada musica, use find em 'artistas' para achar
  //       aquele cujo id === m.artistaId.
  //       devolva um objeto com: titulo, duracao, artista (nome) e pais.
  //       lembre: find pode devolver undefined -> trate com ? :



