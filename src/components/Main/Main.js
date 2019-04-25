import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../../containers/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../actions/actions.js";
import HistoryTable from "../HistoryTable/Historytable";
import Home from "../Home/Home";
import excel from "../../assets/images/excel.png";
import print from "../../assets/images/printer.png";
import { data } from "../../mockdata/mock";
//import { Button } from 'reactstrap';
import ReactHTMLTableToExcel from "react-html-table-to-excel";

//import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onShow: false,
      auditData: []
    };
  }

  showHistory = () => {
    this.props.getData();
    this.setState({
      onShow: !this.state.onShow
    });
  };

  getSnapshotBeforeUpdate() {
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(this.props.auditData);
    // console.log(prevProps.auditData);
    // console.log(this.props.auditData === prevProps.auditData);
    // if (this.props.auditData) {
    //
    //     data.map((item, i) => {
    //         //console.log(item);
    //         if (item.status === "InProgress") {
    //             //console.log("progress");
    //             this.interval = setInterval(() => {
    //                 //axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
    //                 //this.props.getData();
    //             }, 5000);
    //         }
    //     })
    // }
  }

  showDetails = id => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    let caret = this.state.onShow ? faCaretUp : faCaretDown;
    return (
      <div>
        <div>
          <Home auditData={data} />
        </div>
        <div className="header1" >
          <div className="iconfield">
            <FontAwesomeIcon onClick={this.showHistory} className="caret" icon={caret} />
            <div className="text">Load History</div>
          </div>
        </div>
        <div>
          <img src={excel} className="excel" alt="excel" />
          <img src={print} className="excel" alt="print" />
          {/* <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="reportButton"
            table="audit-table"
            filename="audit report"
            sheet="audit report"
            buttonText="Export"
          /> */}
        </div>
        {this.state.onShow ? (
          <div className="mainContainer">
            <HistoryTable auditData={data} showDetails={this.showDetails} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auditData: state.data.auditData
});
const mapDispatchToProps = {
  getData
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
