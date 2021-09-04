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
  const [selectedSeats, setSelectedSeats] = useState({
    id: [],
    name: '',
    cpf: '',
  });

  const selectSeat = (idSeat, isAvailable) => {
    const newSelectedSeats = { ...selectedSeats };

    if (isAvailable) {
      if (newSelectedSeats.id.indexOf(idSeat) === -1) {
        newSelectedSeats.id.push(idSeat);
      }
      else {
        newSelectedSeats.id = newSelectedSeats.id.filter(seat => seat !== idSeat);
      }
      setSelectedSeats(newSelectedSeats);

      console.log(selectedSeats);
    }

    else { alert('Assento Indisponível') }
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
