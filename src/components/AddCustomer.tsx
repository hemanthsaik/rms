import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import {
  Alert,
  Button,
  Form,
  Modal,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { Customer } from "../constants/customer";
const initialState = {
  name: "",
  email: "",
  contact: "",
  currentstate: "",
  city: "",
  zip: "",
};

interface Props {
  setUsers: Dispatch<SetStateAction<Customer[]>>;
}

const AddCustomer: FC<Props> = ({ setUsers }) => {
  const [state, setState] = useState<Customer>(initialState);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleModelToggle = () => {
    setShow((show) => !show);
  };

  const { name, email, contact, currentstate, city, zip } = state;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { contact, name, email } = state;
    if (contact.trim() === "" || name.trim() === "" || email.trim() === "") {
      setError("Enter  input with *");
    } else {
      setUsers((prev) => [...prev, state]);
      handleClose();
    }
  };
  const handleInputchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState((prv) => ({ ...prv, [name]: value }));
  };
  const handleClose = () => {
    setState(initialState);
    setError("");
    handleModelToggle();
  };

  return (
    <>
      <Button variant="primary" onClick={handleModelToggle}>
        Add Customer
      </Button>
      <Modal
        show={show}
        onHide={handleModelToggle}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form noValidate onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Coustomer Details</Modal.Title>
          </Modal.Header>
          {error && (
            <Alert variant="danger" className="m-1">
              {error}
            </Alert>
          )}
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Contact No *</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="mobile no"
                    aria-describedby="inputGroupPrepend"
                    name="contact"
                    value={contact}
                    onChange={handleInputchange}
                    required
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleInputchange}
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Email Id *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleInputchange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={handleInputchange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="currentstate"
                  value={currentstate}
                  onChange={handleInputchange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={zip}
                  onChange={handleInputchange}
                  required
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="button" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddCustomer;
