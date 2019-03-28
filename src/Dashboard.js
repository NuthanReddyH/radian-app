import React, { Component } from 'react';
import './App.css';
import './Dashboard.css';
import radianLogo from './assets/images/radian.jpg'
import axios from 'axios';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
      let input  = document.getElementById("file");
      let file = input.files[0];
      console.log(file);
    let form = new FormData();
    form.append("excel",input.files[0]);    
    axios.post('/user', form)
    .then((response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
      <div className="header">
      <img src={radianLogo} className="logo" alt="RADIAN"></img>
      
      </div>
      <hr />
      <hr />
      <div className="mainContainer">
        <div className="fileInput"><strong>Select file to run * :  </strong><input type="file" id="file" /></div>
        <div className="fileInput"><strong>Enter the email address </strong>to be notified after the completion of the run:  <input type="email" /></div>

        <div><input className="submitButton" type="button" value="upload" onClick={this.onSubmit} /></div>
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

