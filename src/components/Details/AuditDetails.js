import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

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
                Details</div>
        )
    }
}

export default AuditDetails;