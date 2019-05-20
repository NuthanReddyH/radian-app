import React, { Component } from "react";
import { Table, UncontrolledTooltip } from "reactstrap";
import view from "../../assets/images/binoculars.png";
import "./HistoryTable.css";

class HistoryTable extends Component {
  showDetails = id => {
    this.props.showDetails(id);
  };

  renderTable = () => {
    return this.props.auditData.map((item,index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.repline_versionId}</th>
          <td>{item.config_version}</td>
          <td>{item.status}</td>
          <td>{item.transactionStage}</td>
          <td>{item.startTime}</td>
          <td>{item.endTime}</td>
          <td>{item.duration}</td>
          <td>{item.updatedBy}</td>
          <td>{item.updatedTime}</td>
          <td>
            <img
              src={view}
              id="viewImage"
              className="view"
              alt="view"
              onClick={() => {
                this.showDetails(item.auditID);
              }}
            />
            <UncontrolledTooltip placement="right" target="viewImage">
              view
            </UncontrolledTooltip>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Table className="col-md-12 col-lg-12 col-sm-12">
        <thead>
          <tr className="tableheader">
            <th>Rates Version ID</th>
            <th>Config Version</th>
            <th>Status</th>
            <th>Transaction Stage</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Duration</th>
            <th>Loaded By</th>
            <th>Loaded Time</th>
            <th>Log</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </Table>
    );
  }
}

export default HistoryTable;
