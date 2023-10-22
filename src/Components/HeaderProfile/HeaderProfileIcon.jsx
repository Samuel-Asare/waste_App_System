import "../../css/HeaderProfileIcon.css";
import ProfileImage from "../../assets/Profile/1.jpeg";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// FIREBASE
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const HeaderProfileIcon = () => {
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const navigate = useNavigate();

    // auth context
    const { dispatch } = useContext(AuthContext);
    const { currentUser } = useContext(AuthContext);

    function changeBoolean() {
        setIsProfileClicked(!isProfileClicked);
    }

    function logOut() {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                dispatch({ type: "LOGOUT", payload: currentUser });
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                alert(error);
            });
    }

    return (
        <Link>
            <div className="userProfile" onClick={changeBoolean}>
                <img
                    src={
                        currentUser.photoURL
                            ? currentUser.photoURL
                            : ProfileImage
                    }
                    alt="profile Image"
                />
            </div>
            <div
                className="btn_logout"
                style={{ display: isProfileClicked && "block" }}
            >
                <button onClick={logOut}>
                    LogOut <LogoutOutlinedIcon />
                </button>
            </div>
        </Link>
    );
};

export default HeaderProfileIcon;
