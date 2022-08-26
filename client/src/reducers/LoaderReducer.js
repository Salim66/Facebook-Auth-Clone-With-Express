
// create auth reducer
const LoaderReducer = ( state, { type, payload } ) => {

    switch (type) {
        case 'LOADER_START':
            return 100;
            break;
        
        case 'LOADER_END': 
            return 0
            break;
    
        default:
            return state;
            break;
    }

}

// export auth reducer
export default LoaderReducer;