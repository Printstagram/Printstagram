import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useDataContext } from './DataProvider';

import './App.css';
import About from './Components/About';
import AnimalDetails from './Components/AnimalDetails';
import AnimalsList from './Components/AnimalsList';
import LikedList from './Components/LikedList';
import SearchAnimalsList from './Components/SearchAnimalsList';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { logout } from './services/fetch-utils';
function App() {

  // const {

  // } = useDataContext();

  async function handleLogout() {
    await logout();
  }

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
              <button onClick={handleLogout}>logout</button>
            </ul>
          </nav>
        </header>
        

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AnimalsList />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/liked-animals">
            <LikedList />
          </Route>
          <Route exact path="/search-animals">
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
