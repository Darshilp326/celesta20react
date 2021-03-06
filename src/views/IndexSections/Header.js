/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import "../../assets/css/styles.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

let img1 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/SkyBG.png";
let img2 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds1.png";
let img3 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds2.png";
let img4 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds3.png";
let img5 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Moon.png";
let img6 = "https://cdn2.hubspot.net/hubfs/1951013/Parallax/Hill.png";

class Header extends React.Component {
  render() {
    return (
      <div className="landing-page-container" id="home-section">
        <img
          src={require("../../assets/img/astronaut.png")}
          alt=""
          className="astronaut"
        />
        <div className="landing-page-main">
          <div className="parallax-container">
            <div style={{ background: `url(${img1})` }}></div>
            <div style={{ background: `url(${img2})` }}></div>
            <div style={{ background: `url(${img3})` }}></div>
            <div style={{ background: `url(${img4})` }}></div>
            <div style={{ background: `url(${img5})` }} id="top-circle"></div>
            <div style={{ background: `url(${img6})` }}></div>
          </div>
        </div>

        <div className="page-header header-filter bg">
          <Container>
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0 content-center brand" lg="5">
                <h1 className="text-white font-weight-light h1-seo ">
                  Celesta 2020
                </h1>
                <p className="text-white mt-4">
                  Black Design comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
              </Col>
              <Col lg="6"></Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Header;
