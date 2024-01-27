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
import IndexNavbar from "components/IndexNavbar";
import IndexHeader from "components/IndexHeader";
import Footer from "components/Footer";
import SectionAbout from "../About";
import SectionBlog from "../Blog";
import SectionCommunity from "../Community";
import SectionDocumentation from "../Documentation";


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
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionAbout />
        <SectionDocumentation />
        <SectionBlog />
        <SectionCommunity />
      </div>
      <Footer />
    </>
  );
}

export default Index;
