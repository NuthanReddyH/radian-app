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
import "../../containers/Dashboard.css";
import excel from "../../assets/images/excel.png";
import print from "../../assets/images/printer.png";

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
            <a href="/">Radar Rates Load</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/details/id">Load Details</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <ListGroup className="list">
          <ListGroupItem color="success" >
            Reploan Version ID: TestVersion1
          </ListGroupItem>
          <ListGroupItem color="success">
           Status: InProgress
          </ListGroupItem>
          <ListGroupItem color="success">
           Configuration File: Version 1
          </ListGroupItem>
          <ListGroupItem color="success">
          Start Time: 2019-04-04T00:55:03.330+0000
          </ListGroupItem>
          <ListGroupItem color="success">
          End Time: Null
          </ListGroupItem>
          <ListGroupItem color="success">
            Loaded By: TestUser
          </ListGroupItem>
          <ListGroupItem color="success">
            Loaded Time: 2019-04-04T00:55:03.330+0000
          </ListGroupItem>
        </ListGroup>
        <div>
          <img src={excel} className="excel" alt="excel" />
          <img src={print} className="excel" alt="print" />
        </div>
        <Table bordered hover>
          <thead className="headcontainer">
            <tr className="rowHead">
              <th>Status Details ID</th>
              <th>Audit ID</th>
              <th>Status Description</th>
              <th>Loaded By</th>
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
                  disabled
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
                  disabled
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
                  disabled
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
