import React, { Component } from 'react';
import {Table} from 'reactstrap';
import {xmlData} from '../../mockdata/mock';

export class xmlDetails extends Component {


    renderXmlData = () =>{
        return xmlData.map((item) => {
    
          return (
              <tr className="mainRow">
                  <th scope="row">{item.ColumnNumber}</th>
                  <td>{item.ColumnName}</td>
                  <td>{item.DataType}</td>
                  <td>
                      <button type="button">Delete
                      </button>
                  </td>
              </tr>
          )
      });
      };


  render() {
    return (
        <>
        <Table bordered hover className="xmlConfigtable">
          <thead className="headcontainer">
          <tr className="mainRow">
            <th>Column Id</th>
            <th>Column Name</th>
            <th>Data Type</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
             {this.renderXmlData()}
          </tbody>
        </Table>
      </>
    )
  }
}

export default xmlDetails;