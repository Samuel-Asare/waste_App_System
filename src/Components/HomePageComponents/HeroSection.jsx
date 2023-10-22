import { Link } from "react-router-dom";
import "../../css/Home_HeroSection.css";
import { GoArrowUpRight } from "react-icons/go";
import Image from "../../assets/HomePage/Hero.png";

const HeroSection = () => {
    return (
        <div className="homePage_Wrapper">
            <div className="glassy_div">
                <div className="text">
                    <h1>Convenient Waste Collection System</h1>
                    <p>
                        Efficient waste management for a cleaner and greener
                        Accra Metropolitan Area.
                    </p>

                    <div className="links">
                        <Link to="/connect">
                            <button>
                                Book Waste Collection <GoArrowUpRight />
                            </button>
                        </Link>
                        <Link to="/case/learn">
                            <button className="learn_btn">
                                Learn Something New
                                <GoArrowUpRight />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="image_div">
                    <img src={Image} alt="hero image" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
