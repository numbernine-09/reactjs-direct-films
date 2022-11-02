import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SearchMovie = () => {
  return (
    <div className="text-tren">
      <Container>
        <Row>
          <Col className="text-white text-center">
            <div className="title1">
              Rangga film menawarkan waktu tayang teater, rilis DVD, trailer
              film, dan beberapa informasi film lainnya. Semua ulasan Film
              dibuat oleh pengguna. Sebagai salah satu dari sepuluh aplikasi
              sosial seluler teratas, kamu dapat mengunjungi situs web seluler
              Rangga film juga di ponsel Anda (comingsoon).
            </div>
            <div className="title2">CARI MOVIE ANDA</div>
            <div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchMovie;
