// UserInputContext.js

import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

// Define the initial state
const initialState = {
    fname: "",
    lname: "",
    phone: "",
    town: "",
    landmark: "",
    additional: "",
    wasteType: "",
    quantityOfBins: "",
    serviceOption: "",
    bulkyItems: "",
    request: "",
    dateTime: null,
    rightUserDetails: null,
    agreeToTerms: null,
    // Add more input fields as needed
};

// Create the context
const UserInputContext = createContext();

// Create a reducer function to update the state
const userInputReducer = (state, action) => {
    switch (action.type) {
        case "FIRST_NAME":
            return { ...state, fname: action.payload };
        case "LAST_NAME":
            return { ...state, lname: action.payload };
        case "PHONE":
            return { ...state, phone: action.payload };
        case "TOWN":
            return { ...state, town: action.payload };
        case "LANDMARK":
            return { ...state, landmark: action.payload };
        case "ADDITIONAL":
            return { ...state, additional: action.payload };
        case "WASTE_TYPE":
            return { ...state, wasteType: action.payload };
        case "QUANTITY_OF_BINS":
            return { ...state, quantityOfBins: action.payload };
        case "SERVICE_OPTION":
            return { ...state, serviceOption: action.payload };
        case "BULKY_ITEMS":
            return { ...state, bulkyItems: action.payload };
        case "REQUEST":
            return { ...state, request: action.payload };
        case "DATE_TIME":
            return { ...state, dateTime: action.payload };
        case "RIGHT_USER_DETAILS":
            return { ...state, rightUserDetails: action.payload };
        case "AGREE_TO_TERMS":
            return { ...state, agreeToTerms: action.payload };
        case "RESET":
            // Define your initial state here or import it from wherever it's defined.
            return { ...initialState };
        // Add more cases for other input fields
        default:
            return state;
    }
};

// Create a custom hook to access the context and dispatch
// eslint-disable-next-line react-refresh/only-export-components
export const useUserInput = () => {
    return useContext(UserInputContext);
};

// Create the UserInputProvider component
export const UserInputProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userInputReducer, initialState);

    useEffect(() => {
        // console.log(state);
    }, [state]);

    return (
        <UserInputContext.Provider value={{ state, dispatch }}>
            {children}
        </UserInputContext.Provider>
    );
};

// PROP VALIDATION FOR THE CHILDREN.................
UserInputProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
