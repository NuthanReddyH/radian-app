import React, { Component } from 'react';
import './Home.css';
import { Breadcrumb, BreadcrumbItem, Jumbotron, Button,Form, FormGroup, Label, Input, Col} from 'reactstrap';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        replinePath: '/repline folder/Repline_file',
        bulkPath: '/repline folder/bulk_test_file'
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    
  }
  
  render() {
    return (
      <div>
          <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem >Repline</BreadcrumbItem>
      </Breadcrumb>

      <Jumbotron>
      <Form onSubmit={this.onSubmit}>
      <FormGroup row>
          <Label for="replinetext" sm={1}>Repline File</Label>
          <Col sm={10}>
            <Input className="replineInput" type="text" name="repline" id="replinetext" defaultValue={this.state.replinePath} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bulktext" sm={1}>Bulk Test File</Label>
          <Col sm={10}>
            <Input className="replineInput" type="text" name="bulk" id="bulktext" defaultValue={this.state.bulkPath}/>
          </Col>
        </FormGroup>
        <Button onClick={this.onSubmit}className="loadButton" color="primary">Load</Button>
        <Button  className="cancelButton" color="primary">Cancel</Button>
        </Form>
    
      </Jumbotron>
      
    </div>
    );
  }
}
export default Home;


