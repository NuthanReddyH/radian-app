import React from "react";
import { XMLConfigVersions } from "../../mockdata/mock";
import { Table, Breadcrumb, BreadcrumbItem } from "reactstrap";
import view from "../../assets/images/binoculars.png";
import "./Configure.css";
import Print from "../Common/Print";

export default class Configure extends React.Component {
  showXmlConfig = configId => {
    this.props.history.push(`/xmlDetails/${configId}`);
    // this.props.history.push('/xmlDetails');
  };

  renderXmlConfigTable = () => {
    return XMLConfigVersions.map(item => {
      return (
        <tr id="row" className="mainRow">
          <td>{item.configVersion}</td>
          <td>{item.UpdatedBy}</td>
          <td>{item.UpdatedTime}</td>
          <td>
            <img
              src={view}
              id="viewImage"
              className="view"
              alt="view"
              onClick={() => {
                this.showXmlConfig(item.configId);
              }}
            />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <Breadcrumb id="invisible">
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/xml">Configure XML</a>
          </BreadcrumbItem>
        </Breadcrumb>
       <div id="invisible" ><Print  onShow={true} /></div>
        <div id="auditTable">
          <Table bordered hover className="xmlConfigtable">
            <thead className="headcontainer">
              <tr id="row"className="mainRow">
                <th>Config Version</th>
                <th>Updated By</th>
                <th>Updated Time</th>
                <th>Log</th>
              </tr>
            </thead>
            <tbody>{this.renderXmlConfigTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
