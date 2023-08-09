import { FC, useState } from "react";
import { Card, Alert, Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

interface Props {}

const Signup: FC<Props> = ({}) => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confPassword: "",
  });

  const handleSubmit = () => {};
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center  mt-5">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <div id="main">
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Signup</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={formData.email}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={formData.password}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={formData.confPassword}
                      required
                    />
                  </Form.Group>
                </Form>
                <Button className="w-100 mt-2" onClick={handleSubmit}>
                  Log in
                </Button>
                <div className="w-100 text-center mt-2">
                  Already have an account! <Link to="/login">Login</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
