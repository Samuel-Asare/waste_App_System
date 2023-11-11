import { Link } from "react-router-dom";
import "../css/Footer.css";
import Typography from "@mui/material/Typography";

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
        <div className="footer_wrapper">
            <div className="inner_wrapper">
                <div className="brand_name">
                    <h5 className="name">cleanwaste</h5>
                </div>
                <div className="footer_links">
                    <div className="links">
                        <ul>
                            <Link to="/about">
                                <li>About</li>
                            </Link>
                            <Link to="/contact">
                                <li>Contact Us</li>
                            </Link>
                            <Link to="/blog">
                                <li>Blog</li>
                            </Link>
                            <Link to="/case/usecase">
                                <li>UseCases</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="copyright_div">
                        <Copyright />
                    </div>
                </div>
                <div className="social_links">
                    <div className="social">
                        <ul>
                            <li>
                                <svg
                                    width="20"
                                    height="20"
                                    fill="#f5f5f5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16.375 3.25a4.388 4.388 0 0 1 4.375 4.375v8.75a4.388 4.388 0 0 1-4.375 4.375h-8.75a4.389 4.389 0 0 1-4.375-4.375v-8.75A4.388 4.388 0 0 1 7.625 3.25h8.75Zm0-1.75h-8.75C4.256 1.5 1.5 4.256 1.5 7.625v8.75c0 3.369 2.756 6.125 6.125 6.125h8.75c3.369 0 6.125-2.756 6.125-6.125v-8.75c0-3.369-2.756-6.125-6.125-6.125Z"></path>
                                    <path d="M17.688 7.625a1.313 1.313 0 1 1 0-2.625 1.313 1.313 0 0 1 0 2.625Z"></path>
                                    <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg
                                    width="20"
                                    height="20"
                                    fill="#f5f5f5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.25 5.133a9.46 9.46 0 0 1-2.65.717 4.57 4.57 0 0 0 2.03-2.512c-.908.53-1.9.903-2.932 1.101A4.647 4.647 0 0 0 16.327 3c-2.55 0-4.615 2.034-4.615 4.542a4.37 4.37 0 0 0 .119 1.036A13.158 13.158 0 0 1 2.315 3.83a4.485 4.485 0 0 0-.627 2.283c0 1.574.821 2.967 2.062 3.782a4.57 4.57 0 0 1-2.1-.567v.056c0 2.204 1.595 4.036 3.704 4.454a4.752 4.752 0 0 1-1.216.159c-.291 0-.582-.028-.868-.085.587 1.805 2.294 3.118 4.315 3.155a9.356 9.356 0 0 1-6.835 1.88A13.063 13.063 0 0 0 7.816 21c8.501 0 13.146-6.923 13.146-12.928 0-.197-.006-.394-.015-.586a9.304 9.304 0 0 0 2.303-2.353Z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg
                                    width="20"
                                    height="20"
                                    fill="#f5f5f5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className="text">
                        <p>Support cleanwaste with this initiatives</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
