import { useContext, useEffect, useState } from "react";
import "../../../css/SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

// Firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../../Firebase/firebase";
import { AuthContext } from "../../../context/AuthContextProvider";
import { signInWithPopup } from "firebase/auth";

function SignUp() {
    // ...........................................................................

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [subscribe, setSubcribe] = useState(false);

    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        console.log(subscribe);
    }, [subscribe]);

    // auth context
    const { dispatch } = useContext(AuthContext);

    // submit handle function...................
    function handleSubmit(e) {
        e.preventDefault();

        if (password.length <= 6) {
            setError("Password must be more than 6");
            return; // Exit the function if there's an error
        } else {
            setError(null); // Reset error when password is valid
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user });
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            });
    }

    // end submit handle function................

    // Google Signin with popup.....................

    function handleGoogleSignup() {
        signInWithPopup(auth, provider).then((currentUser) => {
            let user = currentUser.user;
            console.log(currentUser.email);
            dispatch({ type: "LOGIN", payload: user });
            navigate("/");
        });
    }

    // ...................................................................................................

    return (
        <>
            {currentUser ? (
                navigate("/")
            ) : (
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
                            {/* GOOGLE SIGNUP......................... */}

                            <button
                                className="google_text"
                                onClick={handleGoogleSignup}
                            >
                                Signup with google <FcGoogle />
                            </button>

                            {/* END GOOGLE SIGNUP......... */}
                        </header>

                        <form onSubmit={handleSubmit}>
                            <fieldset className="names_fieldset">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="first_name"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="last_name"
                                />
                            </fieldset>
                            <fieldset className="credential_fieldset">
                                <input
                                    type="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    placeholder="example@gmail.com"
                                    required
                                    className="email"
                                />
                                <input
                                    type="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    placeholder="enter password"
                                    required
                                />
                                {/* error start..... */}
                                <div className="errorMessage">{error}</div>
                                {/* error end... */}
                                <label
                                    htmlFor="subscribe"
                                    className="subscribe_label"
                                >
                                    <input
                                        type="checkbox"
                                        id="subscribe"
                                        onChange={(e) => {
                                            setSubcribe(
                                                e.target.checked && true
                                            );
                                        }}
                                    />{" "}
                                    <p>
                                        I hereby agree to the terms and
                                        condition of this website
                                    </p>
                                </label>
                                <button type="submit" className="submit_btn">
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignUp;
