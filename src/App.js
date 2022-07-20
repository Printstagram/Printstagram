import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from 'react-router-dom';
import { useDataContext } from './DataProvider';

import './App.css';
import About from './Components/About';
// import AnimalDetails from './Components/AnimalDetails';
// import AnimalsList from './Components/AnimalsList';
import LikedList from './Components/LikedList';
import SearchAnimalsList from './Components/SearchAnimalsList';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { logout } from './services/fetch-utils';

function App() {

  const {
    user, 
  } = useDataContext();

  async function handleLogout() {
    await logout();
  }

  return (
    <Router>
      <div>
        <header>
          {user &&
            <>
              <h1>Printstagram</h1>
              <button onClick={handleLogout}>logout</button>
            </>
          }
        </header>
        

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/sign-in">
            {
              user
                ? <Redirect to='/' />
                : <SignIn />
            }
          </Route>
          <Route exact path="/sign-up">
            {
              user
                ? <Redirect to='/' />
                : <SignUp />
            }
          </Route>
          <Route exact path="/">
            {
              !user
                ? <Redirect to='/sign-in' />
                : <SearchAnimalsList />
            }
          </Route>
          <Route exact path="/liked-animals">
            {
              !user
                ? <Redirect to='/sign-in' />
                : <LikedList />
            }
          </Route>
          <Route exact path="/search-animals">
            {
              !user
                ? <Redirect to='/sign-in' />
                : <SearchAnimalsList />
            }
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <footer>
          <nav role='navigation'>
            {user &&
              <>
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
                </ul>
              </>}
          </nav>
            
        </footer>
      </div>
    </Router>
  );
}

export default App;
