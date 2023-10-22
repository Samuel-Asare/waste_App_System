import "../../css/HeaderBlogSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/BlogPage/headerSection.jpeg";
import Image2 from "../../assets/BlogPage/1.jpeg";
import Image3 from "../../assets/BlogPage/2.jpeg";

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
        src: Image1,
        altText: "Transforming Trash into Treasure",
        caption:
            "From Trash Bins to Green Initiatives, We're Making a Difference!",
        key: 1,
        imageSource: "Image 1 source: ....",
    },
    {
        src: Image2,
        altText: "Revolutionizing Waste Collection",
        caption:
            "Efficient, Eco-Friendly, and Reliable Waste Management Services.",
        key: 2,
        imageSource: "Image 2 source: .....",
    },
    {
        src: Image3,
        altText: "Sweeping for a Cleaner Tomorrow",
        caption: "Sweeping Away Pollution, One Street at a Time!",
        key: 3,
        imageSource: "Image 3 source: .....",
    },
];

const HeaderBlogSection = (args) => {
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
                <img
                    src={item.src}
                    alt={item.altText}
                    className="carousel-image"
                />

                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <div className="blogHeaderSection">
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
                    className="carousel_dash_indicators"
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
};

export default HeaderBlogSection;
