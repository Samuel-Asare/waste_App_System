import "../../../css/ForgetPassword.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../Firebase/firebase";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [getUserEmail, setGetUserEmail] = useState("");
    const [error, setError] = useState("");
    const { currentUser } = useContext(AuthContext);

    const messageStyle = {
        color: "red",
        fontSize: ".8rem",
        marginBottom: "0",
    };

    const handleReset = () => {
        sendPasswordResetEmail(auth, getUserEmail)
            .then(() => {
                // Reset email sent, navigate to login page
                navigate("/login");
            })
            .catch((error) => {
                setError(error.message);
                // Handle error, show error message to the user
            });
    };

    return (
        <>
            {!currentUser ? (
                <div className="reset_container">
                    <div className="reset_content">
                        <header>
                            <h1>Reset Your Password</h1>
                        </header>
                        <div className="links">
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/login">Log In</Link>
                        </div>
                        {/* Reset Password Form */}
                        <form>
                            <fieldset>
                                <p style={messageStyle}>{error}</p>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    id="email"
                                    required
                                    onChange={(e) =>
                                        setGetUserEmail(e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    id="reset_btn"
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>
                            </fieldset>
                        </form>
                        {/* End of Form */}
                    </div>
                </div>
            ) : (
                // If user is logged in, redirect to home
                navigate("/")
            )}
        </>
    );
};

export default ForgetPassword;
