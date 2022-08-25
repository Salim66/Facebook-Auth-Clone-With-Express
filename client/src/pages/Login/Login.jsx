import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import Register from '../Register/Register';
import './Login.scss';

function Login() {

  // use state
  const [modal, setModel] = useState(false);

  // handle modal 
  const handleModalShow = (e) => {
    e.preventDefault();
    setModel(true);
  }

  return (
    <>
      <div className="login__container">
        <div className="login__wrapper">
          <div className="login__left">
            <img className='login__left-logo' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            <h2 className="login__left-text">Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="login__right">
            <div className="login__card">
              <form action="" className='login__form'>
                <div className="my-2">
                  <input type="text" name='email' placeholder='Email address or phone number' />
                </div>
                <div className="my-2">
                  <input type="password" name='password' placeholder='Password' />
                </div>
                <div className="my-2">
                  <button type='submit' className='login__button'>Log In</button>
                </div>
              </form>
              <Link to="/forgotten-password" className="forgotten__password">Forgotten password?</Link>
              <div className="divider"></div>
              <a href="#" className="create__new-account" onClick={ handleModalShow }>Create New Account</a>
            </div>
            <p className="login__right-text"><a href="#" className="create__a-page">Create a page</a> for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>
      <Register modal={ modal } setModel={ setModel } />
      <FooterAuth />
    </>
  )
};

export default Login;