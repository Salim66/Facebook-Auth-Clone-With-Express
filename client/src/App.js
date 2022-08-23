import { Route, Routes } from 'react-router-dom';
import ForgottenPassword from './pages/ForgottenPassword/ForgottenPassword';
import Login from "./pages/Login/Login";
import RecoveryPassword from './pages/RecoveryPassword/RecoveryPassword';


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/forgotten-password" element={ <ForgottenPassword /> } />
        <Route path="/recovery-password/:id" element={ <RecoveryPassword /> } />
      </Routes>
    </>
  );
}

export default App;
