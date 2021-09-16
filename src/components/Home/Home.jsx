import React, { Component } from "react";
import Header from "../Header/header";
import Card from "react-bootstrap/Card";
import Header2 from "../Header/header2";
import { Container, Row } from "react-bootstrap";
import "./home.css";
import Body from "../Body/body";
import Body2 from "../Body/body2";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className="Mainbody">
        <Container fluid>
          <Row>
            <Card className="home">
              <Card.Body>
                <Card.Title>
                  <Header />
                </Card.Title>
                <Header2 />
              </Card.Body>
            </Card>
            <Body />
            <Body2 />
            <Footer />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
