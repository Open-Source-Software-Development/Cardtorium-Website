/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import IndexNavbar from "../src/components/IndexNavbar";
import {
    Card,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";

const items = [
    {
        src: require("assets/img/sprites.jpg"),
    },
    {
        src: require("assets/img/menu.jpg"),
    },
    {
        src: require("assets/img/movement.jpg"),
    },
];

const fakeWords = `
 Cardtorium is a civilization-style 2D card game. Players can build cities, gather resources, and engage in combat with an opponent.
`;

function SectionAbout() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const onExiting = () => setAnimating(true);
    const onExited = () => setAnimating(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    return (
        <>
            <IndexNavbar />

            {/* Landing Section */}
            {/* <div className="section pt-5 pb-5" id="landing" style={{ height: "5vh" }}>
            </div> */}

            {/* About Section */}
            <div className="section pt-5 pb-5" id="about" style={{ borderBottom: "1px solid #ccc" }}>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <h2 className="text-center mb-4">About</h2>
                            <Row>
                                <Col md="6">
                                    <Card className="page-carousel">
                                        <Carousel
                                            activeIndex={activeIndex}
                                            next={next}
                                            previous={previous}
                                        >
                                            <CarouselIndicators
                                                items={items}
                                                activeIndex={activeIndex}
                                                onClickHandler={goToIndex}
                                            />
                                            {items.map((item) => (
                                                <CarouselItem
                                                    onExiting={onExiting}
                                                    onExited={onExited}
                                                    key={item.src}
                                                >
                                                    <img src={item.src} alt={item.altText} />
                                                    <CarouselCaption
                                                        captionText={item.caption}
                                                        captionHeader=""
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </Carousel>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="about-content text-left mt-3">
                                        <p>{fakeWords}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SectionAbout;