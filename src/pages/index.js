import * as React from "react"
import { ImMail } from "@react-icons/all-files/im/ImMail"

import tomas from "../images/tomas.jpg"
import tomasWebp from "../images/tomas.webp"

class IndexPage extends React.Component {

  componentDidMount() {
    document.body.style.background = "#415969";
  }

  // markup
  render() {
    return (
      <div class="w-100 h-100 d-flex about-page" style={{ color: "#E6ECED", backgroundColor: "#415969", zIndex: "4"}}>
        <div class="justify-content-center align-self-center w-100 text-center pr-5 pl-5">
          <p className="content-title mb-2">Hello there!</p>
          <div className="mb-4">
            <picture>
              <source srcSet={tomasWebp} type="image/webp" />
              <source srcSet={tomas} type="image/jpeg" />
              <img className="tomas-photo" src={tomas} alt="Tomás Carlson" />
            </picture>
          </div>
          <h2 className="content-text">I'm a Developer, Producer, Graphic Designer & DJ currently studying Computer Science and Design at Northeastern University.</h2>
          <div className="pb-2" style={{ fontSize: "6vmin" }}>
            <a href="mailto:me@tomascarlson.com"><ImMail class="about-link" style={{ color: "#E6ECED"}} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage;