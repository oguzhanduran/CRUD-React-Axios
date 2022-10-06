import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setId] = useState(null);

  const navigate = useNavigate();

  const sendDataToAPI = () => {
    axios
      .put(`https://61c458fef1af4a0017d994c8.mockapi.io/Crud/${ID}`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName")); //Props ile göndermek zor olduğu için local storage'ı kullandık.
    setLastName(localStorage.getItem("lastName"));
    setId(localStorage.getItem("ID"));
  }, []);

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>
        <Button color="green" onClick={sendDataToAPI}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Update;
