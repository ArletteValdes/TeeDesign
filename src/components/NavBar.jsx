import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar className="fondo">
        <Container className="justify-content-start">
          <Navbar.Brand >Tee Design</Navbar.Brand>
          <Link to="/" className="text-white ms-3 text-decoration-none">Home</Link>
          <Link to="/Plan" className="text-white ms-3 text-decoration-none">Planes</Link>
        </Container>
      </Navbar>
    </>
  );
}
