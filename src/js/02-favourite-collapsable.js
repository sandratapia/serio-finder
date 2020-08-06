//OCULTAR COLUMNA FAVORITOS

function toogleFavourites() {
  hiddenSection.classList.toggle('hidden');
  arrowUp.classList.toggle('upDown');
  filmsSearch.classList.toggle('addGrid');
}

myFavourites.addEventListener('click', toogleFavourites);

function hiddenFavourites(){
  if(!hiddenSection.classList.contains('hidden')) {
    hiddenSection.classList.toggle('hidden');
    arrowUp.classList.toggle('upDown');
    filmsSearch.classList.toggle('addGrid');
  }
}