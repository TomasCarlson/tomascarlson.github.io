import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { ReactTransition } from "react-transition-group"

import Transition from "../components/transition"


import socialBanner from "../images/halftone.png"
import eyes from "../images/eyes.gif"
import eyesWEBP from "../images/eyes.webp"

import fav16 from "../images/favicons/favicon-16x16.png"
import fav32 from "../images/favicons/favicon-32x32.png"
import favtouch from "../images/favicons/apple-touch-icon.png"
import favpinned from "../images/favicons/safari-pinned-tab.svg"


class Layout extends React.Component {

  render() {
    return (
      <>


          <Helmet>
            <title>Tomás Carlson</title>
            <meta property="og:title" name="twitter:title" content="Tomás Carlson" />
            <meta property="og:description" name="twitter:description" content="Tomás Carlson: Developer, Producer, Graphic Designer and DJ currently studying Computer Science & Design at Northeastern University." />
            <meta name="description" content="Tomás Carlson: Developer, Producer, Graphic Designer and DJ currently studying Computer Science & Design at Northeastern University." />
            <meta property="og:image" name="twitter:image" content={socialBanner} />
            <meta property="og:url" content="https://tomascarlson.com" />
            <meta property="og:site_name" content="Tomás Carlson" />
            <meta name="twitter:image:alt" content="Stylized photo of Tomás Carlson" />
            <meta name="theme-color" content="#9d6d68" />
            <meta name="twitter:card" content="summary_large_image"/>
            <link rel="apple-touch-icon" sizes="180x180" href={favtouch}/>
            <link rel="icon" type="image/png" sizes="32x32" href={fav32}/>
            <link rel="icon" type="image/png" sizes="16x16" href={fav16}/>
            <link rel="mask-icon" href={favpinned} color="#9d6d68"/>
            <meta name="msapplication-TileColor" content="#9d6d68"/>
          </Helmet>
          <Container id="full-container" className="d-flex align-items-center justify-content-center flex-column">
            
            <Row className="d-flex align-items-center">
              <Col  className="text-center">
                <h1 id="main-name"><a href="/" style={{textDecoration: "none"}}>Tomás Carlson</a></h1>
                <picture>
                  <source srcSet={eyesWEBP} type="image/webp" />
                  <source srcSet={eyes} type="image/gif" />
                  <img className="tomas-photo" src={eyes} alt="Tomás Carlson" />
                </picture>
                <div className="nav-links">
                  <Link id="about-nav" className="pl-0" to="/">About</Link>
                  •
                  <Link id="projects-nav" to="/projects">Projects</Link>
                  •
                  <Link id="radio-nav" to="/radio">Radio</Link>
                  • 
                  <Link id="blog-nav" to="/blog">Blog</Link>
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Transition location={this.props.location}>
                {this.props.children}
                </Transition>
              </Col>
            </Row>
          </Container>

      </>
    )
  }
}

export default Layout
