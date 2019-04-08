import React, { Component } from 'react';
import './Home.css';
import { Breadcrumb, BreadcrumbItem, Jumbotron, Button,Form, FormGroup, Label, Input} from 'reactstrap';


class Home extends Component {
  
  render() {
    return (
      <div>
          <Breadcrumb className="breadcrumbStyle">
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Repline</BreadcrumbItem>
      </Breadcrumb>

      <Jumbotron>
      <Form>
        <FormGroup>
          <Label for="repline">Repline File</Label>
          <Input className="replineInput" type="text" name="repline" id="repline" value="/repline folder/Repline_file" />
        </FormGroup>
        <FormGroup>
          <Label for="Bulk">Bulk Test File</Label>
          <Input className="replineInput" type="text" name="bulk" id="Bulk" value="/repline folder/bulk_test_file" />
        </FormGroup>
        <Button className="loadButton" color="primary">Load</Button>
        <Button  className="cancelButton" color="primary">Cancel</Button>
        </Form>
    
      </Jumbotron>
      
    </div>
    );
  }
}
export default Home;


