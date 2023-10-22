import "../../../../css/RelationWrapper.css";
import EachReviewSideNav from "../EachReviewSideNav";
import ReletionServiceCommentSpace from "./ReletionServiceCommentSpace";

const RelationServiceMain = () => {
    return (
        <div className="reletionServiceWrapper">
            <EachReviewSideNav />
            <ReletionServiceCommentSpace />
        </div>
    );
};

export default RelationServiceMain;
