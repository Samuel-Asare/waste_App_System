import { NavLink } from "react-router-dom";
import "../../../css/EachReviewSideNav.css";
import Recycle_Icon from "../../../assets/other_Images/recycle_icon.svg";

const EachReviewSideNav = () => {
    return (
        <div className="navBarWrapper">
            <div className="navContentHolder">
                <div className="topSection">
                    <header>
                        <h6>Navigate to:</h6>
                    </header>
                    <ul>
                        <NavLink to="/review/response">
                            <li>Response Time</li>
                        </NavLink>
                        <NavLink to="/review/relation">
                            <li>Relation / Service</li>
                        </NavLink>
                        <NavLink to="/review/general_suggestion">
                            <li>General Suggestions</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="bottomSection">
                <img
                    src={Recycle_Icon}
                    alt="recycle icon"
                    width="30px"
                    height="30px"
                />
                <p>Add your Comment & Suggestion</p>
            </div>
        </div>
    );
};

export default EachReviewSideNav;
