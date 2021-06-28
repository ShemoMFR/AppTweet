import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, useContext } from 'react';
import '../style/FormTweet.css'; 
import TweetList from "./TweetList";
import moment from 'moment';
import AppContext from '../Context/AppContext';

function FormTweet() {

    const appContext = useContext(AppContext);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
   
    function handleChange(e) {
        setInput(e.target.value);
    };

    function editTweetList(e) {
        e.preventDefault();
        setInput('');

        const tweetPostData = {
            content: appContext.tweet.text,
            userName: appContext.tweet.nickName,
            date: appContext.tweet.dateCreated
          };

        const request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(tweetPostData)  
        };
    
        if (appContext.tweet.text && appContext.tweet.nickName) {

            setIsLoading(true);

            setTimeout(() => {
                fetch("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet", request)
                .then(response => response.json())
                .then(data => {
                    appContext.setTweetList([...appContext.tweetList, data])})
                    .catch((error) => {
                        console.error("Error:", error);
                        alert("Your tweet was not saved, please try again");
                    });
            }, 2000)
        }

        else {
            alert("You must have an User Name and write something !")
        }
            
    };

    useEffect(() => {
        appContext.setTweet({...appContext.tweet, text: input, nickName: appContext.userName, id: uuidv4(), dateCreated: moment().format() });
    }, [input]);

    useEffect(() => {
        fetch("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet")
        .then(response => response.json())
        .then(data => {
            appContext.setTweetList(data.tweets.filter(tweet => tweet.userName === appContext.userName))            
        });
    }, [])

    useEffect(() => {
        setIsLoading(false);
    }, [appContext.tweetList])

    return (
        <div>
            <div className='title-form'> Welcome {appContext.userName}</div>
            <div className='input-tweet' >
                <form className='form' method='get' onSubmit={(e) => editTweetList(e)}>
                    <textarea className='text-area' value={input} rows='10' onChange={handleChange} placeholder='What you have in mind...' />
                    {(appContext.tweet.text.length < 141) ? <button className='btn' type='submit'>Tweet</button> : 
                    <div className='error-input'>The tweet can't contain more then 140 chars.</div> }                
                </form>
            </div>
            <TweetList isLoading={isLoading}/>
        </div>
    );
}

export default FormTweet;