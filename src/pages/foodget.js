import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title/Title';
import ProjectImg from '../components/Image/ProjectImg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Foodget = () => {
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
          <Title title="Online Grocery Shopping" />
          <Row className="about-wrapper">
            <Col md={{ span: 6, offset: 3 }} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    Due to COVID-19, my family started to buy groceries online in Tokyo. However, it
                    became a painful daily routine as most of services lacked key functionality and
                    usability. From the frustration, I have listed issues in these services, and
                    then designed a prototype to make a new service that makes grocery shopping much
                    more convenient.
                  </p>
                  <p className="about-wrapper__info-text">
                    This was a personal project from April to August 2020.
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="background">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <div className="content-wrapper__text-title">
                <b>Overview</b>
              </div>
              <div>
                <p>
                  I have built a shopping list web app that lists available groceries scraped from
                  user’s nearby online supermarkets to decrease a great amount of time to buy food
                  online.
                </p>
                <ProjectImg alt="foodget picture" filename="foodget/overview.png" />
              </div>
            </div>
          </Fade>
        </Col>
      </section>
      <section id="background">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div>
              <div className="content-wrapper__text-title">Understanding current process</div>
              <div>
                <p>
                  To understand what steps are usually taken to buy groceries online, firstly I have
                  organized all activities and associated emotions to complete the process, and then
                  listed all main steps necessary.
                </p>
                <ol className="content-wrapper__list">
                  <li>Create a meal plan</li>
                  <li>Make list of ingredients</li>
                  <li>Ask family if they need somthing</li>
                  <li>Open an app/website</li>
                  <li>Search groceries(through category/ typing keywords)</li>
                  <li>Add items to cart</li>
                  <li>Select delivery date and time</li>
                  <li>Make a payment</li>
                  <li>Receive the order</li>
                </ol>
              </div>
            </div>
          </Fade>
        </Col>
      </section>
      <section id="key-elements">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <div className="content-wrapper__text-title">Key obstacles for better experience</div>
              <div>
                <p>
                  After trying three existing services and interviewing three users, I have
                  identified four key elements that prevented users from completing the transaction.
                  Eliminating or improving these decreases an idle time and gives users the reason
                  to use the service again and again.
                </p>
                <ol className="content-wrapper__list">
                  <li>Too many page transitions and slow loading</li>
                  <li>
                    Inconsistent item listing such as not sorted by weights, prices or similarity
                  </li>
                  <li>Insufficient search capability</li>
                  <li>Limited delivery options</li>
                </ol>
                <p>
                  In addition to above elements, the fact that online grocery sites lacking enough
                  variations of items forced users to use multiple services. It is the critical
                  issue since most people don’t shop at multiple supermarkets when shopping offline.
                </p>
              </div>
            </div>
          </Fade>
        </Col>
      </section>
      <section id="solution">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <div className="content-wrapper__text-title">Solution Ideation:</div>
              <div className="content-wrapper__text-title">Data, Design and Speed</div>
              <div>
                <p>Data</p>
                <p>
                  The new service manages all supermarkets and their merchandise data which are
                  available at user’s location so that users no longer need to access multiple
                  services separately.
                </p>
                <p>Design</p>
                <p>
                  Displaying all items in a sorted order and same layouts helps users to make
                  decisions easily on which to purchase.
                </p>
                <p>Speed</p>
                <p>
                  Developing a static website to limit access to a server enables much faster and
                  smooth transitions.
                </p>
              </div>

              <ProjectImg alt="foodget picture" filename="foodget/value_proposition.jpg" />
            </div>
          </Fade>
        </Col>
      </section>
      <section id="solution-example">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <div>
                <div className="content-wrapper__text-subtitle">Wireframes</div>
                <p>
                  Firstly, I drew wireframes and defined key functionalities that are necessary for
                  users to complete the shopping.
                </p>
                <ProjectImg alt="foodget picture" filename="foodget/wireframes.jpg" />
                <div className="content-wrapper__text-subtitle">
                  Flow of registering postal code to completing purchasing
                </div>
                <ProjectImg alt="foodget picture" filename="foodget/wireframes_flow.jpg" />
              </div>
            </div>
          </Fade>
        </Col>
      </section>
      <section id="prototyping">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <div className="content-wrapper__text-title">Prototyping</div>
              <div>
                <div className="content-wrapper__text-subtitle">Main page</div>
                <ProjectImg alt="foodget picture" filename="foodget/prototype_main_page.jpg" />
                <div className="content-wrapper__text-subtitle">Item detail</div>
                <ProjectImg alt="foodget picture" filename="foodget/prototype_item_detail.jpg" />
                <div className="content-wrapper__text-subtitle">Search</div>
                <ProjectImg alt="foodget picture" filename="foodget/prototype_search.jpg" />
                <div className="content-wrapper__text-subtitle">Delivery options</div>
                <ProjectImg
                  alt="foodget picture"
                  filename="foodget/prototype_delivery_options.jpg"
                />
              </div>
              <div className="content-wrapper__text-title">Technology Used</div>
              <ProjectImg alt="foodget picture" filename="foodget/technology_used.jpg" />
            </div>
          </Fade>
        </Col>
      </section>
      <section id="summary">
        <Col md={{ span: 6, offset: 3 }} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="content-wrapper__text">
              <div className="content-wrapper__text-title">Summary</div>
              <ProjectImg alt="foodget picture" filename="foodget/summary.jpg" />
            </div>
            <div className="content-wrapper__text-title">Service</div>
            <div>
              <a href="https://foodget.app" target="_blank" rel="noreferrer">
                foodget.app
              </a>
            </div>
          </Fade>
        </Col>
      </section>
    </div>
  );
};

export default Foodget;
