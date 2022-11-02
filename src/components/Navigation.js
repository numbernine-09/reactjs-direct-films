import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container className="cont-nav">
          <Navbar.Brand>Rangga Directory Film</Navbar.Brand>
          <Nav>
            <Nav.Link>Search</Nav.Link>
            <Nav.Link>Trending</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
