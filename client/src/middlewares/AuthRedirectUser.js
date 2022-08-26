import { useContext } from "react"
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext"



// create auth redirect user
const AuthRedirectUser = ({ children }) => {

    // call context api
    const { isUserLoggedIn } = useContext(AuthContext);

    return isUserLoggedIn ? <Navigate to='/' /> : children

}


// export default
export default AuthRedirectUser;