import './style/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { useState } from 'react';
import FormTweet from './components/FormTweet';
import Navigator from './components/Navigator';
import Profile from './components/Profile';
import AppContext from './Context/AppContext';

function App() {

  const [userName, setUserName] = useState('');
  const [tweet, setTweet] = useState({text:''});
  const [tweetList, setTweetList] = useState([]);

  return (
    <div className='main-container'>
      <Router>
        <AppContext.Provider 
          value={{
            userName: userName,
            setUserName: setUserName,
            tweet: tweet,
            setTweet: setTweet,
            tweetList: tweetList,
            setTweetList: setTweetList
          }}
          >

        <Navigator />

        <Switch>
          <Route path='/' exact component={FormTweet} /> 
          <Route path='/Profile' exact component={Profile} /> 
        </Switch>

        </AppContext.Provider >
      </Router>
    </div>
     
  );
}

export default App;
