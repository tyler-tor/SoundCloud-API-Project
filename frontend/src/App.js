import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
// import LoginFormPage from './components/LoginFormPage/LoginFormPage';
import SignupFormPage from './components/SignupFormPage/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Songs from './components/Songs/Songs';
import Albums from './components/Albums/Albums';
import HomePage from './components/HomePage';
// import { getSongs } from './store/songs';
// import DisplaySongInfo from './components/Songs/DisplaySongInfo';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // dispatch(getSongs())
    dispatch(sessionActions.getCurrUser())
      .then(() => setIsLoaded(true));
  }, [dispatch])
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path='/songs/:songId'>
            <DisplaySongInfo />
          </Route> */}
          {/* <Route path='/login'>
            <LoginFormPage />
          </Route> */}
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/albums'>
            <Albums />
          </Route>
          <Route path='/songs'>
            <Songs />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>)}
    </>
  );
}

export default App;
