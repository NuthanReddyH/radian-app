import React, { Component } from "react";
import { Table } from "reactstrap";
import "./HistoryTable.css";

class HistoryTable extends Component {
  showDetails = id => {
    this.props.showDetails(id);
  };

  renderTable = () => {
    return this.props.auditData.map(item => {
      return (
        <tr>
          <th scope="row">{item.repline_versionId}</th>
          <td>{item.config_version}</td>
          <td>{item.status}</td>
          <td>{item.transactionStage}</td>
          <td>{item.startTime}</td>
          <td>{item.endTime}</td>
          <td>{item.updatedBy}</td>
          <td>{item.updatedTime}</td>
          <td>
            <button
              type="button"
              onClick={() => {
                this.showDetails(item.auditID);
              }}
            >
              View
            </button>
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
