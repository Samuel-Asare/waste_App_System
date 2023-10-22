/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const initialState = {
    message: "",
};

const ReviewContext = createContext();

const reviewReducer = (state, action) => {
    switch (action.type) {
        case "MESSAGE":
            return { ...state, message: action.payload };
        case "RESET":
            return { ...initialState };
        default:
            return state;
    }
};

export const useReview = () => {
    return useContext(ReviewContext);
};

export const ReviewsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reviewReducer, initialState);

    useEffect(() => {
        // console.log(state);
    }, [state]);

    return (
        <ReviewContext.Provider value={{ state, dispatch }}>
            {children}
        </ReviewContext.Provider>
    );
};

ReviewsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
