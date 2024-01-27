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

// reactstrap components

// core components
import IndexNavbar from "components/IndexNavbar.js";
import IndexHeader from "components/IndexHeader.js";
import Footer from "components/Footer.js";

// index sections
import About from "views/About/About.js";
import Documentation from "./Documentation/Documentation";
import Blog from "./Blog/Blog";
import Community from "./Community/Community";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexHeader />
      <div className="main">
        <IndexNavbar />
        {/* <DemoFooter /> */}
      </div>
    </>
  );
}

export default Index;
