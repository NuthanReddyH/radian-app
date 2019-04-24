import React, {Component} from 'react';
import './Home.css';
import {Breadcrumb, BreadcrumbItem, Jumbotron, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import {ProgressData} from '../../mockdata/mock'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replinePath: '/repline folder/Repline_file',
            bulkPath: '/repline folder/bulk_test_file'
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        console.log("data load");
    }

    onRemove = () => {
        console.log("bul load");
    };
    renderProgressBar = () => {
        return this.props.auditData.map((item) => {
            if (item.status === "InProgress") {
                return ProgressData.map((item) => {
                    return (
                        <div className={`progressbar ${item.status} col-md-3 col-lg-2 col-sm-10`}>{item.validate}</div>
                    )
                })
            }
            return null;
        });
    };

    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/">Radar Rates</a></BreadcrumbItem>
                </Breadcrumb>
                <div className="bar">{this.renderProgressBar()}</div>
                <Jumbotron>
                    <Form onSubmit={this.onSubmit}>
                    <div>                        <FormGroup row>
                            <Label for="replinetext" sm={1}>Repline File</Label>
                            <Col md={3} lg={3} sm={6}>
                                <Input className="replineInput" type="text" name="repline" id="replinetext"
                                       defaultValue={this.state.replinePath}/>
                            </Col>
                        </FormGroup>
                        </div>

                        <Button onClick={this.onSubmit} className="loadButton" color="primary">Data Load</Button>
                    </Form>

                </Jumbotron>

            </div>
        );
    }
}

export default Home;


