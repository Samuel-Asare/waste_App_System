import "../../../../css/UserFriendlyInterface.css";
import EachReviewSideNav from "../EachReviewSideNav";
import GeneralSuggestionCommentSpace from "./GeneralSuggestionCommentSpace";

const GeneralSuggestionMain = () => {
    return (
        <div className="userFriendly_Wrapper">
            <EachReviewSideNav />
            <GeneralSuggestionCommentSpace />
        </div>
    );
};

export default GeneralSuggestionMain;
