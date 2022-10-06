import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://61c458fef1af4a0017d994c8.mockapi.io/Crud`
    );
    const data = await response.data;
    setApiData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setId = (id, firstName, lastName) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://61c458fef1af4a0017d994c8.mockapi.io/Crud/${id}`)
      .then(() => {
        fetchData();
      });
  };
  return (
    <div>
      <Table celled style={{ margin: "10px" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button
                      onClick={() =>
                        setId(data.id, data.firstName, data.lastName)
                      }
                      color="green"
                    >
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Link to="/">
        <Button style={{ margin: "10px" }}>Sign Up</Button>
      </Link>
    </div>
  );
};

export default Read;
