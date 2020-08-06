//PINTAR LAS PELÍCULAS EN EL HTML
function constructorLi(show){
//AQUÍ CONSTRUIMOS LA ESTRUCTURA DE LOS LIS PARA CADA SHOW QUE COINCIDA EN LA BÚSQUEDA
  const newLi = document.createElement('li');
  newLi.setAttribute('class', 'main__listSeries');
  if(favouriteShows.includes(JSON.stringify(show))){
    newLi.classList.add('favourite__tvShow');
    //AQUI LE AÑADIMOS LA CLASE FAVORITO SI YA ESTÁ DENTRO DE favoriteShows
  }

  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'img__film');
  newLi.appendChild(newDiv);

  const newImg = document.createElement('img');
  newImg.setAttribute('class', 'images');
  if(show.show.image && show.show.image.medium) {
    newImg.src = show.show.image.medium;
  } else {
    newImg.src='./assets/images/img-no-disponible.jpg';
  }
  newImg.setAttribute('title', show.show.name);
  newDiv.appendChild(newImg);

  let secDiv = document.createElement('div');
  secDiv.setAttribute('class', 'title__film');
  newLi.appendChild(secDiv);

  let title = document.createElement('h3');
  let newTitle = document.createTextNode(show.show.name);
  title.appendChild(newTitle);
  secDiv.appendChild(title);

  return newLi;
  //NOS DEVUELVE EL newLi CONSTRUIDO
}


function paintTVs(){
  //PRIMERO VACIAMOS EL UL CONTAINER
  ulContainer.innerHTML = '';

  for(let show of tvShows){
    const newLi = constructorLi(show);
    //CREAMOS UNA CONSTANTE PARA IGUALARLO A CADA LI CONSTRUIDO QUE NOS DEVUELVA constructorLi Y HACEMOS APPENDCHILD AL UL
    ulContainer.appendChild(newLi);
    newLi.addEventListener('click', function(event){
      event.currentTarget.classList.toggle('favourite__tvShow');
      //AÑADIMOS LA CLASE DE FAVORITO
      makeFavourite(show);
      //EVALUA SI YA ES O NO FAVORITO, Y SINO LO AÑADE
    });
    resetBtn.addEventListener('click', function(event){
      newLi.classList.remove('favourite__tvShow');
      counterPrint.innerHTML = '0';
      //QUITAMOS LA CLASE DE FAVORITO AL PULSAR EN EL BOTON DE BORRAR TODAS Y DEJAMOS EL CONTADOR DE FAVORITOS A CERO
    });
  }
}