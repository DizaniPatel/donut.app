import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./header2.css";
import available from "./available.svg";

class Header2 extends Component {
  render() {
    return (
      <Container className="header2">
        <Row>
          <Col>
            <Row>
              <h1 className="h1"> Say goodbye to idle money </h1>
              <div className="font">
                Earn up to 10% yield with DeFi-powered saving.
              </div>
              <div>
                <button type="button" class="btn btn-dark">
                  Get Started
                </button>
              </div>
            </Row>
            <Row>
              <div>
                <img
                  alt=""
                  src={available}
                  className="d-inline-block align-top"
                />
              </div>
            </Row>
          </Col>

          <Col xs={6}>
            <Row>
              <img
                src="//images.ctfassets.net/ntciwo0i7u0f/3b4hNkLwvhX1THpHk5RwlD/240ee0db4eb824542fc15c3484e31bc9/home_hero_desktop.png?q=80&amp;fm=webp"
                alt="null"
              />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header2;
