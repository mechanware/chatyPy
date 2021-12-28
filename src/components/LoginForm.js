import React, { useState } from 'react';
import axios from 'axios'
import { NavLink} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const projectID = '654a9464-87be-4ba6-b047-e81cc32ac1b1';

const LoginForm = (props) => {
  let history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setError('')
    setSuccess('Loging In, Please wait ...')

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      //window.location.reload()
      history.push('/');
      setError('');
    } catch (err) {
      setSuccess('')
      setError('Oops! incorrect credentials');
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        {/* <NavLink to="/signup" className="button">Sign up</NavLink> */}
        <h1 className="title">Sign in to ChatyPy</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div><br/>
          <span className='footer'>Don't have an account ?</span> <br/> <NavLink className='signUp' to="/signup" >Sign Up</NavLink>
        </form><br/>
        <span className='footer'>{isSuccess}</span >
        <span className='footer'>{error}</span>
      </div>
    </div>

  );
};
export default LoginForm;