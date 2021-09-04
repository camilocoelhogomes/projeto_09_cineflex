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
    ids: [],
    name: '',
    cpf: '',
    movie: {},
    day: {},
    time: '',
    tickets: [],
  });


  const selectSeat = (idSeat, isAvailable) => {
    const newSelectedSeats = { ...selectedSeats };

    if (isAvailable) {
      if (newSelectedSeats.ids.indexOf(idSeat) === -1) {
        newSelectedSeats.ids.push(idSeat);
      }
      else {
        newSelectedSeats.ids = newSelectedSeats.ids.filter(seat => seat !== idSeat);
      }
      setSelectedSeats(newSelectedSeats);
    }

    else { alert('Assento Indisponível') }
  }

  const inputPerson = (item, value) => {
    const newPerson = { ...selectedSeats };
    newPerson[item] = value;
    setSelectedSeats(newPerson);
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
            inputPerson={inputPerson}
            setSelectedSeats={setSelectedSeats}
          />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
