import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css'


class Layout extends React.Component {

  render() {
    return (
      <>      
        <Row>
          <Col sm={12} md={2} className="text-center box-title content-box d-flex p-0" style={{backgroundColor: "#E6ECED", color: "#1F2327", zIndex: "6"}}>
            <div class="justify-content-center align-self-center w-100">
              <h1 className="box-title">Tomás Carlson</h1>
            </div>   
          </Col>
          <Col sm={12} md={2} className="text-center box-title content-box d-flex flex-column p-0">
            <a id="about" href="/" class="selection-box d-flex" style={{backgroundColor: "#4C5760"}}>
              <div class="justify-content-center align-self-center w-100">
                About
              </div>   
            </a>
            <a id="code" href="/code" class="selection-box d-flex" style={{backgroundColor: "#93A8AC"}}>
              <div class="justify-content-center align-self-center w-100">
                Code
              </div>   
            </a>
            <div id="radio" class="selection-box d-flex" style={{backgroundColor: "#D7CEB2"}}>
              <div class="justify-content-center align-self-center w-100">
                Radio
              </div>   
            </div>
            <div id="blog" class="selection-box d-flex" style={{backgroundColor: "#A59E8C"}}>
              <div class="justify-content-center align-self-center w-100">
                Blog
              </div>   
            </div>
          </Col>
          <Col sm={12} md={8} className="content-box p-0" style={{zIndex: "4"}}>
            {this.props.children}
          </Col>
        </Row>
      </>
    )
  }
}

export default Layout
