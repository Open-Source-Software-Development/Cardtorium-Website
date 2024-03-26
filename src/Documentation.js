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
            <div className="section pt-5 pb-5" id="documentation" style={{ borderBottom: "1px solid #ccc", fontWeight: "bold" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <h1 className="text-center mb-4">Cardtorium Documentation</h1>
                            <p className="text-center" style={{ lineHeight: "1.6", fontWeight: "bold" }}>
                                Below, you'll find instructions on how to download and get started.
                            </p>

                            <div className="documentation-section" style={{ lineHeight: "1.6", fontWeight: "bold" }}>
                                <h2>Downloading Cardtorium</h2>
                                <br></br>
                                <p><strong>
                                    Please select the appropriate download for your operating system.</strong></p>
                                <br></br>
                                <div id="downloads">
                                    <ul>
                                        <li><strong><a href="/cardtorium-windows.exe" download style={{ color: "darkblue", fontSize: "larger" }}>Download for Windows</a></strong></li>
                                        <li><strong><a href="/cardtorium-linux.x86_64" download style={{ color: "darkblue", fontSize: "larger" }}>Download for Linux</a></strong></li>
                                        <li><strong><a href="/cardtorium-mac.dmg" download style={{ color: "darkblue", fontSize: "larger" }}>Download for macOS</a></strong></li>
                                    </ul>
                                    <p><strong>Note: For macOS, we do not yet have an existing Apple Developer account to sign the binaries. As a workaround, you should be able to download, right-click on the app, and select Open. Doing so will bring up a warning dialog but should show an extra button that lets you continue on and open the app.</strong></p>
                                </div>

                            </div>

                            <div className="text-center mt-4">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View Full Documentation
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );
}

export default SectionDocumentation;
