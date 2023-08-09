import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import { Product as ProductType } from "../constants/products";

interface Props {
  addProduct: Dispatch<SetStateAction<ProductType[]>>;
  products: ProductType[];
}

const Product: FC<Props> = ({ addProduct, products }) => {
  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((prev) => prev.id !== id);

    addProduct(updatedProducts);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Products</h2>
          <Card>
            <Card.Body>
              <Table size="sm" className="table table-borderless">
                <thead>
                  <tr className="border ">
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {products &&
                  products.map((product) => {
                    return (
                      <tbody key={product.id}>
                        <tr>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>{product.quantity}</td>
                          <td>
                            {/* <UpdateProducts
                            productId={products.id}
                            productPrice={products.price}
                            productQuantity={products.quantity}
                          /> */}
                            <Button
                              className="m-2"
                              onClick={() => {
                                handleDelete(product.id);
                              }}
                              variant="danger"
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </Table>
              <AddProduct addProduct={addProduct} />
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
