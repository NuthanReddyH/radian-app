import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';

class AuditDetails extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        console.log("called");
    }
    render() {
        //console.log(this.props);
        return (
            
            <div>
                <Breadcrumb>
        <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
        <BreadcrumbItem ><a href="/">Radar Rates</a></BreadcrumbItem>
        <BreadcrumbItem ><a href="/details/id">Details</a></BreadcrumbItem>
      </Breadcrumb>
      Details</div>
        )
    }
}
export default AuditDetails;