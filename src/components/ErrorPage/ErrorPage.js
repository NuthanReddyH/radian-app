import React, { Component } from 'react';
import "./ErrorPage.css";


class ErrorPage extends Component {
  render() {
    return (
      <div>
          <div className="errorContainer">You failed to upload Bulk Testing  => File should be in .csv format</div>
          <div><button type="button">Go Back</button></div>
      </div>
    );
  }
}
export default ErrorPage;