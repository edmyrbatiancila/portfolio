import React from 'react';
import { Carousel, Container, Col } from "react-bootstrap";
import DeveloperGamer from './assets/img/developer_gamer.png';
import DeveloperDrummer from './assets/img/playing_drum.png';
import DeveloperAnimeLover from './assets/img/watching_anime.png';

function AboutMe() {
    return (
        <main class="px-3">
        <h1 className="display-1 collaborate">Let's Collaborate...</h1>
        <p class="about">
            I am a passionate, goal-driven individual who is also fun to be
            around. I believe that I bring value to any team dynamic due to my
            creative ideas and unique perspective. If you would like to learn more
            about me, feel free to check out my projects and demos on my{" "}
            <a
                className="youtube"
                href="https://www.youtube.com/@edmyrbatiancila5469"
                target="_blank"
                rel="noreferrer"
            >
            <span className='youtube_highlight'>YouTube</span>
            </a>{" "}
            channel . Additionally, I am open to making new friends and expanding
            my network.
        </p>
        <PhotoSlider />
        </main>
    );
}

function PhotoSlider() {
    const carouselItems = [
      {
        imageSrc: DeveloperGamer,
        altText: "Web developer who loves games",
      },
      {
        imageSrc: DeveloperDrummer,
        altText: "Web developer who loves to play drums"
      },
      {
        imageSrc: DeveloperAnimeLover,
        altText: "Web developer who loves to watch anime"
      }
    ];

    const carouselLists = carouselItems.map((item, index) => (
      <Carousel.Item>
        <img src={item.imageSrc} alt={item.altText} />
      </Carousel.Item>
    ));

    return (
      <Container className="banner">
        <Col>
          <Carousel>{carouselLists}</Carousel>
        </Col>
      </Container>
    );
}

export default AboutMe;
