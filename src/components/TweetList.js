import '../style/TweetList.css'; 
import Loader from "./Loader";
import AppContext from '../Context/AppContext';
import React, { useContext } from 'react';

function TweetList(props) {

	const appContext = useContext(AppContext);

    return (
        <div className='tweet-wrapper'>
			{appContext.tweetList !== [] ? (
				<ul className='tweet-list'>
					{appContext.tweetList.sort((a, b)=>b.date.localeCompare(a.date))
					.map((tweet) => (
						<li key={tweet.id} className='tweet' >
                            <div className='header-tweet'>
								<div className='date-tweet'>{tweet.userName} </div>
                                <div className='nickname-tweet'>{tweet.date} </div>
                            </div> 
							<div className='text-tweet'>
								<div className='text-tweet'>{tweet.content} </div>
							</div>
						</li>
					))}
				</ul>
			) : null}
			{props.isLoading && <Loader />}
        </div>
    );
}

export default TweetList;