'use strict';
const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');

const toggleBackdrop = () => backdrop.classList.toggle('visible');

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const backdropClickHandler = () => toggleBackdrop();
const cancelAddMovie = () => toggleMovieModal();

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieBtn.addEventListener('click', cancelAddMovie);
