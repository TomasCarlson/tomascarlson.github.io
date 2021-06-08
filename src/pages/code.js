import * as React from "react"


class CodePage extends React.Component {

  componentDidMount() {
    document.getElementById("about").style.zIndex = 3;
    document.getElementById("code").style.zIndex = 5;
    document.getElementById("radio").style.zIndex = 3;
    document.getElementById("blog").style.zIndex = 2;
  }

  // markup
  render() {
    return (
      <div className="w-100 h-100 d-flex" style={{ color: "#E6ECED", backgroundColor: "#93A8AC", zIndex: "4" }}>
        <div className="justify-content-center align-self-center w-100 text-center pr-5 pl-5">
          <p className="content-title mb-2">Code Tab</p>
          <h2 className="content-text">nae nae</h2>
        </div>
      </div>
    )
  }
}

export default CodePage;
