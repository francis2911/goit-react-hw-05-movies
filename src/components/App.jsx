import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './navbar/Navbar';

import { Home, Movie, MovieDetails } from '../views';

import { Cast } from './cast/Cast';

import { Reviews } from './reviews/Reviews';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movie />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />

          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
