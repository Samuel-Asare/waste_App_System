import "../../../css/LogIn.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

// Firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../../Firebase/firebase";
import { AuthContext } from "../../../context/AuthContextProvider";
import { signInWithPopup } from "firebase/auth";

function Login() {
    // ...........................................................................................
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);

    // auth context
    const { dispatch } = useContext(AuthContext);

    // submit function start
    function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user });
                setError(false);
                navigate("/");
                // ...
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
        setLoading(false);
    }

    // submit function end

    const messageStyle = {
        color: "red",
        fontSize: ".8rem",
        marginBottom: "0",
    };

    // Google Signin with popup.....................

    function handleGoogleSignup() {
        setLoading(true);
        signInWithPopup(auth, provider).then((currentUser) => {
            let user = currentUser.user;
            console.log(currentUser.email);
            dispatch({ type: "LOGIN", payload: user });
            navigate("/");
        });
        setLoading(false);
    }

    // ...........................................................................................

    return (
        <>
            {currentUser ? (
                navigate("/")
            ) : (
                <div className="login_container">
                    <div className="login_content">
                        <header>
                            <h1>Welcome back to our space.</h1>
                            <p>
                                Dont have an account..
                                <Link to="/signup" id="link_item">
                                    sign up
                                </Link>
                            </p>

                            <button
                                className="google_text"
                                onClick={handleGoogleSignup}
                            >
                                LogIn with google <FcGoogle />
                            </button>
                        </header>
                        {/* FORM START */}
                        <form onSubmit={handleLogin}>
                            <fieldset>
                                <fieldset>
                                    {/* error message display */}
                                    {error && (
                                        <p style={messageStyle}>
                                            Wrong email or password
                                        </p>
                                    )}
                                    {/* end */}
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        id="email"
                                        onChange={(e) =>
                                            setemail(e.target.value)
                                        }
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        id="password"
                                        onChange={(e) =>
                                            setpassword(e.target.value)
                                        }
                                        required
                                    />
                                </fieldset>
                                <div id="forgot_div">
                                    <p>
                                        Forgot Password{" "}
                                        <Link to="/rest" id="reset_btn">
                                            Rest
                                        </Link>
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    id="login_btn"
                                    disabled={loading}
                                >
                                    Log in
                                </button>
                            </fieldset>
                        </form>
                        {/* FORM END */}
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
