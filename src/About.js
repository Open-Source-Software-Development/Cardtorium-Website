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
        src: require("assets/img/movement.jpg"),
        // altText: "Movement and Interaction",
        // caption: "Somewhere",
    },
    {
        src: require("assets/img/menu.jpg"),
        // altText: "Somewhere else",
        // caption: "Somewhere else",
    },
    {
        src: require("assets/img/sprites.jpg"),
        // altText: "Here it is",
        // caption: "Here it is",
    },
];

const fakeWords = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Integer tincidunt quam eu bibendum interdum. 
  Fusce vehicula congue neque vel vulputate. 
  Suspendisse potenti. Donec vel justo eu erat rhoncus malesuada. 
  Curabitur ultrices dolor at nulla bibendum, in ultricies turpis pharetra. 
  Sed tincidunt nunc in nulla hendrerit, ac ullamcorper ligula facilisis. 
  Aenean sed risus eu elit aliquet varius. Maecenas in elit at dui interdum 
  viverra sit amet id dolor. Proin vel ex ac lectus efficitur ultricies. 
  Phasellus consequat quam eu orci scelerisque, eu scelerisque justo sodales.
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
                            <h2 className="text-center mb-4">Current WIP</h2>
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