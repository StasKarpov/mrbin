import React from "react";
import Quagga from "quagga";

export default class Scanner extends React.Component {
  state = {
    results: []
  };

  render() {
    return (
      <React.Fragment>
        <div id="interactive" className="viewport" />
        <div
          style={{
            left: "17%",
            width: "260px",
            height: "187px",
            border: "2px solid blue",
            backgroundColor: "transparent",
            position: "fixed",
            top: "20%"
          }}
        ></div>
        <p style={{ fontSize: "20px", paddingTop: "200px" }}>
          loading camera ...
        </p>
      </React.Fragment>
    );
  }

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          constraints: {
            width: 330,
            facingMode: "environment" // or user
          }
        },
        locate: true,
        locator: {
          patchSize: "medium",
          halfSample: true
        },
        numOfWorkers: 2,
        decoder: {
          readers: ["ean_reader"],
          debug: {
            drawBoundingBox: true,
            showFrequency: false,
            drawScanline: true,
            showPattern: false
          }
        }
      },
      function(err) {
        if (err) {
          return console.error(err);
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    );
    Quagga.onDetected(this.onDetected);
  }

  componentWillUnmount() {
    Quagga.offDetected(this.onDetected);
  }

  onDetected = result => {
    console.log("FOUND", result);
    let code = result.codeResult.code;
    this.setState({ results: [...this.state.results, code] });

    if (this.state.results.length > 1) {
      this.props.onDetected(this.state.results);
      Quagga.offDetected(this.onDetected);
    }
  };
}
