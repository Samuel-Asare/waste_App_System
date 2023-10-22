import "../../../../css/ResponseContentSection.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../Firebase/firebase";
import { useReview } from "../../../../context/ReviewsContext";
import { useContext, useMemo, useState } from "react";
import GeneralSuggestionCommentsComponent from "./GeneralSuggestionCommentsComponent";
import { AuthContext } from "../../../../context/AuthContextProvider";

const GeneralSuggestionCommentSpace = () => {
    const { state, dispatch } = useReview();
    const [isTyped, setIsTyped] = useState(true);

    // auth context
    const { currentUser } = useContext(AuthContext);

    useMemo(() => {
        setIsTyped(state.message === "");
    }, [state.message]);

    const handleTextareaContent = (e) => {
        dispatch({ type: "MESSAGE", payload: e.target.value });
    };

    const handleSubmitClick = async () => {
        if (state.message === "") {
            return;
        } else {
            try {
                await addDoc(collection(db, "GeneralSuggestion_Review"), {
                    message: state.message,
                    timeStamp: serverTimestamp(),
                    user: currentUser.displayName,
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            dispatch({ type: "MESSAGE", payload: "" });
        }
    };

    return (
        <div className="content_wrapper_div">
            <h1 className="review_text_headline">General Suggestion</h1>
            <div className="content_div">
                {/* commented Div */}
                <GeneralSuggestionCommentsComponent />
                {/* end commented div */}
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

export default GeneralSuggestionCommentSpace;
