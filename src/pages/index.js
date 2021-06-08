import * as React from "react"
import { ImLinkedin } from "@react-icons/all-files/im/ImLinkedin"
import { ImMail } from "@react-icons/all-files/im/ImMail"

import tomas from "../images/tomas.jpg"
import tomasWebp from "../images/tomas.webp"

class IndexPage extends React.Component {

  // markup
  render() {
    return (
      <div class="w-100 h-100 d-flex" style={{ color: "#E6ECED", backgroundColor: "#4C5760", zIndex: "4" }}>
        <div class="justify-content-center align-self-center w-100 text-center pr-5 pl-5">
          <p className="content-title mb-2">Hello there!</p>
          <div className="mb-4">
            <picture>
              <source srcSet={tomasWebp} type="image/webp" />
              <source srcSet={tomas} type="image/jpeg" />
              <img className="tomas-photo" src={tomas} alt="Tomás Carlson" />
            </picture>
          </div>
          <h2 className="content-text">I'm a Developer, Producer, Graphic Designer and DJ currently studying Computer Science and Design at Northeastern University.</h2>
          <div style={{ fontSize: "6vmin" }}><ImLinkedin className="mr-4" /><ImMail /></div>
        </div>
      </div>
    )
  }
}

export default IndexPage;