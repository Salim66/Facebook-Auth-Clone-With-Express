import { useReducer } from "react";
import cookie from 'js-cookie'
import LoaderContext from "../context/LoaderContext";
import LoaderReducer from "../reducers/LoaderReducer";

// initial state
export const INITIAL_STATE = 0;

// create context provider
const LoaderContextProvider = ({ children }) => {

    // create reducer
    const [ loaderState, loaderDispatch ] = useReducer( LoaderReducer, INITIAL_STATE);

    return (
        <LoaderContext.Provider
            value = {{ 
                loaderState,
                loaderDispatch
             }}
        >
            { children }
        </LoaderContext.Provider>
    );

}

export default LoaderContextProvider;