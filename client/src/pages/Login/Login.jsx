import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import Register from '../Register/Register';
import cookie from 'js-cookie';
import './Login.scss';
import { errorToast } from '../../utility/errorToast';

function Login() {

  // use state
  const [modal, setModel] = useState(false);

  // handle modal 
  const handleModalShow = (e) => {
    e.preventDefault();
    setModel(true);
  }

  // use state for login 
  const [input, setInput] = useState({
    email : '',
    password: ''
  });

  // use navigator
  const navigator = useNavigate();

  // hanlde input
  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));
  }

  // handle login form
  const handleLoginForm = async (e) => {
    e.preventDefault();

    try {
      
      if( !input.email || !input.password ){

        errorToast('All fields are required!');

      }else {

        await axios.post('http://localhost:5050/api/user/login', input)
        .then( res => {

          cookie.set('token', res.data.token);
          cookie.set('user', JSON.stringify(res.data.user));

          navigator('/');

        });

      }

    } catch (error) {
      swal('Error', error, 'error');
      console.log(error);
    }

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
              <form onSubmit={ handleLoginForm } className='login__form'>
                <div className="my-2">
                  <input type="text" name='email' placeholder='Email address or phone number' value={ input.email } onChange={ handleInput } />
                </div>
                <div className="my-2">
                  <input type="password" name='password' placeholder='Password' value={ input.password } onChange={ handleInput } />
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