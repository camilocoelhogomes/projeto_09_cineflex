import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';

import MovieSeats from './components/MovieSeats';
import MovieCatalog from './components/MovieCatalog';
import TopBar from './components/TopBar';
import MovieSections from './components/MovieSections';


function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const selectSeat = (idSeat) => {
    const newSelectedSeats = [...selectedSeats];

    if (newSelectedSeats.indexOf(idSeat) === -1) {
      setSelectedSeats([...newSelectedSeats, idSeat]);
    }
    else {
      setSelectedSeats(
        newSelectedSeats.filter(seat => seat !== idSeat))
    }

    console.log(selectedSeats);
  }

  return (
    <BrowserRouter>
      <TopBar />

      <Switch>
        <Route exact path='/'>
          <MovieCatalog />
        </Route>
        <Route exact path='/movie/:idMovie'>
          <MovieSections />
        </Route>
        <Route exact path='/movie/:idMovie/section/:idSection'>
          <MovieSeats
            selectedSeats={selectedSeats}
            selectSeat={selectSeat}
          />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
