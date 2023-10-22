import "../../css/Settings.css";
import "../../css/HomePage.css";
import { FiSettings } from "react-icons/fi";
import HeroSection from "../HomePageComponents/HeroSection";
import LeftSideBar from "../HomePageComponents/LeftSideBar";
import { useState } from "react";
import Service from "../HomePageComponents/Service";
import Guide from "../HomePageComponents/Guide";
import CarouselCom from "../HomePageComponents/Carousel";
import Testimonial from "../HomePageComponents/Testimonial";
import ConnetWithUs from "../HomePageComponents/ConnetWithUs";
import ApplicationWorks from "../HomePageComponents/ApplicationWorks";
import Footer from "../Footer";
import FrequentQuestions from "../HomePageComponents/FAQ";
import ImageCards from "../HomePageComponents/ImageCards";

const HomePage = () => {
    const [settingSideBar, setSettingsSideBar] = useState(false);

    const handleClick = () => {
        setSettingsSideBar(!settingSideBar);
    };

    return (
        <div className="home_Page">
            <HeroSection />
            <ImageCards />
            <Service />
            <Guide />
            <CarouselCom />
            <FrequentQuestions />
            <Testimonial />
            <ApplicationWorks />
            <ConnetWithUs />
            <Footer />
            <LeftSideBar settingsBool={settingSideBar} />
            <div className="settings" onClick={handleClick} title="open/close">
                <FiSettings />
            </div>
        </div>
    );
};

export default HomePage;
