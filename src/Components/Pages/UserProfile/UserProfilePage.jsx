import { useContext } from "react";
import "../../../css/UserProfilePage.css";
import ProfileImage from "../../../assets/Profile/1.jpeg";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// FIREBASE
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import { AuthContext } from "../../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
    const navigate = useNavigate();

    // auth context
    const { dispatch } = useContext(AuthContext);
    const { currentUser } = useContext(AuthContext);

    // FIREBASE LOGOUT FUNCTION

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
        <div className="profileContent_Wrapper">
            <div className="profileContent_div">
                {/* profile image */}
                <div className="profileImage_div">
                    <div className="profile">
                        <img
                            src={
                                currentUser.photoURL
                                    ? currentUser.photoURL
                                    : ProfileImage
                            }
                            alt="Profile Picture Icon"
                        />
                    </div>
                </div>
                {/* content */}
                <div className="userProfileInformation">
                    <div className="content">
                        <div className="name">
                            <h5>{currentUser.displayName}</h5>
                        </div>
                        <p>Email: {currentUser.email}</p>
                        <p>
                            Phone:{" "}
                            {currentUser.phoneNumber
                                ? currentUser.phoneNumber
                                : "xxx-xxx-xxxx"}
                        </p>
                        <p>Country: Ghana</p>
                        <p>Address: hello</p>
                        <div className="button_div">
                            {/* button */}
                            <button onClick={logOut}>
                                LogOut <LogoutOutlinedIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
