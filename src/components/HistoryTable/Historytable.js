import React, { Component } from 'react';
import { Table } from 'reactstrap';

class HistoryTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Table>
        <thead>
          <tr>
            <th>Run#</th>
            <th>Date</th>
            <th>Number of Records</th>
            <th>Status</th>
            <th>Log</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Run#1</th>
            <td>02/01/2019</td>
            <td>165,000</td>
            <td>In Progress</td>
            <td><button type="button">View</button></td>
          </tr>
          <tr>
            <th scope="row">Run#2</th>
            <td>02/01/2019</td>
            <td>165,000</td>
            <td>Loaded</td>
            <td><button type="button">View</button></td>
          </tr>
          <tr>
            <th scope="row">Run#3</th>
            <td>02/01/2019</td>
            <td>165,000</td>
            <td>Data Quality Failure</td>
            <td><button type="button">View</button></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default HistoryTable;


