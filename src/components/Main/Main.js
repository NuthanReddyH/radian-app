import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import '../../Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { getData } from '../../actions.js';
import HistoryTable from '../HistoryTable/Historytable';
import Home from '../Home/Home';
import { data } from '../../mockdata/mock';
import axios from 'axios';




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
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // console.log(prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.auditData);
    console.log(prevProps.auditData);
    console.log(this.props.auditData === prevProps.auditData);
    if(this.props.auditData ) {
     
          data.map((item,i) => {
            //console.log(item);
            if(item.status === "InProgress") {
              //console.log("progress");
              this.interval = setInterval(() => {
                //axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
                //this.props.getData();
              }, 5000);
            }
          })
    }
    
  }
  showDetails = (id) => {
        this.props.history.push(`/details/${id}`);
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
        <HistoryTable auditData={data}  showDetails={this.showDetails}/>
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
  )(Main)
);


