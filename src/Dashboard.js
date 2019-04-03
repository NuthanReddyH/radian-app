import React, { Component } from 'react';
import './App.css';
import './Dashboard.css';
import radianLogo from './assets/images/radian.jpg'
import HistoryTable from './components/HistoryTable/Historytable';



class Dashboard extends Component {
  constructor(props) {
    super(props);
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
        Load History
      </div>
      <div className="mainContainer">
        <HistoryTable />
        </div>
      </div>
    );
  }
}
export default Dashboard;
// const mapStateToProps = state => ({
//   data: state.data.data
// });
// const mapDispatchToProps = {
//   setData
// };
// const DashboardLink = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Dashboard)
  
//   export default DashboardLink

