import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import SignupFormPage from './components/SignupFormPage/SignupFormPage';
import Player from './components/Player';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Songs from './components/Songs/Songs';
import Albums from './components/Albums/Albums';
import HomePage from './components/HomePage';
import DisplaySongInfo from './components/Songs/DisplaySongInfo';
import { myPlaylists } from './store/session';
import DisplayAlbumInfo from './components/Albums/DisplayAlbumInfo';
import PageNotFound from './components/PageNotFound';
import './index.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.getCurrUser())
      .then(() => setIsLoaded(true));
  }, [dispatch])

  useEffect(() => {
    if (user) {
      dispatch(myPlaylists())
    }
  }, [user]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/songs/:songId'>
            <DisplaySongInfo />
          </Route>
          <Route path='/albums/:albumId'>
            <DisplayAlbumInfo />
          </Route>
          <Route path='/albums'>
            <Albums />
          </Route>
          <Route path='/songs'>
            <Songs />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>)}
      <Player />
    </>
  );
}

export default App;
