import React, {Component} from 'react';
import {Table} from 'reactstrap';
import './HistoryTable.css';


class HistoryTable extends Component {


    showDetails = (id) => {
        this.props.showDetails(id);
    };

    renderTable = () => {

        return this.props.auditData.map((item) => {

            return (
                <tr>
                    <th scope="row">{item.repline_versionId}</th>
                    <td>{item.status}</td>
                    <td>{item.transactionStage}</td>
                    <td>{item.updatedBy}</td>
                    <td>{item.updatedTime}</td>
                    <td>
                        <button type="button" onClick={() => {
                            this.showDetails(item.auditID)
                        }}>View
                        </button>
                    </td>
                </tr>
            )
        });

    };

    render() {
        return (
            <Table  className="col-md-12 col-lg-12 col-sm-12">
                <thead>
                <tr className="tableheader">
                    <th>VersionID</th>
                    <th>Status</th>
                    <th>Transaction Stage</th>
                    <th>UpdatedBy</th>
                    <th>Updated Time</th>
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


