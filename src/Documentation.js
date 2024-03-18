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

function SectionDocumentation() {
    return (
        <>
            <IndexNavbar />
            <div className="section pt-5 pb-5" id="documentation" style={{ borderBottom: "1px solid #ccc" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <h1 className="text-center mb-4">Cardtorium Documentation</h1>
                            <p className="text-center" style={{ lineHeight: "1.6" }}>
                                Welcome to the documentation for Cardtorium. Below, you'll find instructions on how to download and get started.
                            </p>

                            <div className="documentation-section" style={{ lineHeight: "1.6" }}>
                                <h2>Downloading Cardtorium</h2>
                                <p>
                                    To download Cardtorium, follow these simple steps:
                                </p>

                                <pre>
                                    <code>pip or whatever install Cardtorium</code>
                                </pre>

                                <p>
                                    Once installed, you can launch the game using the following
                                    command:
                                </p>

                                <pre>
                                    <code>Cardtorium start</code>
                                </pre>

                                <p>
                                    Congratulations! You've successfully downloaded and launched
                                    Cardtorium.
                                </p>
                            </div>

                            <div className="documentation-section" style={{ lineHeight: "1.6" }}>
                                <h2>System Requirements</h2>
                                <p>
                                    Before downloading Game Title, make sure your system meets the
                                    following requirements:
                                </p>

                                <ul>
                                    <li>Operating System: Windows, macOS, Linux</li>
                                    <li>RAM: 4GB or higher</li>
                                    <li>Free Disk Space: 10GB</li>
                                    <li>Graphics: DirectX 11 compatible</li>
                                </ul>
                            </div>

                            <div className="text-center mt-4">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View Full Documentation
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SectionDocumentation;
