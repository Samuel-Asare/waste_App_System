import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// REDUCER SECTION........................................................

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                currentUser: action.payload,
            };
        }
        case "LOGOUT": {
            return {
                currentUser: null,
            };
        }
        default:
            return state;
    }
};

// REDUCER SECTION END........................................................

// PROVIDER SECTION........................................................

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    return (
        <AuthContext.Provider
            value={{ currentUser: state.currentUser, dispatch }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// PROVIDER SECTION END........................................................

// PROP VALIDATION FOR THE CHILDREN.................
AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
