import { Container, Row, Col } from "react-bootstrap";

const TrendingText = () => {
  return (
    <div>
      <Container className="text-white text-center d-flex justify-content-start align-items-start">
        <Row>
          <Col>
            <div className="text-trending">Trending Movie in 2022</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrendingText;
