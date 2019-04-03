import React, { Component } from 'react';
import "./ErrorPage.css";


class ErrorPage extends Component {
  render() {
    return (
      <div>
          <div className="errorContainer">You failed to upload Bulk Testing 2019.04.03.xlsb  => File should be in .csv format</div>
          <div className="buttonType"><button type="button">Go Back</button></div>
          <div className="link" >Click here to go to <a href="#">@Radian</a></div>
      </div>
    );
  }
}
export default ErrorPage;
