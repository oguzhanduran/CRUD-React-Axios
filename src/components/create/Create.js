import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const sendDataToAPI = () => {
    axios
      .post(`https://61c458fef1af4a0017d994c8.mockapi.io/Crud`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="fname"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>
        <Button color="blue" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Form>

      <Link to="/read">
        <Button style={{ marginTop: "20px" }}>Users Page</Button>
      </Link>
    </div>
  );
};

export default Create;
