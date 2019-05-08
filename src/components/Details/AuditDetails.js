import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Table,
  Input,
  Form,
  FormGroup,
  Label,
  Col
} from "reactstrap";
import "./AuditDetails.css";
import "../../containers/Dashboard.css";
import Print from "../Common/Print";

class AuditDetails extends Component {
  componentDidMount() {
    console.log("called");
  }

  render() {
    return (
      <div>
        <Breadcrumb id="invisible">
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
        <div id="invisible">
          <Form>
            <div>
              <FormGroup className="formfield" row>
                <Label for="versionid" className="labelfield" sm={2}>
                  Reploan Version ID
                </Label>{" "}
                <Label sm={0.5}>:</Label>
                <Col md={3} lg={3} sm={6}>
                  <Input
                    className="inputfield"
                    type="text"
                    name="reploanId"
                    id="versionid"
                    value="TestVersion1"
                    disabled
                  />
                </Col>
              </FormGroup>
              <FormGroup className="formfield" row>
                <Label className="labelfield" for="status" sm={2}>
                  Status
                </Label>
                <Label sm={0.5}>:</Label>
                <Col md={3} lg={3} sm={6}>
                  <Input
                    className="inputfield"
                    type="text"
                    name="status"
                    id="status"
                    disabled
                    value="InProgress"
                  />
                </Col>
              </FormGroup>
              <FormGroup className="formfield" row>
                <Label className="labelfield" for="config" sm={2}>
                  Configuration File
                </Label>
                <Label sm={0.5}>:</Label>
                <Col md={3} lg={3} sm={6}>
                  <Input
                    className="inputfield"
                    type="text"
                    name="config"
                    id="config"
                    value="Version1"
                    disabled
                  />
                </Col>
              </FormGroup>
              <FormGroup className="formfield" row>
                <Label className="labelfield" for="startTime" sm={2}>
                  Start Time
                </Label>
                <Label sm={0.5}>:</Label>
                <Col md={3} lg={3} sm={6}>
                  <Input
                    className="inputfield"
                    type="text"
                    name="startTime"
                    id="startTime"
                    value="2019-04-04T00:55:03.330+0000"
                    disabled
                  />
                </Col>
              </FormGroup>
              <FormGroup className="formfield" row>
                <Label className="labelfield" for="endTime" sm={2}>
                  End Time
                </Label>
                <Label sm={0.5}>:</Label>
                <Col md={3} lg={3} sm={6}>
                  <Input
                    className="inputfield"
                    type="text"
                    name="endTime"
                    id="endTime"
                    value="Null"
                    disabled
                  />
                </Col>
              </FormGroup>
              <FormGroup className="formfield" row>
                <Label className="labelfield" for="user" sm={2}>
                  Loaded By
                </Label>
                <Label sm={0.5}>:</Label>
                <Col md={3} lg={3} sm={6}>
                  <Input
                    className="inputfield"
                    type="text"
                    name="user"
                    id="user"
                    value="User 1"
                    disabled
                  />
                </Col>
              </FormGroup>
              <FormGroup className="formfield" row>
                <Label className="labelfield" for="time" sm={2}>
                  Loaded Time
                </Label>
                <Label sm={0.5}>:</Label>
                <Col md={3} lg={3} sm={6}>
                  <Input
                    className="inputfield"
                    type="text"
                    name="time"
                    id="time"
                    value="2019-04-04T00:55:03.330+0000"
                    disabled
                  />
                </Col>
              </FormGroup>
            </div>
          </Form>
        </div>
        <div id="invisible" ><Print  onShow={true} /></div>
        <Table id="auditTable" bordered hover >
          <thead className="headcontainer">
            <tr className="rowHead">
              <th>Status Details ID</th>
              <th>Status Description</th>
              <th>Loaded By</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody className="bodycontainer">
            <tr>
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
              <td>12:00 min</td>
            </tr>
            <tr>
              <td>2</td>
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
              <td>13:00 min</td>
            </tr>
            <tr>
              <td>3</td>
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
              <td>9:00 min</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AuditDetails;
