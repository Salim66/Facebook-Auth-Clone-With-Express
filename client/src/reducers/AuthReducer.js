

// create auth reducer
const AuthReducer = ( state, { type, payload } ) => {

    switch (type) {
        case 'USER_LOGIN':
            return ({
                token: payload.token,
                user: payload.user,
            })
            break;

        default:
            return state;
            break;
    }

}

// export auth reducer
export default AuthReducer; 