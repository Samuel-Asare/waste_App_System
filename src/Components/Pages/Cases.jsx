import "../../css/Case.css";
import Footer from "../../Components/Footer";
import { NavLink, Navigate } from "react-router-dom";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const Cases = () => {
    // auth context
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            {currentUser ? (
                <div className="case_div">
                    <div className="content">
                        <div className="text-content">
                            <div className="text">
                                <h1>
                                    Solid Waste can be <span>Reused! </span>
                                </h1>
                                <p>Learn how to make use of Solid Waste</p>
                            </div>

                            <div className="links">
                                <NavLink to="./UseCase">
                                    <div className="usecase case-link">
                                        <h6>
                                            Usecase{" "}
                                            <KeyboardDoubleArrowRightOutlinedIcon />{" "}
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Iure,
                                            doloremque!
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink to="/case/learn">
                                    <div className="learn case-link">
                                        <h6>
                                            Learn{" "}
                                            <KeyboardDoubleArrowRightOutlinedIcon />{" "}
                                        </h6>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Iure,
                                            doloremque!
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            ) : (
                <Navigate to="/signup" />
            )}
        </>
    );
};

export default Cases;
