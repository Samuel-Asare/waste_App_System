import "../../../../../css/ResponseTime.css";
import EachReviewSideNav from "../../EachReviewSideNav";

import ResponseContentSection from "./ResponseContentSection";

const ResponseTimeComponent = () => {
    return (
        <div className="responseTimeWrapper">
            <EachReviewSideNav />
            <ResponseContentSection />
        </div>
    );
};

export default ResponseTimeComponent;
