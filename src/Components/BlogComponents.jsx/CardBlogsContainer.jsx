import "../../css/CardBlogsContainer.css";
import BlogBanner from "./BlogBanner";
import BlogCard from "./BlogCard";
import HeaderBlogSection from "./HeaderBlogSection";
import InternationalBlogCards from "./InternationalBlogCards";

const CardBlogsContainer = () => {
    return (
        <div className="main-content-wrapper">
            <HeaderBlogSection />
            <BlogCard />
            <BlogBanner />
            <InternationalBlogCards />
        </div>
    );
};

export default CardBlogsContainer;
