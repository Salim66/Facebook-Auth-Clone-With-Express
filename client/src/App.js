import { Route, Routes } from 'react-router-dom';
import ForgottenPassword from './pages/ForgottenPassword/ForgottenPassword';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import RecoveryCode from './pages/RecoveryCode/RecoveryCode';
import RecoveryPassword from './pages/RecoveryPassword/RecoveryPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticateUser from './middlewares/AuthenticateUser';
import AuthRedirectUser from './middlewares/AuthRedirectUser';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import cookie from 'js-cookie';
import { useEffect } from 'react';
import axios from 'axios';


function App() {

    // call contaxt api
    const { dispatch } = useContext(AuthContext);

    // get  token from js-cookie
    const token = cookie.get('token');


    useEffect( () => {

      try {
        
        axios.get('http://localhost:5050/api/user/me', {
          headers: {
            "Authorization" : `Bearer ${token}`
          }
        })
        .then( res => {
  
            dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data })
         
        } )
        .catch( error => {
            dispatch({ type: "USER_LOGOUT" });
        } )
  
      } catch (error) {
       
      }
  
    }, [token] );

    

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={ <AuthenticateUser><Home/></AuthenticateUser> } />
        <Route path="/login" element={ <AuthRedirectUser><Login/></AuthRedirectUser> } />
        <Route path="/forgotten-password" element={ <AuthRedirectUser><ForgottenPassword /></AuthRedirectUser> } />
        <Route path="/recovery-code/:id" element={ <AuthRedirectUser><RecoveryCode /></AuthRedirectUser> } />
        <Route path="/recovery-password/:id" element={ <AuthRedirectUser><RecoveryPassword /></AuthRedirectUser> } />
      </Routes>
    </>
  );
}

export default App;
