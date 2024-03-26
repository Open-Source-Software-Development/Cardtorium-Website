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
import movement from "../src/assets/img/movement.jpg"
import menu from "../src/assets/img/menu.jpg"
import sprites from "../src/assets/img/sprites.jpg"
import fogclear from "../src/assets/img/fog-clear.png"

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
        image: sprites,
        title: "Designing Sprites and Artwork",
        date: "February 21, 2024",
        description: "We've been hard at work creating the game's artwork and sprites. We've designed the game's logo, some card artwork, and game board tiles. We've also created the game's main card sprites. Currently, we're working on developing lore for the project to guide our art direction and game design.",
    },
    {
        id: 2,
        image: menu,
        title: "Menu Design",
        date: "February 28, 2024",
        description: "We've implemented the main menu and options menu. The main menu allows the player to start a new game. The options menu allows the player to adjust the game's volume and toggle fullscreen mode. We've also added a variety of menu screens and a placeholder card deck building screen.",
    },
    {
        id: 3,
        image: movement,
        title: "Movement and Interactions",
        date: "March 18, 2024",
        description: "In our most recent milestone 3, we implemented troop movement and the ability to place cards on the board from the player's hand. Additionally, we added fog of war to the game board, which hides the opponent's cards until they are within range of the player's units. We also added a variety of new troops to the game, including factions. We're currently working on implementing the game's turn and combat system.",
    },
    {
        id: 4,
        image: fogclear,
        title: "Fog Clearing",
        date: "March 25, 2024",
        description: "We added the ability to automatically clear fog of war from the game board. We also updated the UI for card selection from the player's hand. We're currently working on player turns and adding functionality to the stats bar at the top of the game.",
    },
];

function SectionBlog() {
    return (
        <>
            <IndexNavbar />
            <div className="section pt-5 pb-5" id="blog" style={{ borderBottom: "1px solid #ccc" }}>
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
