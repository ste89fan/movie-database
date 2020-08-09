import React from "react";
import { Container, Row, Col } from "reactstrap";

const InfoSection = (props) => {
  return (
    <div className="infoSection">
      <h4 className="infoSectionTitle">{props.title}</h4>

      <Container>
        <Row className="infoFields">
          <Col>
            <label className="infoLabel">year : </label>
            <span>{props.year}</span>
          </Col>
        </Row>

        <Row className="infoFields">
          <Col>
            <label className="infoLabel">plot :</label>
            <p>{props.plot}</p>
          </Col>
        </Row>

        <Row className="infoFields">
          <Col>
            <label className="infoLabel">genre :</label>
            <p>{props.genre}</p>
          </Col>
        </Row>

        <Row className="infoFields">
          <Col>
            <label className="infoLabel">actors :</label>
            <p>{props.actors}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
