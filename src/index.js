import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/navBar.scss';
import './scss/cards.scss';
import './scss/homePage.scss';
import './scss/aboutUs.scss';
import './scss/countUp.scss';
import './scss/chooseUs.scss';
import './scss/infoWithImage.scss';
import './scss/galleryCards.scss';
import './scss/owlCarousel.scss';
import './scss/designGallery.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
