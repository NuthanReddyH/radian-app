import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Table} from 'reactstrap';

class AuditDetails extends Component {
    componentDidMount() {
        console.log("called");
    }

    render() {
        return (

            <div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/">Radar Rates</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/details/id">Details</a></BreadcrumbItem>
                </Breadcrumb>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Status</th>
                            <th>Updated By</th>
                            <th>Updated Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Header validation completed</td>
                            <td>Testuser1</td>
                            <td>2019-04-04T00:55:03.330+0000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Header validation completed</td>
                            <td>Test user 4</td>
                            <td>2019-04-04T00:55:03.330+0000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Header validation completed</td>
                            <td>Test user 3</td>
                            <td>2019-04-04T00:55:03.330+0000</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default AuditDetails;