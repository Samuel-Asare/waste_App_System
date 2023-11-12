import "../../css/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
        src: "https://images.unsplash.com/photo-1571510228522-bcd6099cea0b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "🏖️ Cleaning for a Coastal Rebirth",
        caption: "Rise with the Tides 🌊 Let's Rescue Our Seashores",
        key: 1,
        imageSource: "",
    },
    {
        src: "https://images.unsplash.com/photo-1605027538720-37afa8b9fc39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "🚛 Unsung Warriors of Waste Management",
        caption: "Riding the Green Streets 🌿 Keeping Your World Spotless",
        key: 2,
        imageSource: "",
    },
    {
        src: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "🚣 Battling Pollution, Salvaging Serenity",
        caption: "Deep Dive into Clean Waters 🏊‍ Dive for a Cleaner Future",
        key: 3,
        imageSource: "",
    },
    {
        src: "https://images.unsplash.com/photo-1619540034640-0d41b5e0f6fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "🌍 Time for Action, Not Waste",
        caption: "Join the Green Revolution ♻️ Be Part of the Cleanup Crew",
        key: 4,
        imageSource: "",
    },
    {
        src: "https://images.unsplash.com/photo-1525331336235-d3153d7e58cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
