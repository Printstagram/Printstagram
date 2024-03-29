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
import AnimalDetails from './Components/AnimalDetails';
// import AnimalsList from './Components/AnimalsList';
import LikedList from './Components/LikedList';
import SearchAnimalsList from './Components/SearchAnimalsList';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { logout } from './services/fetch-utils';

function App() {

  const {
    user,
    setUser
  } = useDataContext();

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <Router>
      <div>
        <header>
          {user &&
            <>
              <h1>Printstagram</h1>
              <button onClick={handleLogout}><span className="material-symbols-outlined">
    logout
              </span></button>
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
          <Route exact path="/animal-details/:id">
            {
              !user
                ? <Redirect to='/sign-in' />
                : <AnimalDetails />
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
                    <Link to="/"><span className="material-symbols-sharp">
home
                    </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about"><span className="material-symbols-sharp">
groups
                    </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/liked-animals"><span className="material-symbols-sharp">
pets
                    </span>
                    </Link>
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
