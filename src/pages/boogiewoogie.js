import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title/Title';
import ProjectImg from '../components/Image/ProjectImg';
import poseEst from '../images/boogie-woogie/pose_estimation.gif';

const Boogiewoogie = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div id="project_detail">
      <section id="about">
        <Container>
          <Title title="Motion Tracking Dance Practice App" />
          <Row className="about-wrapper">
            <Col md={{ span: 6, offset: 3 }} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    3 week project at a coding bootcamp creating a dance scoring app with motion
                    tracking in JavaScript. The project includes ideation, development and
                    presenting in front of audiences.
                  </p>
                  <p className="about-wrapper__info-text">
                    Team member: Florin, Johannes, Shruti, Yasu
                  </p>
                  <p className="about-wrapper__info-text">
                    My role in the project was ideation and front-end development.
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="project-plan">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <h3 className="content-wrapper__text-title">Project Schedule</h3>
              <ProjectImg alt="boogiewoogie picture" filename="boogie-woogie/project_plan.png" />
            </div>
          </Fade>
        </Col>
      </section>
      <section id="ideation">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <h3 className="content-wrapper__text-title">Ideation</h3>
              <p>
                As one of my interests was learning how to apply machine learning to web
                application, we brainstormed ideas using mind map and searched for
                development-friendly machine learning library. It turned out tensorflow, one of the
                major machine learning library primarily used in python, offered JavaScript based
                library tensorflow.js. After further investigation, we decided to use Pose
                estimation to develop an enjoyable application using user&apos;s webcam.
              </p>
              <h3>Sketch of brainstorming dance practive application</h3>
              <ProjectImg alt="boogiewoogie picture" filename="boogie-woogie/ideation.png" />
            </div>
          </Fade>
        </Col>
      </section>
      <section id="tensorflow">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <h3 className="content-wrapper__text-title">Tensorflow.js and Posenet</h3>
            </div>
            <img alt="Credit: Tensorflow Pose Estimation" src={poseEst} />
            <p>
              Pose estimation refers to computer vision techniques that detect human figures in
              images and videos, so that one could determine, for example, where someone’s elbow
              shows up in an image. link:
              https://www.tensorflow.org/lite/models/pose_estimation/overview
            </p>
          </Fade>
        </Col>
      </section>
      <section id="user_attributes">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <h3 className="content-wrapper__text-title">Defining User Attributes</h3>
              <p>
                This product was aimed for people who like to dance in a private space such as
                user&apos;s own room in front of a mirror. It would support them to be able to
                imitate professional movements and identify gaps between professional and their own
                dance moves to improve their skill.
              </p>
            </div>
          </Fade>
        </Col>
      </section>
      <section id="MVP">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <h3 className="content-wrapper__text-title">Minimum Viable Product</h3>
            </div>
            <div>
              <p>Motion Tracking Dance App that scores your moves</p>
              <ol className="content-wrapper__list">
                <li>Dance to match recorded moves</li>
                <li>Record your own dance routine</li>
              </ol>
            </div>
          </Fade>
        </Col>
      </section>
      <section id="function_1">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <h3 className="content-wrapper__text-title">1. Dance to match recorded moves</h3>
              <p>
                This feature allows users to follow recorded moves and get scored. We used 11 body
                parts, face(nose), arms(elbow, shoulder, wrist) and legs (ankle, knee) to calculate
                how many times users could match their body with the screen. Since users might stand
                differently such as distance, angle and position from the screen, we implemented the
                synchronize standing position to start the dance.
              </p>
            </div>
            <ProjectImg alt="boogiewoogie picture" filename="boogie-woogie/demo_play.png" />
            <ProjectImg alt="boogiewoogie picture" filename="boogie-woogie/pose_detection.png" />
          </Fade>
        </Col>
      </section>
      <section id="function_2">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <h3 className="content-wrapper__text-title">2. Record your own dance routine</h3>
              <p>
                We wanted users to easily record moves, therefore, we used YouTube to play music in
                background and record corresponding movements.
              </p>
            </div>
            <ProjectImg alt="boogiewoogie picture" filename="boogie-woogie/recording.png" />
            <p>
              When recording user’s movements, we save user’s position every 0.1 second. When
              dancing for scoring, the application displays the saved position every 0.1 second and
              score if user matched recorded moves every 1 second.
            </p>
            <ProjectImg
              alt="boogiewoogie picture"
              filename="boogie-woogie/recordingandscoring.png"
            />
          </Fade>
        </Col>
      </section>
      <section id="technology">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <div className="content-wrapper__text">
            <h3 className="content-wrapper__text-title">Technology</h3>
          </div>
          <ProjectImg alt="boogiewoogie picture" filename="boogie-woogie/technology.png" />
        </Col>
      </section>
      <section id="references">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <div className="content-wrapper__text">
            <div className="content-wrapper__text-title">References</div>
          </div>
          <div>
            <a href="https://github.com/crazy-bananas/boogie-woogie">github repository</a>
          </div>
          <div>
            <a href="https://www.youtube.com/watch?v=fdD8Gu3Ix5o&t">Demo(YouTube)</a>
          </div>
        </Col>
      </section>
    </div>
  );
};

export default Boogiewoogie;
