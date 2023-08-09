import { FC, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

interface Props {}

const NavBar: FC<Props> = ({}) => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const currentuser: undefined | { email: string } = {
    email: "",
  };

  function handleLogout() {
    try {
      setloading(true);
      // await logout();
      navigate("/");
    } catch {
      alert("cannot logout");
    }
    setloading(false);
  }
  return (
    <>
      <div>
        <Navbar expand="md" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="d-flex gap-3 align-items-center">
              {currentuser && <p className="m-2"> {currentuser.email}</p>}
              <div>
                <Link to="/" className="link">
                  Home
                </Link>
              </div>
              <Link to="invoice" className="link">
                invoice
              </Link>
              <Link to="customer " className="link">
                customer
              </Link>
              <Link to="product" className="link">
                product
              </Link>
              <Button value="link" disabled={loading} onClick={handleLogout}>
                Log out
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
