import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import AddCustomer from "../components/AddCustomer";
import { Customer as CustomerType, customer } from "../constants/customer";

interface Props {
  setUsers: Dispatch<SetStateAction<CustomerType[]>>;
  users: CustomerType[];
}

const Customer: FC<Props> = ({ setUsers, users }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Coustomer</h2>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>email</th>
                <th>contact</th>
              </tr>
            </thead>
            {users.map(({ id, name, email, contact }) => {
              return (
                <tbody key={id}>
                  <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{contact}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
          <AddCustomer setUsers={setUsers} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Customer;
