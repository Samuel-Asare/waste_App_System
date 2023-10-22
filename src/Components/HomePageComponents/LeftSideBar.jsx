import PropTypes from "prop-types";
import "../../css/LeftSideBar.css";
import { MdRoundaboutLeft } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";

const LeftSideBar = ({ settingsBool }) => {
    return (
        <div
            className="overlay"
            style={{
                left: settingsBool && "0%",
            }}
        >
            <div
                className="left_sideBar"
                style={{
                    right: settingsBool && "0%",
                }}
            >
                <div className="content">
                    <div className="menus">
                        <NavLink activeClassName="active" to="/contact">
                            <MdOutlineContacts />
                            Contact
                        </NavLink>
                        <NavLink activeClassName="active" to="/about">
                            <MdRoundaboutLeft />
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

LeftSideBar.propTypes = {
    settingsBool: PropTypes.node,
};

export default LeftSideBar;
