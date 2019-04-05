import React, { Component } from 'react';
import './App.css';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import radianLogo from './assets/images/radian.jpg'
import axios from 'axios';
//import caretdown from './assets/images/caretdown.png';
import HistoryTable from './components/HistoryTable/Historytable';
import Home from './components/Home/Home';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onShow: false
    }
  }
   
  showHistory = () => {
    // axios.get(`http://10.24.18.62:8081/rvp/bbpdbloader/auditinfo`)
    //   .then(res => {
    //     console.log(res.data);
    //   })

    this.setState({
      onShow: !this.state.onShow
    })
  }

  render() {
    return (
      <div>
      <div className="header">
      <img src={radianLogo} className="logo" alt="RADIAN"></img>
      
      </div>
      <hr />
      <hr />
      <div className="header1">
        
        {this.state.onShow ? <div className="iconfield"><FontAwesomeIcon className="caret" icon={faCaretUp} onClick={this.showHistory}/><div className="text">Load History</div></div> :<div className="iconfield"><FontAwesomeIcon className="caret" icon={faCaretDown} onClick={this.showHistory}/><div className="text">Load History</div></div>}
      </div>
      {this.state.onShow ? <div className="mainContainer">
        <HistoryTable />
        </div> : "" }
      </div>
    );
  }
}
export default Dashboard;


