import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from 'react-router-dom';



// create authenticate user
const AuthenticateUser = ({ children }) => {

    // call context api
    const { isUserLoggedIn } = useContext(AuthContext);

    return isUserLoggedIn ? children : <Navigate to='/login' />

}

// export default 
export default AuthenticateUser;