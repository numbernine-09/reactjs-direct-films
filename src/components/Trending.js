import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/image/trending/dune.jpg";
import everything from "../assets/image/trending/everything.jpg";
import infinite from "../assets/image/trending/infinite.jpg";
import joker from "../assets/image/trending/joker.jpg";
import lighyear from "../assets/image/trending/lightyear.jpg";
import morbius from "../assets/image/trending/morbius.jpg";
import blackadam from "../assets/image/trending/blackadam.jpg";
import blackpanther from "../assets/image/trending/blackpanther.jpg";
import avatar2 from "../assets/image/trending/avatar2.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={everything} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infinite} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={joker} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={lighyear} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbius} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={blackadam} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={blackpanther} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avatar2} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
