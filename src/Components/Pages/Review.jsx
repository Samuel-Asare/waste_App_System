import "../../css/Review.css";
import InforSection from "../ReviewComponents/MainReviewPage/InforSection";
import ReviewCards from "../ReviewComponents/MainReviewPage/ReviewCards";
import Footer from "../Footer";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const Review = () => {
    // auth context
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            {currentUser ? (
                <div className="review-container">
                    <InforSection />
                    <ReviewCards />
                    <Footer />
                </div>
            ) : (
                <Navigate to="/signup" />
            )}
        </>
    );
};

export default Review;
