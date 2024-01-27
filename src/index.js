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
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
// pages
import Index from "views/Index.js";
import About from "views/index-sections/SectionAbout.js"
import Documentation from "views/index-sections/SectionDocumentation.js"
import Blog from "views/index-sections/SectionBlog.js"
import Community from "views/index-sections/SectionCommunity.js"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/#/index" element={<Index />} />
      <Route path="/#/about" element={<About />} />
      <Route path="/#/documentation" element={<Documentation />} />
      <Route path="/#/blog" element={<Blog />} />
      <Route path="/#/community" element={<Community />} />
      <Route path="*" element={<Navigate to="/#/index" replace />} />
    </Routes>
  </HashRouter>
);
