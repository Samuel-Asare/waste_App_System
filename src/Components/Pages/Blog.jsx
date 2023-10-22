import { useContext, useState } from "react";
import "../../css/Blog.css";
import CardBlogsContainer from "../BlogComponents.jsx/CardBlogsContainer";
import ContentSideBar from "../BlogComponents.jsx/ContentSideBar";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

const Blog = () => {
    const [toggle, setToggle] = useState(false);

    // auth context
    const { currentUser } = useContext(AuthContext);

    function handleClick() {
        setToggle(!toggle);
    }

    return (
        <>
            {currentUser ? (
                <div className="blog_container">
                    <ContentSideBar toggle={toggle} />
                    <CardBlogsContainer />
                    <div
                        className="menu_btn"
                        title="open menu"
                        onClick={handleClick}
                    >
                        ⚙️
                    </div>
                </div>
            ) : (
                <Navigate to="/signup" />
            )}
        </>
    );
};

export default Blog;
