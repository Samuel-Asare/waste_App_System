import "../../css/Testimonial.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from "reactstrap";

const items = [
    {
        word: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, hic. Tenetur voluptate neque error obcaecati, voluptatem corporis voluptates. Harum, pariatur.",
        by: "kelvin smith",
        key: 1,
        imageSource: "Image 1 source: ....",
    },
    {
        word: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, hic. Tenetur voluptate neque error obcaecati, voluptatem corporis voluptates. Harum, pariatur.",
        by: "Lucrecia Max",
        key: 2,
        imageSource: "Image 2 source: .....",
    },
    {
        word: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, hic. Tenetur voluptate neque error obcaecati, voluptatem corporis voluptates. Harum, pariatur.",
        by: "maxwell tin",
        key: 3,
        imageSource: "Image 3 source: .....",
    },
];

const Testimonial = (args) => {
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
                <div className="testimonial-div">
                    <figcaption className="text">
                        {`"${item.word}"`}
                        <cite className="by">~{item.by}</cite>
                    </figcaption>
                </div>
            </CarouselItem>
        );
    });

    return (
        <div className="testimonial_container">
            <div className="glassy_div">
                <h2 className="header">
                    What People Are Saying About CleanWaste System
                </h2>
                <div className="carousel">
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
            </div>
        </div>
    );
};

export default Testimonial;
