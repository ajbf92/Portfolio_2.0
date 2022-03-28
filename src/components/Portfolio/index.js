import React from "react";
import { Container, Card, CardGroup, Button, Row, Col } from "react-bootstrap";
import bootstrap from "bootstrap";
import runBuddy from "../../images/run-buddy.png";
import robotGladiator from "../../images/robot-gladiator.png";
import passwordGenerator from "../../images/password-generator.png";
import workdayScheduler from "../../images/schedule-banner.jpeg";
import weatherDashboard from "../../images/weather-banner.jpeg";
import concierge from "../../images/concierge-banner.jpg";
import NGF from "../../images/NGF.png";

function Portfolio() {
  return (
    <div>
      <Container
        className="d-flex flex-wrap justify-content-center"
        style={{ marginTop: "3rem" }}
        fluid
      >
        <Row className="px-1 my-1 p-1">
          <Col className="col-12 " key={"run-buddy"}>
            <Card className="" style={{ width: "auto", marginBottom: "1rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="">
                  <h1>Run Buddy</h1>
                </Card.Title>
                <Card.Img variant="top" src={runBuddy}></Card.Img>
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <a
                    href="https://ajbf92.github.io/run-buddy/"
                    style={{ color: "white" }}
                  >
                    Click here for deployed application
                  </a>
                </Card.Text>

                <Button
                  onClick={() => {
                    window.location.href =
                      "https://github.com/ajbf92/run-buddy";
                  }}
                  variant="primary"
                >
                  Click Here for Github Repository
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        className="d-flex  justify-content-center"
        style={{ marginTop: "1rem" }}
        fluid
      >
        <Row className="px-1 my-1 p-1 flex-wrap ">
          <Col
            className="col-6 card__space card-spacing"
            key={"robot-gladiator"}
          >
            <Card className="" style={{ width: "auto", marginBottom: "1rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="">
                  <h1>Robot Gladiator</h1>
                </Card.Title>
                <Card.Img variant="top" src={robotGladiator}></Card.Img>
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <a
                    href="https://ajbf92.github.io/robot-gladiators/"
                    style={{ color: "white" }}
                  >
                    Click here for deployed application
                  </a>
                </Card.Text>

                <Button
                  onClick={() => {
                    window.location.href =
                      "https://github.com/ajbf92/robot-gladiators";
                  }}
                  variant="primary"
                >
                  Click Here for Github Repository
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className="col-6 card__space card-spacing"
            key={"password-generator"}
          >
            <Card className="" style={{ width: "auto", marginBottom: "1rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="">
                  <h1>Password Generator</h1>
                </Card.Title>
                <Card.Img variant="top" src={passwordGenerator}></Card.Img>
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <a
                    href="https://ajbf92.github.io/password-generator/"
                    style={{ color: "white" }}
                  >
                    Click here for deployed application
                  </a>
                </Card.Text>

                <Button
                  onClick={() => {
                    window.location.href =
                      "https://github.com/ajbf92/password-generator";
                  }}
                  variant="primary"
                >
                  Click Here for Github Repository
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className="col-6 card__space card-spacing"
            key={"workday-scheduler"}
          >
            <Card className="" style={{ width: "auto", marginBottom: "1rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="">
                  <h1>Workday Scheduler</h1>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={workdayScheduler}
                  style={{ width: "100%", maxheight: "21rem" }}
                ></Card.Img>
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <a
                    href="https://ajbf92.github.io/work-day-scheduler/"
                    style={{ color: "white" }}
                  >
                    Click here for deployed application
                  </a>
                </Card.Text>

                <Button
                  onClick={() => {
                    window.location.href =
                      "https://github.com/ajbf92/work-day-scheduler";
                  }}
                  variant="primary"
                >
                  Click Here for Github Repository
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col
            className="col-6 card__space card-spacing"
            key={"weather-dashboard"}
          >
            <Card className="" style={{ width: "auto", marginBottom: "1rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="">
                  <h1>Weather Dashboard</h1>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={weatherDashboard}
                  style={{ width: "100%", maxheight: "21rem" }}
                ></Card.Img>
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <a
                    href="https://ajbf92.github.io/weather-dashboard/"
                    style={{ color: "white" }}
                  >
                    Click here for deployed application
                  </a>
                </Card.Text>

                <Button
                  onClick={() => {
                    window.location.href =
                      "https://github.com/ajbf92/weather-dashboard";
                  }}
                  variant="primary"
                >
                  Click Here for Github Repository
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-6 card__space card-spacing" key={"concierge"}>
            <Card className="" style={{ width: "auto", marginBottom: "1rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="">
                  <h1>Front-End App Project: Concierge</h1>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={concierge}
                  style={{ width: "100%", maxheight: "21rem" }}
                ></Card.Img>
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <a
                    href="https://ellacodes2021.github.io/Team-Indecisive-IDK/"
                    style={{ color: "white" }}
                  >
                    Click here for deployed application
                  </a>
                </Card.Text>

                <Button
                  onClick={() => {
                    window.location.href =
                      "https://github.com/ajbf92/Team-Indecisive-IDK";
                  }}
                  variant="primary"
                >
                  Click Here for Github Repository
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-6 card__space card-spacing" key={"NGF"}>
            <Card className="" style={{ width: "auto", marginBottom: "1rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="">
                  <h1>Fullstack Project: No Gear Fitness</h1>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={NGF}
                  style={{ width: "100%", maxheight: "21rem" }}
                ></Card.Img>
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <a
                    href="https://no-gear-fitness.herokuapp.com/"
                    style={{ color: "white" }}
                  >
                    Click here for deployed application
                  </a>
                </Card.Text>

                <Button
                  onClick={() => {
                    window.location.href =
                      "https://github.com/ajbf92/workout-app";
                  }}
                  variant="primary"
                >
                  Click Here for Github Repository
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
