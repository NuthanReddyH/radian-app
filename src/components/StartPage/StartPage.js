import React from "react";
import './StartPage.css';
import {
    Breadcrumb,
    BreadcrumbItem,
  } from "reactstrap";

class StartPage extends React.Component {
    render() {
        return [
            <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Home</a>
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="startContainer">
                Create a Start Page here
            </div>
            </>
        ];
    }
}
export default StartPage;