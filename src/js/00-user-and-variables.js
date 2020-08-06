'use strict';

//VARIABLES
const userLogin = document.querySelector('.user-js');
const landing = document.querySelector('.landing-js');
const adviseUser = document.querySelector('.user__advise-js');
const access = document.querySelector('.access-js');
const welcome = document.querySelector('.welcome-js');
const inputSearch = document.querySelector('.search-js');
const lupa = document.querySelector('.lupa-js');
const myFavourites = document.querySelector('.favourites-js');
const hiddenSection = document.querySelector('.hiddenSection-js');
const arrowUp = document.querySelector('.arrowUp-js');
const filmsSearch = document.querySelector('.filmSearch-js');
const resetBtn = document.querySelector('.reset-js');
const ulContainer = document.querySelector('.list-js');
const favContainer = document.querySelector('.favContainer-js');
const counterPrint = document.querySelector('.counter-js');
let counter = 0;
let tvShows = [];
let favouriteShows = [];

//OBJETO USER
let user = {
  name:'',
  favourites:''
};

