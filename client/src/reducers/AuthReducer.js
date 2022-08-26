

// create auth reducer
const AuthReducer = ( state, { type, payload } ) => {

    switch (type) {
        case 'LOGIN_USER_SUCCESS':
            return ({
                isUserLoggedIn: true,
                user: payload,
            });
            break;
        
        case 'USER_LOGOUT': 
            return {
                isUserLoggedIn: false,
                user: { }
            }
            break;
    
        default:
            return state;
            break;
    }

}

// export auth reducer
export default AuthReducer;