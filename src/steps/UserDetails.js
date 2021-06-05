import React from "react";
import { Form } from "react-bootstrap";

const UserDetails = ({ values, handleChange }) => {
  console.log(values, handleChange);
  return (
    <div>
      <Form className="mt-5">
        <h4>Enter your Details</h4>

        <Form.Group className="mt-5">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            defaultValue={values.firstName}
            onChange={handleChange("firstName")}
            type="text"
            placeholder="First Name"
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            defaultValue={values.lastName}
            onChange={handleChange("lastName")}
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Form.Label>Email</Form.Label>
          <Form.Control
            defaultValue={values.email}
            onChange={handleChange("email")}
            type="email"
            placeholder="email"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserDetails;
