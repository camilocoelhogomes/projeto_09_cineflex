import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import MovieSeats from './components/MovieSeats';
import MovieCatalog from './components/MovieCatalog';
import TopBar from './components/TopBar';
import MovieSections from './components/MovieSections';
function App() {
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
          <MovieSeats />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
