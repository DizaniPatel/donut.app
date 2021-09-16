import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer1 from "./footer1.svg";
import footer2 from "./footer2.svg";
import footer3 from "./footer3.svg";
import footer4 from "./footer4.svg";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <Container className="padding">
        <Row>
          <footer data-v-d9174172="" id="footer">
            <Row>
              <Col>
                <div data-v-d9174172="" class="footer-grid">
                  <div data-v-d9174172="" class="footer-left">
                    <div
                      data-v-d9174172=""
                      id="footer-logo"
                      class="flex pointer"
                    >
                      <img alt="" src={footer1}></img>
                    </div>
                    <br />
                    <p data-v-d9174172="" class="head Madewith">
                      Made with 🍩 in LA &amp; Berlin
                    </p>
                    <br />
                    <p data-v-d9174172="" class="head">
                      ©Donut, Inc 2021
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div data-v-d9174172="" class="footer-right flex">
                  <div data-v-d9174172="">
                    <span data-v-d9174172="" class="p4 bold almostblack">
                      DONUT
                    </span>
                    <ul data-v-d9174172="">
                      <li data-v-d9174172="">
                        <a
                          data-v-d9174172=""
                          href="/"
                          aria-current="page"
                          class="footer-link fancy-link greyish nuxt-link-exact-active nuxt-link-active link undefined"
                          data-style="Default"
                          title="Home"
                        >
                          Home
                        </a>
                      </li>
                      <li data-v-d9174172="" text-align="none">
                        <a
                          data-v-d9174172=""
                          href=" "
                          class="footer-link fancy-link greyish link undefined"
                          data-style="Default"
                          title="How it works"
                        >
                          How it works
                        </a>
                      </li>
                      <li data-v-d9174172="">
                        <a
                          data-v-d9174172=""
                          href=" "
                          class="footer-link fancy-link greyish link undefined"
                          target="_blank"
                          title="DeFi 101"
                        >
                          DeFi 101
                        </a>
                      </li>
                      <br />
                      <li data-v-d9174172="">
                        <a
                          data-v-d9174172=""
                          href=" "
                          class="footer-link fancy-link greyish link undefined"
                          target="_blank"
                          title="About"
                        >
                          About
                        </a>
                      </li>
                      <li data-v-d9174172="">
                        <a
                          data-v-d9174172=""
                          href=" "
                          title="Careers"
                          target="_blank"
                          class="footer-link fancy-link greyish link undefined"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col>
                <div data-v-d9174172="">
                  <span data-v-d9174172="" class="p4 bold almostblack">
                    DOCS
                  </span>
                  <ul data-v-d9174172="">
                    <li data-v-d9174172="">
                      <a
                        data-v-d9174172=""
                        data-style="Default"
                        href=" "
                        title="Help"
                        class="footer-link fancy-link greyish link undefined"
                      >
                        Help
                      </a>
                    </li>
                    <li data-v-d9174172="">
                      <a
                        data-v-d9174172=""
                        href="/terms"
                        class="footer-link fancy-link greyish link undefined"
                        data-style="Default"
                        title="Terms"
                      >
                        Terms
                      </a>
                    </li>
                    <li data-v-d9174172="">
                      <a
                        data-v-d9174172=""
                        href="/privacy"
                        class="footer-link fancy-link greyish link undefined"
                        data-style="Default"
                        title="Privacy Policy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div data-v-d9174172="">
                  <span data-v-d9174172="" class="p4 bold almostblack">
                    SOCIALS
                  </span>

                  <ul data-v-d9174172="" class="flex socials">
                    <li>
                      <a
                        href=" "
                        title="Link to our Twitter page"
                        class="flex flex-aic greyish"
                      >
                        <img alt="" src={footer2}></img>

                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=" "
                        title="Link to our Instagram page"
                        target="_blank"
                        class="flex flex-aic greyish"
                      >
                        <img alt="" src={footer3}></img>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=" "
                        title="Link to our LinkedIn page"
                        class="flex flex-aic greyish"
                      >
                        <img alt="" src={footer4}></img>
                        <span>LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <div data-v-d9174172="" class="wrap footer-notice-wrap">
                <div
                  data-v-a42b9506=""
                  data-v-d9174172=""
                  class="vue-simple-markdown markdown-body p2 footer-notice"
                >
                  Digital currency is not legal tender, is not backed by any
                  federal government and Donut accounts are not FDIC insured.
                  While Donut and its custodial partners make every effort to
                  keep your money safe and covered, please note that any
                  investment entails risk. The interest rates featured on this
                  page vary according to the dynamics of digital currency
                  markets and are subject to change at any time.
                </div>
              </div>
            </Row>
          </footer>
        </Row>
      </Container>
    );
  }
}

export default Footer;
