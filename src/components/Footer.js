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
import { Container, Row, Col } from "reactstrap";

function Footer() {
  return (
    <footer className="footer" style={{ borderTop: "1px solid #ccc", background: "#f8f9fa" }}>
      <Container>
        <Row>
          <Col md="12">
            <div className="credits text-center">
              <h4>Footer Info</h4>
              <p>
                Licensing?              </p>

              <p>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
