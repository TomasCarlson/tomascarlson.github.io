import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css'
import { Helmet } from "react-helmet"

import favicon from "../images/favicon.jpg"
import socialBanner from "../images/social-banner.jpg"

class Layout extends React.Component {

  render() {
    return (
      <>
        <Row className="main-rows m-0">
          <Helmet>
            <link rel="icon" type="image/png" href={favicon} />
            <title>Tomás Carlson</title>
            <meta property="og:title" name="twitter:title" content="Tomás Carlson" />
            <meta property="og:description" name="twitter:description" content="Tomás Carlson: Developer, Producer, Graphic Designer and DJ currently studying Computer Science & Design at Northeastern University." />
            <meta name="description" content="Tomás Carlson: Developer, Producer, Graphic Designer and DJ currently studying Computer Science & Design at Northeastern University." />
            <meta property="og:image" name="twitter:image" content={socialBanner} />
            <meta property="og:url" content="https://tomascarlson.com" />
            <meta property="og:site_name" content="Tomás Carlson" />
            <meta name="twitter:image:alt" content="Stylized photo of Tomás Carlson" />
            <meta name="theme-color" content="#415969" />
            <meta name="twitter:card" content="summary_large_image"/>
          </Helmet>
          <Col id="fixed-side" sm={12} md={4} className="fixed-top box-title content-box d-flex flex-column p-0">
            <Row className="m-0">
              <Col id="name" sm={12} md={6} className="box-title content-box d-flex flex-column p-0" style={{ backgroundColor: "#FAFAFA", color: "#1F2327", zIndex: "6" }}>
                <div className="d-flex name-flex">
                  <div id="name-tag" className="justify-content-center align-self-center w-100 d-block">
                    <h1 id="name-text" className="m-0 box-title text-center">Tomás Carlson</h1>
                  </div>
                </div>
              </Col>
              <Col id="nav" sm={12} md={6} className="text-center box-title content-box d-flex flex-row flex-md-column p-0">
                <a id="about" href="/" class="selection-box d-flex" style={{ backgroundColor: "#415969" }}>
                  <div className="justify-content-center align-self-center w-100">
                    About
                  </div>
                </a>
                <a id="projects" href="/projects" class="selection-box d-flex" style={{ backgroundColor: "#85b1b7" }}>
                  <div className="justify-content-center align-self-center w-100">
                    Projects
                  </div>
                </a>
                <a href="/radio" id="radio" className="selection-box d-flex" style={{ backgroundColor: "#ddcd9d" }}>
                  <div className="justify-content-center align-self-center w-100">
                    Radio
                  </div>
                </a>
                <a href="/blog" id="blog" className="selection-box d-flex" style={{ backgroundColor: "#b0a282" }}>
                  <div className="justify-content-center align-self-center w-100">
                    Blog
                  </div>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={{span: 8, offset: 4}} className="content-box p-0 changing-content" style={{ zIndex: "4" }}>
            {this.props.children}
          </Col>
        </Row>
      </>
    )
  }
}

export default Layout
