import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect} from 'react';
import LoginFormPage from './components/LoginFormPage/LoginFormPage';
import SignupFormPage from './components/SignupFormPage/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Songs from './components/Songs/Songs';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.getCurrUser())
    .then(() => setIsLoaded(true));
  }, [dispatch])
  return (
    <>
      <Navigation isLoaded={isLoaded}/>
      {isLoaded && (
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        <Route exact path='/'>

        </Route>
      </Switch>)}
      <Songs />
    </>
  );
}

export default App;
