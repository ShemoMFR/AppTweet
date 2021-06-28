import React from 'react';

const AppContext = React.createContext({
    userName: '',
    setUserName: '',
    tweet: '',
    setTweet: '',
    tweetList: '',
    setTweetList: ''
});



export default AppContext;