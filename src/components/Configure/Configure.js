import React from 'react';
import {XMLConfigVersions} from '../../mockdata/mock';
import {Table} from 'reactstrap';
import view from '../../assets/images/binoculars.png';
import './Configure.css';


export default class Configure extends React.Component {


  showXmlConfig = (configId) => {
    console.log(configId);
    this.props.history.push(`/xmlDetails/${configId}`);
    // this.props.history.push('/xmlDetails');
  }

  renderXmlConfigTable = () =>{
    return XMLConfigVersions.map((item) => {

      return (
          <tr className="mainRow">
              <th scope="row">{item.configId}</th>
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
      )
  });
  };
  
  render() {
    return (
      <div>
        <Table bordered hover className="xmlConfigtable">
          <thead className="headcontainer">
          <tr className="mainRow">
            <th>Config Id</th>
            <th>Config Version</th>
            <th>Updated By</th>
            <th>Updated Time</th>
            <th>Log</th>
            </tr>
          </thead>
          <tbody>
             {this.renderXmlConfigTable()}
          </tbody>
        </Table>
      </div>
    );
  }
}