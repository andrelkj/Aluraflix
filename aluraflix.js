//create HTML elements inside a dynamic list

var moviesList = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/54/04/20150812.jpg",
  "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-filme-eu-sou-lenda-pode-ser-usado-nas-aulas-biologia-por-abordar-temas-como-doencas-virais-imunizacao-5bcf030bce2eb.jpg", "https://m.media-amazon.com/images/I/81QchPvsz0L._AC_SY550_.jpg", "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/10767/filme_10767.jpg"
];

var moviesName = [
    "School of Rock", "Sherek", "I am Legend", "Puss in Boots", "Avatar"
];

for (var i = 0; i < moviesList.length & i < moviesName.length; i++) {
  document.write("<img src=" + moviesList[i] + ">");
  document.write(moviesName[i])
}


// transform for to while     
// create condition that makes all elements turn into json
// create a new list with movies name




