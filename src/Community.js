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
import IndexNavbar from "./components/IndexNavbar";
import { Container, Row, Col } from "reactstrap";

function SectionCommunity() {
    return (
        <>
            <IndexNavbar />
            <div className="section pt-5 pb-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <h2 className="text-center mb-4" id="community">Join Our Community on Discord</h2>
                            <p className="text-center">
                                Welcome to our community! Connect with us on Discord to chat,
                                share ideas, and stay updated with the latest news.
                            </p>
                            <div className="text-center">
                                <a
                                    href="https://discord.gg/wR23Rvz4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Join Discord
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SectionCommunity;
