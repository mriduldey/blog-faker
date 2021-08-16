import React from "react";
import { Row, Col } from "react-bootstrap";

// Local imports
import Navigate from "components/navigate/Navigate";

const NavigateContent = ({ leftLink, rightLink }) => {
  return (
    <Row>
      <Col>{leftLink && <Navigate left link={leftLink} />}</Col>
      <Col className="d-flex justify-content-end">
        {rightLink && <Navigate link={rightLink} />}
      </Col>
    </Row>
  );
};

export default NavigateContent;
