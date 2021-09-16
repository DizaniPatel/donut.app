import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./body.css";
import arrow from "./arrow.svg";

class Body extends Component {
  render() {
    return (
      <Container className="body">
        <Row>
          <div>
            <h1 className="h1">We make your money move</h1>
          </div>
        </Row>
        <Row>
          <Col>
            <Row>
              <div className="img">
                <img
                  src="//images.ctfassets.net/ntciwo0i7u0f/52ArA0DDvRyrhnbRqwK5S4/f9d2d13efdbd8042670634338c14235f/Group_1__1_.png?q=80&amp;fm=webp"
                  alt="null"
                  width="200px"
                ></img>
              </div>
            </Row>
            <Row>
              <div className="h3">
                <h3>Fast &amp; Easy</h3>
              </div>
            </Row>
            <Row>
              <div className="div">
                Connect your bank account and start saving in under 5 minutes.
              </div>
            </Row>
          </Col>

          <Col>
            <Row>
              <div className="img">
                <img
                  src="//images.ctfassets.net/ntciwo0i7u0f/2lB8PhlwGLvDld1xmNeJvj/607b99f47024b7525eb338fd439585b6/stack_of_bills_1.png?q=80&amp;fm=webp"
                  alt="null"
                  width="200px"
                ></img>
              </div>
            </Row>
            <Row>
              <div className="h3">
                <h3>High Yield</h3>
              </div>
            </Row>
            <Row>
              <div className="div">
                Get up to 10% APY through the power of decentralized finance.
              </div>
            </Row>
          </Col>
          <Col>
            <Row>
              <div className="img">
                <img
                  src="//images.ctfassets.net/ntciwo0i7u0f/6TL0KD6wiiexwBYbC6pQGy/4bc42cc308b38a7e7515d45ce7d46e27/Group_1.png?q=80&amp;fm=webp"
                  alt="null"
                  width="200px"
                ></img>
              </div>
            </Row>
            <Row>
              <div className="h3">
                <h3>Secure</h3>
              </div>
            </Row>
            <Row>
              <div className="div">
                Over $20 million safely earning interest with established
                lending partners.
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="tac">
          <div>
            <a
              href=" "
              class="link undefined tac"
              data-style="CTA - Arrow"
              title="Learn more"
            >
              Learn more<img alt="" src={arrow} className="arrow"></img>
            </a>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Body;
