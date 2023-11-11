import { Route, Routes } from "react-router-dom";

import HomePage from "./Components/Pages/HomePage";
import UseCase from "./Components/Pages/UseCase";
import Learn from "./Components/Pages/Learn";
import Blog from "./Components/Pages/Blog";
import SignUp from "./Components/Pages/Auth/SignUp";
import LogIn from "./Components/Pages/Auth/LogIn";
import Contact from "./Components/Pages/Contact";
import EachCard from "./Components/UseCase_Cards/EachCard";
import EachLearnCard from "./Components/LearnCards/EachLearnCard";
import Cases from "./Components/Pages/Cases";
import Review from "./Components/Pages/Review";
import Connect from "./Components/Pages/Connect";
import EachBlogCard from "./Components/BlogComponents.jsx/EachBlogCard/EachBlogCard";
// import ResponseTimeComponent from "./Components/ReviewComponents/EachReviewTag/Response/ResponseTimeComponent";
import RelationServiceMain from "./Components/ReviewComponents/EachReviewTag/RelationService/RelationServiceMain";
import ResponseTimeComponent from "./Components/ReviewComponents/EachReviewTag//Response/ResComponent/ResponseTimeComponent";
import GeneralSuggestionMain from "./Components/ReviewComponents/EachReviewTag/GeneralSuggestion/GeneralSuggestionMain";
import AboutUs from "./Components/Pages/AboutUs";
import ForgetPassword from "./Components/Pages/Auth/ForgetPassword";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/case" exact element={<Cases />} />
            <Route path="/case/usecase" exact element={<UseCase />} />
            <Route path="/case/learn" exact element={<Learn />} />
            <Route path="/case/usecase/:id" element={<EachCard />} />
            <Route path="/case/learn/:id" element={<EachLearnCard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:item" element={<EachBlogCard />} />
            <Route path="/review" element={<Review />} />
            <Route
                path="/review/response"
                element={<ResponseTimeComponent />}
            />
            <Route path="/review/relation" element={<RelationServiceMain />} />
            <Route
                path="/review/general_suggestion"
                element={<GeneralSuggestionMain />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/resetpassword" element={<ForgetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route
                path="*"
                element={
                    <div>
                        <h1>404</h1>
                        <h2>Page Cant Be Found</h2>
                    </div>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
