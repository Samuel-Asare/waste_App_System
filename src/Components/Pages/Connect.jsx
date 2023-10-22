import { useContext } from "react";
import Checkout from "../Booking/Checkout";
import SignUp from "./Auth/SignUp";
import { AuthContext } from "../../context/AuthContextProvider";

const Connect = () => {
    const { currentUser } = useContext(AuthContext);

    /*

if the user hasnt logged in then signup else the checkout component

{ .currentUser ? <Checkout/> : <Signup/> }

*/

    return <div>{currentUser ? <Checkout /> : <SignUp />}</div>;
};

export default Connect;
