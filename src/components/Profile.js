import '../style/Profile.css'; 
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../Context/AppContext';

function Profile(props) {

    const appContext = useContext(AppContext);
    const [nickName, setNickName] = useState('');
    const [isRedirect, setIsRedirect] = useState(false);

    function editUserName() {
        appContext.setUserName(nickName);
        setNickName('');
        setIsRedirect(true);
    }

    return (
        <div className='input-container'> 
            <h2 className='title'>Profile</h2>
            <label className="label-title">User Name</label>
            <input className="input" value={nickName} type="text" onChange={(e) => {setNickName(e.target.value)}}/>
            <button className='btn-profil' onClick={editUserName}>
                <div className='txt-btn'>Save</div>
            </button>
            { isRedirect && <Redirect to='/' />}

        </div>
    );
}


export default Profile;