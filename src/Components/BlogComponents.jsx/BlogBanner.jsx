import "../../css/BlogBanner.css";
// import BannerImg from "../../assets/BlogPage/banner.jpeg";

const BlogBanner = () => {
    return (
        <div className="bannerContainer">
            <div className="bannerContent">
                {/* <img src={BannerImg} alt="waste banner Image" /> */}
                <h5>
                    <q>
                        From Trash to Treasure: Navigating the World of Waste
                        Management Explore Sustainable Solutions, Recycling
                        Tips, and Eco-Friendly Practices.
                    </q>
                </h5>
            </div>
        </div>
    );
};

export default BlogBanner;
