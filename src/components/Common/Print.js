import React, { Component } from "react";
import excel from "../../assets/images/excel.png";
import print from "../../assets/images/printer.png";

class Print extends Component {
  printScreen = () => {
    console.log("printed");
    if (this.state.onShow) {
      window.print();
    }
  };
  exportTableToExcel = () => {
    if (!this.state.onShow) {
      return;
    }
    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    var tableSelect = document.getElementById("auditTable");
    var tableHTML = tableSelect.innerHTML.replace(/ /g, "%20");

    // Specify file name
    var filename = "auditHistory.xls";

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      var blob = new Blob(["\ufeff", tableHTML], {
        type: dataType
      });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = "data:" + dataType + ", " + tableHTML;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }
  };
  render() {
    return (
      <div>
        <img
          src={excel}
          className="excel"
          alt="excel"
          onClick={this.exportTableToExcel}
        />
        <img
          src={print}
          className="excel"
          alt="print"
          onClick={this.printScreen}
        />
      </div>
    );
  }
}
export default Print;
