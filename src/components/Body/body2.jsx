import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./body2.css";
import star from "./star.svg";
import arrow from "./arrow.svg";

class Body2 extends Component {
  render() {
    return (
      <Container className="body2">
        <Row>
          <h3 className="label">Featured in</h3>
        </Row>
        <Row className="padding">
          <Col>
            <img
              src="//images.ctfassets.net/ntciwo0i7u0f/OeCEHTjF0y0LXElG93uJd/ea8516231db286fc5700e27a9dbec76e/Forbes.png"
              alt="Group 351"
              width="200px"
            ></img>
          </Col>
          <Col>
            <img
              src="//images.ctfassets.net/ntciwo0i7u0f/6coBs8DAn4Xzdogwonzu3K/46d5bb633eb6aeef7e7f43b678ec562f/tech_crunch.png"
              alt="Group 352"
              width="200px"
            ></img>
          </Col>
          <Col>
            <img
              src="//images.ctfassets.net/ntciwo0i7u0f/guNVxI26gEgc4Ry7m1tkE/18922c7960d551e0db6a8553ae09efe4/a16z.png"
              alt="Group 349"
              width="200px"
            ></img>
          </Col>
          <Col>
            <img
              src="//images.ctfassets.net/ntciwo0i7u0f/2BCHyFjWYNsJYn56FUfOsv/345812fcac6b5c91afc5001cecd9ca14/coindesk.png"
              alt="Group 350"
              width="200px"
            ></img>
          </Col>
        </Row>
        <Row className="quote-content">
          <p className="h1">
            <span className="quotation ">“ </span>
            My money is secure and earning above average yield.
            <span className="quotation ">”</span>
          </p>
          <Row className="row">
            <p class="p0">
              <b>cwilliams88</b>
            </p>
            <p class="p4 ">App Store review</p>
          </Row>
        </Row>
        <Row className="section-testimonials padding">
          <Col xs>
            <div class="grid-item tal">
              <p class="p2">
                "Been using this app for a month. This past Friday I was able to
                pay my rent with interest I earned!!"
              </p>
              <div>
                <div class="star-rating flex">
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                </div>
                <p class="h4 tal">DonutKing1939</p>
                <p class="p4 tal">App Store review</p>
              </div>
            </div>
          </Col>

          <Col>
            <div class="grid-item tal">
              <p class="p2">
                “Very elegant and intuitive savings app that leverages DeFi to
                capture great rates.”
              </p>
              <div>
                <div class="star-rating flex">
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                </div>
                <p class="h4 tal">Steincat</p>
                <p class="p4 tal">
                  <br />
                  App Store review
                  <p class="h4 tal">
                    <br />
                    Steincat
                  </p>
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class="grid-item tal">
              <p class="p2">
                “Customer service is the BEST. Truly an amazing savings app,
                very happy I joined!”
              </p>
              <div>
                <div class="star-rating flex">
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                  <img alt="" src={star}></img>
                </div>
                <p class="h4 tal">Doct0rvirus</p>
                <p class="p4 tal">App Store review</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="padding wrap blue" data-index="6">
            <div
              data-v-7971e5e5=""
              data-bg="#E6E8FA"
              class="card-item flex flex-aic bluebackground"
            >
              <div data-v-7971e5e5="" class="flex w100 h100">
                <div data-v-7971e5e5="" class="card-item-left">
                  <h3 data-v-7971e5e5="">Refer friends, earn more</h3>{" "}
                  <p data-v-7971e5e5="" class="p2">
                    Get +1% APY for 30 days when you refer a friend.
                  </p>
                  <a
                    data-v-7971e5e5=""
                    href=" "
                    class="link undefined linkbackground"
                    data-style="Arrowed"
                    title="Learn more"
                  >
                    Learn more<img alt="" src={arrow}></img>
                  </a>
                </div>
              </div>

              <div data-v-7971e5e5="" class="card-item-right">
                <div
                  data-v-7971e5e5=""
                  class="flex flex-col style"
                  data-sr-id="7"
                >
                  <img
                    src="//images.ctfassets.net/ntciwo0i7u0f/1y5D2jAqRMnEpMpfFKr1m7/841edf44df639735a024ae9eee28b037/refer.png?q=80&amp;fm=webp"
                    alt="null"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </Row>

        <Row className="padding">
          <div
            data-v-7971e5e5=""
            data-bg="#FFD8A9"
            class="card-item flex flex-aic orange"
          >
            <Col>
              <div data-v-7971e5e5="" class="flex w100 h100">
                <div data-v-7971e5e5="" class="card-item-left">
                  <h3 data-v-7971e5e5="">Make dough, go nuts</h3>
                  <p data-v-7971e5e5="" class="p2">
                    Join Donut and start investing in&nbsp;under 5 minutes.
                  </p>
                  <div>
                    <button type="button" class="btn btn-dark">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="paddingleft">
              <img
                src="//images.ctfassets.net/ntciwo0i7u0f/6cBx8FoqSwi7nEnyzPntGV/f54c7c5fdde5dd2e83cc9e4eb46254c0/makedough.png?q=80&amp;fm=webp"
                alt="null"
                width="300px"
              ></img>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Body2;
