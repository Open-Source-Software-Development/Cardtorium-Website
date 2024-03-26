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
/*eslint-disable*/
import React from "react";
import { Link } from "react-scroll";
import { Button, Container, NavItem } from "reactstrap";

function IndexHeader() {

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/background.png") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Cardtorium</h1>
            <h3>Civilization-style turn-based 2D strategy game</h3>
            <br />
            <Button href="https://drive.google.com/file/d/1tfrHWAtYyEiIPIebnsek9yGK2FxtreUV/view?usp=drive_link" className="btn-round mr-1" color="neutral" target="_blank" outline >
              <i className="fa fa-play" />Watch Demo</Button>
            <Button className="btn-round mr-1" color="neutral" outline>
              <Link
                to="documentation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                style={{ fontWeight: 'bold' }} // adjust the value as needed
              >
                Download
              </Link>
            </Button>
            {/* <Button href="placeholder.zip" // placeholder download
              className="btn-round mr-1" color="neutral" outline download>Download</Button> */}
            {/* <Button>
              <Link
                to="documentation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                // className="nav-link"
                className="btn-round mr-1"
                color="neutral"
                outline
              >
                Documentation
              </Link>
            </Button> */}

          </div>
          <div
            className="moving-clouds"
            style={{
              backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
            }}
          />
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
