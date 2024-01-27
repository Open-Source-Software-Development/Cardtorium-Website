// /*!

// =========================================================
// * Paper Kit React - v1.3.2
// =========================================================

// * Product Page: https://www.creative-tim.com/product/paper-kit-react

// * Copyright 2023 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import React from "react";
import classnames from "classnames";
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";
import { useLocation } from 'react-router-dom';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const location = useLocation();

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    setNavbarColor(location.pathname === "/index" ? "navbar-transparent" : "navbar-light bg-info");
  }, [location.pathname]);

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title="Logo"
          >
            LOGO
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink href="/#/documentation">Documentation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/community">Community</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
