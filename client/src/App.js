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
import LoadingBar from 'react-top-loading-bar'
import LoaderContext from './context/LoaderContext';
import { errorToast } from './utility/errorToast';
import Cookies from 'js-cookie';
import Verify from './components/Verify/Verify';


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
  
          if(res.data.isVerified){
            dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data })
          }else {
            errorToast('Please verify your account!');
            Cookies.remove('token');
          }
         
        } )
        .catch( error => {
            dispatch({ type: "USER_LOGOUT" });
        } )
  
      } catch (error) {
       
      }
  
    }, [token] );
    

    // call loader context api
    const { loaderState, loaderDispatch } = useContext(LoaderContext);

    

  return (
    <>
     
      <LoadingBar
          color='#f11946'
          progress={ loaderState }
          onLoaderFinished={ () => loaderDispatch({ type: 'LOADER_END' }) }
      />

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
        <Route path="/recovery-code/:user_id" element={ <AuthRedirectUser><RecoveryCode /></AuthRedirectUser> } />
        <Route path="/recovery-password/:user_id" element={ <AuthRedirectUser><RecoveryPassword /></AuthRedirectUser> } />
        <Route path="/:token" element={ <Verify /> } />
      </Routes>
    </>
  );
}

export default App;
