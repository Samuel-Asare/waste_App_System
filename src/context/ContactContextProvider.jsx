/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const initialState = {
    contact_Name: "",
    contact_Email: "",
    contact_Subject: "",
    contact_message: "",
};

const ContactUsContext = createContext();

const contactUsReducer = (state, action) => {
    switch (action.type) {
        case "NAME":
            return { ...state, contact_Name: action.payload };
        case "EMAIL":
            return { ...state, contact_Email: action.payload };
        case "SUBJECT":
            return { ...state, contact_Subject: action.payload };
        case "MESSAGE":
            return { ...state, contact_message: action.payload };
        case "RESET":
            return { ...initialState };
        default:
            return state;
    }
};

export const useContact = () => {
    return useContext(ContactUsContext);
};

export const ContactUsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactUsReducer, initialState);

    useEffect(() => {
        // console.log(state);
    }, [state]);

    return (
        <ContactUsContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactUsContext.Provider>
    );
};

ContactUsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
