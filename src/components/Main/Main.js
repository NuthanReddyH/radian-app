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
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import { data, updatedData } from "../../mockdata/mock";
import Print from "../Common/Print";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onShow: false,
      auditData: updatedData,
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
      auditData: data
    });
  };
  prevData = () => {
    if (this.state.pageNum > this.startPage) {
      this.state.pageNum--;
    }
    this.setState({
      auditData: updatedData
    });
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
        <Print onShow={this.state.onShow} />
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
