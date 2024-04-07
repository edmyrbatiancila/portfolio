import React from "react";
import {Card} from "react-bootstrap";
import ContactRegistrationForm from "./assets/img/contact_registration_form.JPG";
import LightsOffOn from './assets/img/lightsOffOn.JPG';
import SimpleList from './assets/img/simple_lists.JPG';
import NinjaChallenge from './assets/img/ninjaChallenge.JPG';
import FeedbackForm from './assets/img/feedbackform.JPG';
import ShoppingStore from './assets/img/shoppingstore.JPG';
import './App.css';

class ProjectLists extends React.Component {
    generateCaptionwithReactJS = (title) => ({
    title,
    text: "My technology stack includes HTML5, CSS, Bootstrap, Bootstrap-React, and ReactJS library. I used JavaScript as the programming language.",
    });

    generateCaptionwithoutReactJS = (title) => ({
    title,
    text: "The technology utilized in this project consists of basic HTML5, CSS, and JavaScript programming languages.",
    });

    generateCaptionwithPHP = (title) => ({
    title,
    text: "The technologies utilized in this project include HTML5, CSS/Bootstrap, PHP as the backend programming language, and CodeIgniter as the MVC framework.",
    });

    render() {
    // Define an array of carousel items with their respectives image and caption
    const cardItems = [
        {
            imageSrc: ContactRegistrationForm,
            altText: "Contact Registration Form",
            caption: this.generateCaptionwithReactJS(
                "Contract Registration Form Lists"
            ),
        },
        {
            imageSrc: LightsOffOn,
            altText: "Lights Off Lights On",
            caption: this.generateCaptionwithReactJS("Lights Off Lights On"),
        },
        {
            imageSrc: SimpleList,
            altText: "Simple List",
            caption: this.generateCaptionwithReactJS("Simple List"),
        },
        {
            imageSrc: NinjaChallenge,
            altText: "Ninja Challenge",
            caption: this.generateCaptionwithoutReactJS("Ninja Challenge"),
        },
        {
            imageSrc: FeedbackForm,
            altText: "Feedback Form",
            caption: this.generateCaptionwithoutReactJS("Feedback Form"),
        },
        {
            imageSrc: ShoppingStore,
            altText: "Shopping Store",
            caption: this.generateCaptionwithPHP("Shopping Store")
        },
    ];

    // Map through the array to render each carousel item
    const cardLists = cardItems.map((item, index) => (
        <Card className="projItem">
            <Card.Img
                variant="top"
                src={item.imageSrc}
                alt={item.altText}
                thumbnail
            />
            <Card.Body>
                <Card.Title>{item.caption.title}</Card.Title>
                <Card.Text>{item.caption.text}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link>Demo</Card.Link>
                <Card.Link>Code</Card.Link>
            </Card.Body>
        </Card>
    ));

    // Render the carousel with the mapped carousel slides
    return (
        <section className="myProject">
            <div className="album py-5 bg-body-tertiary">
                <span className="proj">My Projects</span>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 cardlist">
                    {cardLists}
                </div>
            </div>
        </section>
    );
    }
}

export default ProjectLists;
