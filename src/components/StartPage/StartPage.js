import React from "react";
import "./StartPage.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardText,
  CardTitle,
  Col,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { textData, updatedData } from "../../mockdata/mock.js";
import HistoryTable from "../HistoryTable/Historytable.js";

class StartPage extends React.Component {
  showDetails = id => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    let d = textData.split(".");
    return [
      <>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <div>
          <Row>
            <Col sm={6} lg={4}>
              <Card body>
                <CardTitle>
                  <Link to="/home">Data Load</Link>
                </CardTitle>
                <CardText>
                  {d.map((item, index) => {
                    return (
                      <ul key={index}>
                        <li>{item}</li>
                      </ul>
                    );
                  })}
                </CardText>

                <div className="startTable">
                  <HistoryTable
                    auditData={updatedData}
                    showDetails={this.showDetails}
                  />
                </div>
              </Card>
            </Col>
            <Col sm={6} lg={4}>
              <Card body>
                <CardTitle>
                  <Link to="/home">Bulk Load</Link>
                </CardTitle>
                <CardText>
                  {d.map((item, index) => {
                    return (
                      <ul key={index}>
                        <li>{item}</li>
                      </ul>
                    );
                  })}
                </CardText>
              </Card>
            </Col>
            <Col sm={6} lg={4}>
              <Card body>
                <CardTitle>
                  <Link to="/xml">Configure XML</Link>
                </CardTitle>
                <CardText>
                  {d.map((item, index) => {
                    return (
                      <ul key={index}>
                        <li>{item}</li>
                      </ul>
                    );
                  })}
                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    ];
  }
}
export default StartPage;
