'use strict';

//METE EL VALOR DE LOS INPUTS EN EL OBJETO Y GUARDA EN LOCAL STORAGE
function valueUser (){
  user.name = userLogin.value;
  user.favourites = favouriteShows;
  localStorage.setItem('user', JSON.stringify(user));
}

function recoverUser(){
  const local = localStorage.getItem('user');
  const dataLocal = JSON.parse(local);
  if(dataLocal !== null){
    userLogin.value = dataLocal.name;
    user.name = dataLocal.name;
    userLogin.innerHTML = dataLocal.name;

    user.favourites = dataLocal.favourites;
    favouriteShows = user.favourites;
    counter = favouriteShows.length;
    addCounter();
    paintFavourites();
    hiddenModal();
    if(favouriteShows.length > 0){
      toogleFavourites();
    }
  }
}
