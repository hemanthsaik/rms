import {
  ChangeEvent,
  Dispatch,
  EventHandler,
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
import { Product } from "../constants/products";

const initialState = {
  id: 1,
  name: "",
  price: 0,
  quantity: 0,
};

interface Props {
  addProduct: Dispatch<SetStateAction<Product[]>>;
}

const AddProduct: FC<Props> = ({ addProduct }) => {
  const [state, setState] = useState<Product>(initialState);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const handleModelToggle = () => {
    setShow((show) => !show);
  };
  const { name, price, quantity } = state;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addProduct((prev) => [...prev, state]);
    setState(initialState);
    handleModelToggle();
  };
  const handleInputchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setState((prv) => ({
      ...prv,
      [name]: value,
    }));
  };
  return (
    <>
      <Button variant="primary" onClick={handleModelToggle}>
        Add Product
      </Button>
      <Modal
        show={show}
        onHide={handleModelToggle}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
          {error && (
            <Alert variant="danger" className="m-1">
              {error}
            </Alert>
          )}
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleInputchange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Product Name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={price}
                  onChange={handleInputchange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid price.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleInputchange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Quantity.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModelToggle}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;
