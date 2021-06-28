import '../style/Navigator.css'; 
import {Link} from 'react-router-dom';

function Navigator() {


    return (
        <div className='container-navbar'>
            <ul className='navbar'>
                <Link to='/'> 
                    <li className="item-navbar">Home</li>
                </Link>
                <Link to='/Profile'> 
                    <li className="item-navbar">Profile</li>
                </Link>
            </ul>
        </div>
    );
}


export default Navigator;