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
    compradores: [],
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
        newSelectedSeats.compradores.push({ idAssento: idSeat, nome: '', cpf: '' })
      }

      else {
        const seat = newSelectedSeats.compradores.filter(comprador => comprador.idAssento === idSeat)[0]
        if ((seat.nome !== '' || seat.cpf !== '') && window.confirm('Gostaria realmente de remover o assento e apagar os dados?')) {

          newSelectedSeats.ids = newSelectedSeats.ids.filter(seat => seat !== idSeat);
          newSelectedSeats.compradores = newSelectedSeats.compradores.filter(comprador => comprador.idAssento !== idSeat);
        }
        else if (seat.nome === '' && seat.cpf === '') {
          newSelectedSeats.ids = newSelectedSeats.ids.filter(seat => seat !== idSeat);
          newSelectedSeats.compradores = newSelectedSeats.compradores.filter(comprador => comprador.idAssento !== idSeat);
        }

      }

      setSelectedSeats(newSelectedSeats);
    }

    else { alert('Assento Indisponível') }
  }

  const inputPerson = (item, value, idSeat) => {
    const newPerson = { ...selectedSeats };
    newPerson.compradores.forEach(comprador => comprador.idAssento === idSeat ? comprador[item] = value : '');
    setSelectedSeats(newPerson);
  }

  const reserveSeats = (selectedSeats, seats) => {

    const sendServer = {
      ids: selectedSeats.ids,
      compradores: selectedSeats.compradores
    }
    const selectedMovie = { ...selectedSeats };

    selectedMovie.time = seats.name;
    selectedMovie.movie = seats.movie;
    selectedMovie.day = seats.day;

    selectedMovie.tickets = seats.seats.filter(seat => selectedMovie.ids.includes(seat.id))
      .map(seat => seat.name);

    setSelectedSeats(selectedMovie);

    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`, selectedSeats)
      .then(history.push('/confirm'))

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
