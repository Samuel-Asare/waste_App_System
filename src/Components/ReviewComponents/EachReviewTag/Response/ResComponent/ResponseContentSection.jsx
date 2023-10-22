import "../../../../../css/ResponseContentSection.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../../Firebase/firebase";
import { useReview } from "../../../../../context/ReviewsContext";
import { useState, useRef, useMemo, useContext } from "react";
import ResponseCommentsComponent from "./ResponseCommentsComponent";
import { AuthContext } from "../../../../../context/AuthContextProvider";

const ResponseContentSection = () => {
    const { state, dispatch } = useReview();
    const [isTyped, setIsTyped] = useState(true);
    const [currentInput, setCurrentInput] = useState("");
    const [setError] = useState(null);
    const inputRef = useRef(null);

    // auth context
    const { currentUser } = useContext(AuthContext);

    useMemo(() => {
        setIsTyped(state.message === "");
    }, [state.message]);

    const handleTextareaContent = (e) => {
        dispatch({ type: "MESSAGE", payload: e.target.value });
    };

    const handleSubmitClick = async () => {
        if (state.message !== "") {
            try {
                await addDoc(collection(db, "ResponseTime_Review"), {
                    message: state.message,
                    timeStamp: serverTimestamp(),
                    user: currentUser.displayName,
                });
                dispatch({ type: "MESSAGE", payload: "" });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

        if (currentInput.trim() !== "") {
            try {
                await addDoc(collection(db, "ResponseTime_Review"), {
                    message: currentInput,
                    timeStamp: serverTimestamp(),
                });
                setCurrentInput("");
                // Scroll to the bottom after adding input
                inputRef.current.scrollIntoView({ behavior: "smooth" });
            } catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <div className="content_wrapper_div">
            <h1 className="review_text_headline">Response Time</h1>
            <div className="content_div">
                <ResponseCommentsComponent />
            </div>
            <div className="addCommentDiv">
                <div className="input_div">
                    <textarea
                        placeholder="Add Comment"
                        className="inputSpace"
                        onChange={handleTextareaContent}
                        value={state.message}
                    ></textarea>
                    <button
                        type="submit"
                        onClick={handleSubmitClick}
                        disabled={isTyped}
                    >
                        Post +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResponseContentSection;
