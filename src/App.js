import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import About from './Components/About';
import AnimalDetails from './Components/AnimalDetails';
import AnimalsList from './Components/AnimalsList';
import LikedList from './Components/LikedList';
import SearchAnimalsList from './Components/SearchAnimalsList';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/liked-animals">My Liked Animals</Link>
              </li>
              <button>logout</button>
            </ul>
          </nav>
        </header>
        

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <AnimalsList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/liked-animals">
            <LikedList />
          </Route>
          <Route path="/search-animals">
            <SearchAnimalsList />
          </Route>
        </Switch>
        <footer>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/liked-animals">My Liked Animals</Link>
              </li>
              <button>logout</button>
            </ul>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
