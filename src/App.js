import './App.css';
import MovieCatalog from './components/MovieCatalog';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import TopBar from './components/TopBar';
function App() {
  return (
    <BrowserRouter>
      <TopBar />

      <Switch>
        <Route exact path='/'>
          <MovieCatalog />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
