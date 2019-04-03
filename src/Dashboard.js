import React, { Component } from 'react';
import './App.css';
import './Dashboard.css';
import axios from 'axios';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "bulkfile.xls",
      email: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange = (e) => {
    this.setState({
      email: e.target.value
    })

  }
  onSubmit() {
    // console.log(this.props);
    // this.props.history.push('/error');
    let file = this.state.file;
    if(file.indexOf('xlsx') > 0) {
          this.props.history.push('/home');
    } else {
      this.props.history.push('/error');
    }
            // let form = {
    //   fileName: this.state.file,
    //   email: this.state.email
    // }
    // axios.post('/user', form)
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch( (error) => {
    //   console.log(error);
    // });
  }
  render() {
    return (
      <div>
        <div className="fileInput"><strong>Select file to run * :  </strong><input className="file" type="text" value={this.state.file}  readOnly/></div>
        <div className="fileInput"><strong>Enter the email address </strong>to be notified after the completion of the run:  <input type="email" value={this.state.email} onChange={this.onChange} /></div>

        <div><input className="submitButton" type="button" value="upload" onClick={this.onSubmit} /></div>
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
