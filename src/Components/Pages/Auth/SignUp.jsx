import { useContext, useState } from "react";
import "../../../css/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import { AuthContext } from "../../../context/AuthContextProvider";

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(AuthContext);

    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");

    console.log(userFirstName, userLastName);

    function handleSubmit(e) {
        e.preventDefault();

        if (password.length <= 6) {
            setError("Password must be more than 6 characters.");
            return;
        } else {
            setError(null);
        }

        // Check if the user exists with the provided email
        fetchSignInMethodsForEmail(auth, email)
            .then((signInMethods) => {
                if (signInMethods.length === 0) {
                    // User doesn't exist, proceed with signup
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            let user = userCredential.user;
                            dispatch({ type: "LOGIN", payload: user });

                            // Send email verification
                            sendEmailVerification(auth.currentUser)
                                .then(() => {
                                    navigate("/login");
                                })
                                .catch((error) => {
                                    console.error(
                                        "Email verification failed:",
                                        error
                                    );
                                    setError(
                                        "Failed to send verification email. Please try again."
                                    );
                                });
                        })
                        .catch((error) => {
                            console.error("Signup failed:", error);
                            setError("Failed to sign up. Please try again.");
                        });
                } else {
                    // User already exists with this email
                    setError(
                        "User with this email already exists. Please log in."
                    );
                }
            })
            .catch((error) => {
                console.error("Error checking existing user:", error);
                setError("Error checking existing user. Please try again.");
            });
    }

    return (
        <>
            {!currentUser ? (
                <div className="signup_container">
                    <div className="sign_content">
                        <header>
                            <h1>Create new account.</h1>
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" id="link_item">
                                    Log in
                                </Link>
                            </p>
                        </header>
                        <form onSubmit={handleSubmit}>
                            {/* Add state for first and last name */}
                            <fieldset className="names_fieldset">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="first_name"
                                    required
                                    onChange={(e) =>
                                        setUserFirstName(e.target.value)
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="last_name"
                                    onChange={(e) =>
                                        setUserLastName(e.target.value)
                                    }
                                />
                            </fieldset>
                            <fieldset className="credential_fieldset">
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@gmail.com"
                                    required
                                    className="email"
                                />
                                <input
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="enter password"
                                    required
                                />
                                <div className="errorMessage">{error}</div>
                                <label
                                    htmlFor="subscribe"
                                    className="subscribe_label"
                                >
                                    <input
                                        type="checkbox"
                                        id="subscribe"
                                        // onChange={(e) => setSubscribe(e.target.checked)}
                                    />
                                    <p>
                                        I hereby agree to the terms and
                                        conditions of this website
                                    </p>
                                </label>
                                <button type="submit" className="submit_btn">
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            ) : (
                navigate("/") // Consider revising this for redirection
            )}
        </>
    );
}

export default SignUp;
