import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Table,
  Input,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import "./AuditDetails.css";

class AuditDetails extends Component {
  componentDidMount() {
    console.log("called");
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Radar Rates</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/details/id">Details</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <ListGroup className="list">
          <ListGroupItem color="success">
            Reploan Version ID: TestVersion1
          </ListGroupItem>
          <ListGroupItem color="success">
            Transaction Stage: Header validation
          </ListGroupItem>
        </ListGroup>
        <Table bordered hover>
          <thead className="headcontainer">
            <tr className="rowHead">
              <th>Status Details ID</th>
              <th>Audit ID</th>
              <th>Status Description</th>
              <th>Updated By</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody className="bodycontainer">
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <Input
                  type="textarea"
                  className="area"
                  value="Header validation completed"
                />
              </td>
              <td>Testuser1</td>
              <td>2019-04-04T00:55:03.330+0000</td>
              <td>NULL</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1</td>
              <td>
                <Input
                  type="textarea"
                  className="area"
                  value="Header validation completed"
                />
              </td>
              <td>Test user 4</td>
              <td>2019-04-04T00:55:03.330+0000</td>
              <td>NULL</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1</td>
              <td>
                <Input
                  type="textarea"
                  className="area"
                  value="Header validation completed"
                />
              </td>
              <td>Test user 3</td>
              <td>2019-04-04T00:55:03.330+0000</td>
              <td>NULL</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AuditDetails;
