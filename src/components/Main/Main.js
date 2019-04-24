import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import '../../Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { getData , getStatusDetails } from '../../actions.js';
import HistoryTable from '../HistoryTable/Historytable';
import Home from '../Home/Home';
import { data } from '../../mockdata/mock';




class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onShow: false,
      auditData: []
    }
  }
   
  showHistory = () => {
    this.props.getData();
    this.setState({
      onShow: !this.state.onShow
    })
  }
  showDetails = (id) => {
        this.props.history.push(`/details/${id}`);
        this.props.getStatusDetails(id);
  }

  render() {
    console.log(this.props.auditData);
   
    return (
      <div>
      <div>
        <Home auditData={data} />
      </div>
      <div className="header1">
        
        {this.state.onShow ? <div className="iconfield"><FontAwesomeIcon className="caret" icon={faCaretUp} onClick={this.showHistory}/><div className="text">Load History</div></div> :<div className="iconfield"><FontAwesomeIcon className="caret" icon={faCaretDown} onClick={this.showHistory}/><div className="text">Load History</div></div>}
      </div>
      {this.state.onShow ? <div className="mainContainer">
        <HistoryTable auditData={this.props.auditData}  showDetails={this.showDetails}/>
        </div> : "" }
      </div>
    );
  }
}
// export default Dashboard;
const mapStateToProps = state => ({
  auditData: state.data.auditData,
  auditStatusDetails : state.data.auditStatusDetails
});
const mapDispatchToProps = {
  getData,getStatusDetails
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);


