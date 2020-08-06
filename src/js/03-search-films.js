//TRAER LOS DATOS DESDE LA API
function searchFilms (event){
  let inputValue = inputSearch.value;
  const urlJson = `http://api.tvmaze.com/search/shows?q=${inputValue}`;
  event.preventDefault();
  fetch(urlJson)
    .then(response => response.json())
    .then(data => {
      tvShows = data;
      paintTVs();
    //IGUALAMOS tvShows (array) A DATA PARA PODER PINTAR LUEGO LAS PELICULAS Y EJECUTAMOS paintTVs, QUE ES LA QUE PINTA CADA PELÍCULA
    });
}

//EVENT LISTENER BUSCADOR PELÍCULAS
inputSearch.addEventListener('keyup', function(event){
  if(event.keyCode === 13) {
    searchFilms(event);
  }else if (inputSearch.value ===''){
    ulContainer.innerHTML = '';
  }
  //ESTE LISTENER ES PARA QUE AL DARLE AL INTRO NOS BUSQUE TAMBIÉN LAS PELÍCULAS, POR ESO EJECUTAMOS searchFilms QUE ES EL FETCH
  //Y SI EL INPUT NO TIENE NADA VACÍA ulContainer
});
//ESTE LISTENER ES EL DE LA LUPA
lupa.addEventListener('click', searchFilms);
