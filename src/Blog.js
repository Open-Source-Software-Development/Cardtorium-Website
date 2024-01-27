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
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import IndexNavbar from "components/IndexNavbar";
import placeholder1 from "../src/assets/img/placeholder1.jpg"
import placeholder2 from "../src/assets/img/placeholder2.jpg"
import placeholder3 from "../src/assets/img/placeholder3.jpg"

const BlogPost = ({ image, title, date, description }) => {
    return (
        <Card>
            <CardImg top src={image} alt="Blog Post" />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{date}</CardSubtitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

const blogData = [
    {
        id: 1,
        image: placeholder1,
        title: "Blog Post 1",
        date: "January 1, 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 2,
        image: placeholder2,
        title: "Blog Post 2",
        date: "January 2, 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 3,
        image: placeholder3,
        title: "Blog Post 2",
        date: "January 2, 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];

function SectionBlog() {
    return (
        <>
            <IndexNavbar />
            <div className="section pt-5 pb-5" id="blog" style={{ height: "100vh", borderBottom: "1px solid #ccc" }}>
                <div className="container">
                    <h2 className="text-center mb-5">Latest Blog Posts</h2>
                    <div className="row">
                        {blogData.map((post) => (
                            <div key={post.id} className="col-md-4 mb-4">
                                <BlogPost
                                    image={post.image}
                                    title={post.title}
                                    date={post.date}
                                    description={post.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionBlog;