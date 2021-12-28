import React from 'react';
import welcome from '../images/welcome.JPG'

const Welcome = (props) => {
    return (
        <div className='welcome'>
            <div className="title" style={{ backgroundColor: '#cabcdc'}} >Hi {localStorage.getItem('username')} !</div>
            <div >
                <img style={{marginLeft:'35px'}} src={welcome} alt='Welcome' />
            </div>
            <div style={{ backgroundColor: '#cabcdc'}}>Add your chat group to get started...</div>

        </div>

    );
}

export default Welcome;