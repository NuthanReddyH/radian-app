import React, { Component } from 'react';
import "./Home.css";


class Home extends Component {
  render() {
    return (
      <div>
          <div><strong>Your File is being processed as: BulkTesting2019.04.03CSV-100Records_1548763518526.csv</strong></div>
          <div className="textfile">You will be notified when the file is ready for download!</div>
          <div>Click here to go to <a href="#">@Radian</a></div>
      </div>
    );
  }
}
export default Home;
