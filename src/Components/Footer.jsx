import { Link } from "react-router-dom";
import "../css/Footer.css";
import Typography from "@mui/material/Typography";

import Recycle_Icon from "../assets/other_Images/recycle_icon.svg";

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link to="/" className="copyright_brandname">
                cleanwaste
            </Link>
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Footer = () => {
    return (
        <div className="footer_div">
            <div className="wrapper">
                <div className="bottom">
                    <img
                        src={Recycle_Icon}
                        alt="recycle icon"
                        width="30px"
                        height="30px"
                    />
                    <h6>CleanWaste</h6>
                    <p>We are available always</p>
                </div>
                <div className="copyright_div">
                    <Copyright />
                </div>
            </div>
        </div>
    );
};

export default Footer;
