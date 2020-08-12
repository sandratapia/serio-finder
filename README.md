# SerioFinder

_Página hecha con JavaScript, la cual mediante una petición a la API devuelve un listado de series, las cuales se pintan en pantalla y puedes elegir tus series favoritas._

## Tecnologías utilizadas 🚀

_Este proyecto está hecho con JavaScript, HTML5, preprocesador Gulp, Sass y CSS3._

### Instalación 🔧

_Para poner en marcha el proyecto abre una terminal en la carpeta raíz de tu repositorio e instala las dependencias locales ejecutando en la terminal el comando:_

```
npm install
```

_Para arrancar el proyecto, hay que ejecutar el comando siguiente en la consola:_

```
npm start
```

_Por último para publicar la página en GitHub Pages, ejecutamos el siguiente comando:_

```
npm run docs
```

### Proyecto
_La lógica de JavaScript está dividida en parciales:_
*0. User and variables.*
*1. Landing page*
*2. Favourite collapsable*
*3. Search films*
*4. Paint films*
*5. Paint favourites*
*6. Local storage*

Algunos ejemplos de código, que merece la pena destacar serían:

```
function searchFilms (event){
  let inputValue = inputSearch.value;
  const urlJson = `http://api.tvmaze.com/search/shows?q=${inputValue}`;
  event.preventDefault();
  fetch(urlJson)
    .then(response => response.json())
    .then(data => {
      tvShows = data;
      paintTVs();
    });
}
```
```
function constructorLi(show){
  const newLi = document.createElement('li');
  newLi.setAttribute('class', 'main__listSeries');
  if(favouriteShows.includes(JSON.stringify(show))){
    newLi.classList.add('favourite__tvShow');
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
}
```
```
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
```

_Y ya estaría!!_

---
⌨️ Con ❤️ por [SandraTapia](https://github.com/sandratapia) 😊
