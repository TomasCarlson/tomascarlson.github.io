import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css'
import { Helmet } from "react-helmet"

import socialBanner from "../images/halftone.svg"

class Layout extends React.Component {

  render() {
    return (
      <>
          <Helmet>
            <link rel="icon" type="image/svg" href={socialBanner} />
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
          <Container style={{minHeight: "100vh"}} className="d-flex align-items-center justify-content-center flex-column">
            <Row className="d-flex align-items-center">
              <Col className="text-center">
                <h1 id="main-name"><a href="/" style={{textDecoration: "none"}}>Tomás Carlson</a></h1>
                <div className="nav-links">
                  <a id="about-nav" className="pl-0" href="/">About</a>
                  •
                  <a id="projects-nav" href="/projects">Projects</a>
                  •
                  <a id="radio-nav" href="/radio">Radio</a>
                  • 
                  <a id="blog-nav" href="/blog">Blog</a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.props.children}
              </Col>
            </Row>
          </Container>

      </>
    )
  }
}

export default Layout
