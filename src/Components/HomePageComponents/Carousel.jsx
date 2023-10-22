import "../../css/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BeachImage from "../../assets/Carousel_Imgaes/Beach-Waste image.jpeg";
import RoadImage from "../../assets/Carousel_Imgaes/Road-Waste image.jpeg";
import SeaWaste from "../../assets/Carousel_Imgaes/SeaWaste.jpeg";
import GatheredWaste from "../../assets/Carousel_Imgaes/GatheredWaste.jpeg";
import LandFills from "../../assets/Carousel_Imgaes/LandFills.jpeg";

import { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";

const items = [
    {
        src: BeachImage,
        altText: "🏖️ Cleaning for a Coastal Rebirth",
        caption: "Rise with the Tides 🌊 Let's Rescue Our Seashores",
        key: 1,
        imageSource: "",
    },
    {
        src: RoadImage,
        altText: "🚛 Unsung Warriors of Waste Management",
        caption: "Riding the Green Streets 🌿 Keeping Your World Spotless",
        key: 2,
        imageSource: "",
    },
    {
        src: SeaWaste,
        altText: "🚣 Battling Pollution, Salvaging Serenity",
        caption: "Deep Dive into Clean Waters 🏊‍ Dive for a Cleaner Future",
        key: 3,
        imageSource: "",
    },
    {
        src: GatheredWaste,
        altText: "🌍 Time for Action, Not Waste",
        caption: "Join the Green Revolution ♻️ Be Part of the Cleanup Crew",
        key: 4,
        imageSource: "",
    },
    {
        src: LandFills,
        altText: "🗑️ Tracing Our Trash Footprint",
        caption: "Awakening the Landfills 🌱 Transforming Waste into Wisdom",
        key: 5,
        imageSource: "",
    },
];

function CarouselCom(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <figcaption>
                    <img
                        src={item.src}
                        alt={item.altText}
                        className="carousel_image"
                    />
                    <cite>{item.imageSource}</cite>
                </figcaption>
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <div className="carousel_container">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
                className="carousel"
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

export default CarouselCom;
