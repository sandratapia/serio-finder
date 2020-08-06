'use strict';
//FUNCION PARA HACER FAVORITO CADA SHOW
function makeFavourite (show){
  //ESTA FUNCION EVALUA SI EL ARRAY favouriteShows INCLUYE EL SHOW. SI LO INCLUYE, LO BORRA Y SI NO LO INCLUYE LO AÑADE
  if(favouriteShows.includes(JSON.stringify(show))){
    favouriteShows.splice(favouriteShows.indexOf(JSON.stringify(show)), 1);
    counter -= 1;
  }else{
    favouriteShows.push(JSON.stringify(show));
    counter += 1;
  }
  //ESTE CONDICIONAL ES PARA QUE OCULTE LA PARTE DE LOS FAVORITOS O NO SEGÚN SI LOS HAY
  if(hiddenSection.classList.contains('hidden')){
    toogleFavourites();
  }
  if(favouriteShows.length === 0){
    hiddenFavourites();
  }
  //A SU VEZ EJECUTA EL CONTADOR, EL VALIDADOR DEL LOCALSTORAGE Y PINTA LOS FAVORITOS
  paintFavourites();
  addCounter();
  valueUser();
}

function paintFavourites(){
  favContainer.innerHTML = '';
  //VACIAMOS EL CONTENEDOR DE FAVORITOS
  for(let favourite of favouriteShows){
    //PASAMOS A OBJETO CADA favorito DE favouriteShows Y LE HACEMOS HIJO DEL UL CON EL CONSTRUCTOR LI
    let actualFavouriteLi = constructorLi(JSON.parse(favourite));
    //EJECUTAMOS LA FUNCION REMOVE FAVOURITE QUE TIENE COMO PARAMETRO EL LI EN JSON Y EL FAVORITO
    removeFavourite(actualFavouriteLi, favourite);
    //LO HACEMOS HIJO DEL favContainer
    favContainer.appendChild(actualFavouriteLi);
  }
}

function removeFavourite(showLi, show){
  showLi.addEventListener('click', function(event){
    //BUSCAMOS EL INDICE DEL SHOW QUE QUEREMOS BORRAR CON INDEXOF Y VOLVEMOS A PINTAR FAVORITOS
    favouriteShows.splice(favouriteShows.indexOf(show), 1);
    paintFavourites();
    counter -=1;
    addCounter();
    //ELIMINAMOS TAMBIEN LA CLASE DE FAVORITO EN LOS tvShows DE SEARCH
    removeFavouriteFromSearch(show);
    if(favouriteShows.length === 0){
      hiddenFavourites();
    }
  });
}

function removeFavouriteFromSearch(show) {
  //SELECCIONAMOS TODOS LOS LIS DEL CONTAINER DEL BUSCADOR
  const tvShowsElements = ulContainer.querySelectorAll('.main__listSeries');
  for(let tvShow of tvShows) {
    //POR CADA UNNO DE LOS tvShows COMPARAMOS SI EL ID DEL SHOW DE FAVORITOS (EL QUE HEMOS PINCHADO) Y EL ID DEL SHOW DEL SEARCH SON IGUALES
    if(JSON.parse(show).show.id == tvShow.show.id) {
      tvShowsElements[tvShows.indexOf(tvShow)].classList.remove('favourite__tvShow');
      //SI ES ASÍ LE QUITA LA CLASE DE FAVORITO AL LI EN EL SEARCH
    }
  }
}


//RESET TODOS LOS FAVORITOS
function resetFavourites(){
  counter = 0;
  favouriteShows = [];
  addCounter();
  valueUser();
  paintFavourites();
  hiddenFavourites();
}

resetBtn.addEventListener('click', resetFavourites);


//CONTADOR FAVORITOS

function addCounter () {
  counterPrint.innerHTML = `${counter}`;
}
