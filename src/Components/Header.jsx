// the header makes use of the Bootstrap NavBar; bootstrap import in the App.jsx component
import "../css/Header.css";
import Recycle_Icon from "../assets/other_Images/recycle_icon.svg";
import { useContext, useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import HeaderProfileIcon from "./HeaderProfile/HeaderProfileIcon";

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // auth context
    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <Navbar {...args} className="header_div" expand="md">
                <Link to="/" className="brand_name">
                    <img
                        src={Recycle_Icon}
                        alt="recycle icon"
                        width="30px"
                        height="30px"
                        className="brand_logo"
                    />
                    <h3>cleanwaste.</h3>
                </Link>
                <NavbarToggler onClick={toggle} className="toggle_hamburger " />
                <Collapse isOpen={isOpen} navbar className="collapse_div">
                    <Nav className="me-auto" navbar id="nav">
                        <NavItem className="nav_item ">
                            <NavLink
                                to="/"
                                activeClassName="active"
                                className="nav_link"
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav_item ">
                            <NavLink
                                to="/connect"
                                activeClassName="active"
                                className="nav_link"
                            >
                                Connect
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav_item case-link ">
                            <NavLink
                                to="/case"
                                activeClassName="active"
                                className="nav_link "
                            >
                                Case
                            </NavLink>
                        </NavItem>

                        <NavItem className="nav_item ">
                            <NavLink
                                to="/blog"
                                activeClassName="active"
                                className="nav_link"
                            >
                                Blog
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav_item ">
                            <NavLink
                                to="/review"
                                activeClassName="active"
                                className="nav_link"
                            >
                                Review
                            </NavLink>
                        </NavItem>
                    </Nav>

                    {/* signup button */}
                    {currentUser ? (
                        <HeaderProfileIcon />
                    ) : (
                        <Link to="/signup" className="signup_btn">
                            SignUp
                        </Link>
                    )}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
