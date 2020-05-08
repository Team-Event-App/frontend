import React, { Component } from "react";
import {
  Container,
  Row,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";

class Book extends Component {
  render() {
    return (
      <div className="mt-4 mb-3">
        <Container>
          <Row>
            <Form inline className="mx-auto">
              <FormControl
                type="text"
                placeholder="Search Events"
                className="mr-sm-2 formInput"
              />
              <Button variant="outline-success" className="buttonSearch">
                <i class="fas fa-search"></i>
              </Button>
            </Form>
          </Row>

          <Table striped bordered hover className="mt-4 mb-5">
            <thead>
              <tr className="text-center">
                <th>No</th>
                <th>Title</th>
                <th>Date</th>
                <th>Price</th>
                <th>Location</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>1</td>
                <td>asd</td>
                <td>1234</td>
                <td>$5</td>
                <td>blabla</td>
                <td>.png</td>
                <td>
                  <Button variant="outline-success" className="mr-3">
                    Purchase
                  </Button>
                  <Button variant="outline-danger">Remove</Button>
                </td>
              </tr>
              <tr className="text-center">
                <td>2</td>
                <td>qwe</td>
                <td>0987</td>
                <td>$10</td>
                <td>blabla</td>
                <td>.png</td>
                <td>
                  <Button variant="outline-success" className="mr-3">
                    Purchase
                  </Button>
                  <Button variant="outline-danger">Remove</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Book;
