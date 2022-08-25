import { useReducer } from "react";
import AuthContext from "../context/AuthContext";
import cookie from 'js-cookie';
import AuthReducer from "../reducers/AuthReducer";


// initail state
export const INITIAL_STATE = {
    token: cookie.get('token') || null,
    user: cookie.get('user') ? JSON.parse(cookie.get('user')) : null
}


// Create provider
const AuthContextProvider = ({ children }) => {

    // create use reducer
    const [ state, dispatch ] = useReducer( AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider 
            value = {{ 
                token: state.token,
                user: state.user,
                dispatch
            }}
        >
            { children }
        </AuthContext.Provider>
    )

}

// export default auth context provider
export default AuthContextProvider;