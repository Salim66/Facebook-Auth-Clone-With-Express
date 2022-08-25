import { Route, Routes } from 'react-router-dom';
import ForgottenPassword from './pages/ForgottenPassword/ForgottenPassword';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import RecoveryCode from './pages/RecoveryCode/RecoveryCode';
import RecoveryPassword from './pages/RecoveryPassword/RecoveryPassword';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/forgotten-password" element={ <ForgottenPassword /> } />
        <Route path="/recovery-code/:id" element={ <RecoveryCode /> } />
        <Route path="/recovery-password/:id" element={ <RecoveryPassword /> } />
      </Routes>
    </>
  );
}

export default App;
