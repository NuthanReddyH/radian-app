import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { data } from '../../mockdata/mock';

class HistoryTable extends Component {
  
  renderTable = () => {
      
         return data.map((item,index) => {
              return (
                <tr>
                <th scope="row">{item["run#"]}</th>
                <td>{item.date}</td>
                <td>{item.numofrecords}</td>
                <td>{item.status}</td>
                <td><button type="button">View</button></td>
              </tr>
              )
          });
      
  }

  render() {
    return (
        <Table>
        <thead>
          <tr className="tableheader">
            <th>Run#</th>
            <th>Date</th>
            <th>Number of Records</th>
            <th>Status</th>
            <th>Log</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTable()}
        </tbody>
      </Table>
    );
  }
}
export default HistoryTable;


