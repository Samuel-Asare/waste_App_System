import "../../css/ImageCards.css";
import BannerImage from "../../assets/HomePage/BannerImage.jpeg";
import Collectors from "../../assets/BlogPage/1.jpeg";
import Trash_Track from "../../assets/other_Images/trash_car.jpg";

const ImageCards = () => {
    return (
        <div className="image_wrapper">
            <div className="image_holder">
                <img
                    src={BannerImage}
                    alt="waste banner image"
                    loading="lazy"
                />
                <img
                    src={Trash_Track}
                    alt="waste banner image"
                    loading="lazy"
                />
                <img src={Collectors} alt="waste banner image" loading="lazy" />
            </div>
        </div>
    );
};

export default ImageCards;
