import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import radianLogo from './assets/images/radian.jpg'
import axios from 'axios';
import { getData } from './actions.js';
//import caretdown from './assets/images/caretdown.png';
import HistoryTable from './components/HistoryTable/Historytable';
import Home from './components/Home/Home';
import { data } from './mockdata/mock';




class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onShow: false,
      auditData: []
    }
  }
   
  showHistory = () => {
    // axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
    //   .then(res => {
        
    //   })
    this.props.getData();
    this.setState({
      onShow: !this.state.onShow
    })
  }

  render() {
    console.log(this.props.auditData);
    return (
      <div>
      <div className="header">
      <img src={radianLogo} className="logo" alt="RADIAN"></img>
      
      </div>
      <div>
        <Home />
      </div>
      <div className="header1">
        
        {this.state.onShow ? <div className="iconfield"><FontAwesomeIcon className="caret" icon={faCaretUp} onClick={this.showHistory}/><div className="text">Load History</div></div> :<div className="iconfield"><FontAwesomeIcon className="caret" icon={faCaretDown} onClick={this.showHistory}/><div className="text">Load History</div></div>}
      </div>
      {this.state.onShow ? <div className="mainContainer">
        <HistoryTable auditData={data} />
        </div> : "" }
      </div>
    );
  }
}
// export default Dashboard;
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
  )(Dashboard)
);


