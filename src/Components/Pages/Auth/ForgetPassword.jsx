import "../../../css/ForgetPassword.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);

    const messageStyle = {
        color: "red",
        fontSize: ".8rem",
        marginBottom: "0",
    };

    return (
        <>
            {currentUser ? (
                navigate("/")
            ) : (
                <div className="reset_container">
                    <div className="reset_content">
                        <header>
                            <h1>Reset Your Password.</h1>
                        </header>
                        <div className="links">
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/login">Log In</Link>
                        </div>
                        {/* FORM START */}
                        <form>
                            <fieldset>
                                <fieldset>
                                    <p style={messageStyle}>
                                        Wrong email or password
                                    </p>

                                    {/* end */}
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        id="email"
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        id="password"
                                        required
                                    />
                                </fieldset>

                                <button type="submit" id="login_btn">
                                    Reset
                                </button>
                            </fieldset>
                        </form>
                        {/* FORM END */}
                    </div>
                </div>
            )}
        </>
    );
};

export default ForgetPassword;
