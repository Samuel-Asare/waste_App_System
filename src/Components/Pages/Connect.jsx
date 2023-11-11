import { useContext } from "react";
import Checkout from "../Booking/Checkout";
import SignUp from "./Auth/SignUp";
import { AuthContext } from "../../context/AuthContextProvider";

const Connect = () => {
    const { currentUser } = useContext(AuthContext);

    return <div>{currentUser ? <Checkout /> : <SignUp />}</div>;
};

export default Connect;
