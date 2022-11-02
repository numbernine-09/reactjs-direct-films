import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">TANPA DIPUNGUT BIAYA</div>
            <div className="title">FROM CUY UNIVERSE</div>
            <div className="introButton mt-5 text-center">
              <Button variant="dark" href="#search" className="btn-intro">
                SCROLL DOWN
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
