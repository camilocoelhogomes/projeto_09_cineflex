import './App.css';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

import MovieSeats from './components/MovieSeats';
import MovieCatalog from './components/MovieCatalog';
import TopBar from './components/TopBar';
import MovieSections from './components/MovieSections';
import Confirm from './components/Confirm';


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

  let history = useHistory();


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

  const reserveSeats = (selectedSeats, seats) => {

    const sendServer = {
      ids: selectedSeats.ids,
      name: selectedSeats.name,
      cpf: selectedSeats.cpf
    }
    const selectedMovie = { ...selectedSeats };

    selectedMovie.time = seats.name;
    selectedMovie.movie = seats.movie;
    selectedMovie.day = seats.day;

    selectedMovie.tickets = seats.seats.filter(seat => selectedMovie.ids.includes(seat.id))
      .map(seat => seat.name);

    setSelectedSeats(selectedMovie);
    console.log(selectedMovie);
    history.push('/confirm');
    /*/
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`, selectedSeats)
      .then(history.push('/confirm'))
    //*/
  }

  const confirm = () => {
    history.push('/');
    setSelectedSeats({
      ids: [],
      compradores: [],
      movie: {},
      day: {},
      time: '',
      tickets: [],
    })
  }

  return (
    <>
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
            reserveSeats={reserveSeats}
          />
        </Route>
        <Route exact path='/confirm'>
          <Confirm
            selectedSeats={selectedSeats}
            confirm={confirm}
          />
        </Route>
      </Switch>

    </>
  );
}

export default App;
