import React, { Component } from "react";
import {
  Table,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { xmlData } from "../../mockdata/mock";
import deleteButton from "../../assets/images/cross.png";
import edit from "../../assets/images/pencil.png";
import "./xmlDetails.css";
import Print from "../Common/Print";

export class xmlDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      colName: "",
      colNum: 0,
      dataType: ""
    };
  }
  toggle = () => {
    this.resetValues();
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  addRow = () => {
    xmlData.push({
      ColumnNumber: this.state.colNum,
      ColumnName: this.state.colName,
      DataType: this.state.dataType
    });
    this.toggle();
  };
  resetValues = () => {
    this.setState({
      colName: "",
      dataType: ""
    });
  };
  renderXmlData = () => {
    return xmlData.map(item => {
      return (
        <tr className="mainRow">
        <th scope="row">
          <img
              src={edit}
              id="viewImage"
              className="edit"
              alt="edit"
              onClick={() => {
                console.log("edit");
              }}
            />     
          </th>
          <td>{item.ColumnNumber}</td>
          <td>{item.ColumnName}</td>
          <td>{item.DataType}</td>
          <td>
              <img
              src={deleteButton}
              id="viewImage"
              className="edit"
              alt="delete"
              onClick={() => {
                console.log("delete");
              }}
            />
            
          </td>
        </tr>
      );
    });
  };

  addColName = e => {
    this.setState({ colName: e.target.value });
  };
  addColNum = e => {
    this.setState({ colNum: e.target.value });
  };
  addDataType = e => {
    this.setState({ dataType: e.target.value });
  };

  render() {
    return (
      <div>
      <div id="invisible">
      <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/xml">Configure XML</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/xmlDetails/id">XML file</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <Print onShow={true} styleValue={true}/></div>
        <div className="tablecontainer" id="xmlTable" >
          <Table bordered hover >
            <thead>
              <tr className="mainRow">
                <th>Edit</th>
                <th>Column Number</th>
                <th>Column Name</th>
                <th>Data Type</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderXmlData()}</tbody>
          </Table>
        </div>
        <Button id="invisible" className="addButton" color="primary" onClick={this.toggle}>
          Add
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a Condition</ModalHeader>
          <ModalBody>
            <Form>
              <div>
                <FormGroup className="formfield" row>
                  <Label for="colName" className="labelfield" sm={3}>
                    Column Name
                  </Label>{" "}
                  <Label sm={0.5}>:</Label>
                  <Col md={3} lg={5} sm={6}>
                    <Input
                      className="modalfield"
                      type="text"
                      name="colName"
                      id="colName"
                      value={this.state.colName}
                      onChange={this.addColName}
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="formfield" row>
                  <Label for="colNum" className="labelfield" sm={3}>
                    Column Name
                  </Label>{" "}
                  <Label sm={0.5}>:</Label>
                  <Col md={3} lg={5} sm={6}>
                    <Input
                      className="modalfield"
                      type="number"
                      name="colNum"
                      id="colNum"
                      value={this.state.colNum}
                      onChange={this.addColNum}
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="formfield" row>
                  <Label for="dataType" className="labelfield" sm={3}>
                    Data Type
                  </Label>{" "}
                  <Label sm={0.5}>:</Label>
                  <Col md={3} lg={5} sm={6}>
                    <Input
                      className="modalfield"
                      type="text"
                      name="dataType"
                      id="dataType"
                      value={this.state.dataType}
                      onChange={this.addDataType}
                    />
                  </Col>
                </FormGroup>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addRow}>
              Add condition
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default xmlDetails;
