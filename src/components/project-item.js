import * as React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function ProjectItem(props) {
  return (
    <>
      <div className="pb-1">
        <Row>
          <Col lg={12} xl={8} className="order-2 order-xl-1">
            <a href={props.link} className="d-none d-xl-block" target="_blank" rel="noopener noreferrer">
              <h3 className="content-title mb-2 project-link project-title pb-2">{props.name}</h3>
            </a>
            <p className="content-text">{props.desc}</p>
          </Col>
          <Col lg={12} xl={4} className="order-1 order-xl-2 project-pic">
            <a href={props.link} className="d-block d-xl-none">
              <p className="content-title mb-2 project-link project-title pb-2">{props.name}</p>
            </a>
            <div className="justify-content-center align-self-center pb-3 pb-xl-0">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <picture >
                  <source srcSet={props.webp} type="image/webp" />
                  <source srcSet={props.jpg} type="image/jpeg" />
                  <img className="project-image" src={props.jpg} alt={props.name + " screenshot"} />
                </picture>
              </a>
            </div>
          </Col>
        </Row>
        
      </div>
   </>
   )
 }

export default ProjectItem;
