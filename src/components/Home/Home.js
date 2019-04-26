import React, { Component } from "react";
import "./Home.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap";
import { ProgressData } from "../../mockdata/mock";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replinePath: "/repline folder/Repline_file",
      dropdownOpen: false,
      version: "version 1"
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log("data load");
  }

  renderProgressBar = () => {
    return this.props.auditData.map(item => {
      if (item.status === "InProgress") {
        return ProgressData.map(item => {
          return (
            <div
              className={`progressbar ${
                item.status
              } col-md-3 col-lg-2 col-sm-10`}
            >
              {item.validate}
            </div>
          );
        });
      }
      return null;
    });
  };
  ValidateButton = () => {
    let value = false;
    this.props.auditData.filter(item => {
      if (item.status === "InProgress") {
        value = true;
      }
    });

    return value;
  };
  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  onChange = e => {
    console.log(e.target.value);
  };

  render() {
    let validation = this.ValidateButton();
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Radar Rates Load</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="bar">{this.renderProgressBar()}</div>
        <Jumbotron>
          <Form onSubmit={this.onSubmit}>
            <div>
              <FormGroup row>
                <Label for="replinetext" sm={1}>
                  Radar Rates File
                </Label>
                <Col md={3} lg={3} sm={6}>
                  <Input
                    className="replineInput"
                    type="text"
                    name="repline"
                    id="replinetext"
                    defaultValue={this.state.replinePath}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="config" sm={1}>
                  Configuration File
                </Label>
                <Col md={3} lg={1} sm={6}>
                  <Input
                    className="config"
                    type="select"
                    name="select"
                    id="config"
                  >
                    <option>Version 1</option>
                    <option>Version2</option>
                    <option>Version 3</option>
                    <option>Version 4</option>
                    <option>Version5</option>
                  </Input>
                </Col>
              </FormGroup>
            </div>

            <Button
              onClick={this.onSubmit}
              disabled={validation}
              className="loadButton"
              color={validation ? "secondary" : "primary"}
            >
              Data Load
            </Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
