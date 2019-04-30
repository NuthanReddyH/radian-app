import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../../containers/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../actions/actions.js";
import HistoryTable from "../HistoryTable/Historytable";
import Home from "../Home/Home";
import excel from "../../assets/images/excel.png";
import print from "../../assets/images/printer.png";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import { data, updatedData } from "../../mockdata/mock";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onShow: false,
      auditData: data,
      pageNum: "1"
    };
    this.startPage = 1;
    this.lastPage = 20;
  }

  showHistory = () => {
    this.props.getData();
    this.setState({
      onShow: !this.state.onShow
    });
  };

  showDetails = id => {
    this.props.history.push(`/details/${id}`);
  };
  updateTable = () => {
    if (this.state.pageNum < this.lastPage) {
      this.state.pageNum++;
    }
    this.setState({
      auditData: updatedData
    });
  };
  prevData = () => {
    if (this.state.pageNum > this.startPage) {
      this.state.pageNum--;
    }
    this.setState({
      auditData: data
    });
  };

  printScreen = () => {
    console.log("printed");
    if (this.state.onShow) {
      window.print();
    }
  };
  exportTableToExcel = () => {
    if (!this.state.onShow) {
      return;
    }
    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    var tableSelect = document.getElementById("auditTable");
    var tableHTML = tableSelect.innerHTML.replace(/ /g, "%20");

    // Specify file name
    var filename = "auditHistory.xls";

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      var blob = new Blob(["\ufeff", tableHTML], {
        type: dataType
      });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = "data:" + dataType + ", " + tableHTML;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }
  };

  render() {
    let caret = this.state.onShow ? faCaretUp : faCaretDown;
    return (
      <div>
        <div id="home">
          <Home auditData={data} />
        </div>
        <div className="header1">
          <div className="iconfield">
            <FontAwesomeIcon
              onClick={this.showHistory}
              className="caret"
              icon={caret}
            />
            <div className="text">Load History</div>
          </div>
        </div>
        <div>
          <img
            src={excel}
            className="excel"
            alt="excel"
            onClick={this.exportTableToExcel}
          />
          <img
            src={print}
            className="excel"
            alt="print"
            onClick={this.printScreen}
          />
        </div>
        {this.state.onShow ? (
          <div>
            <div className="mainContainer" id="auditTable">
              <HistoryTable
                auditData={this.state.auditData}
                showDetails={this.showDetails}
              />
            </div>
            <div className="page">
              <img
                src={left}
                className="previous"
                alt="left"
                onClick={this.prevData}
              />{" "}
              {this.state.pageNum} of {this.lastPage}
              <img
                src={right}
                className="next"
                alt="right"
                onClick={this.updateTable}
              />
            </div>
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
