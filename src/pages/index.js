import * as React from "react"

class AboutPage extends React.Component {

  componentDidMount() {
    document.getElementById("about-nav").classList.add("active-nav");
    document.getElementById("projects-nav").classList.remove("active-nav");
    document.getElementById("radio-nav").classList.remove("active-nav");
    document.getElementById("blog-nav").classList.remove("active-nav");
  }

  // markup
  render() {
    return (
      <div class="justify-content-center align-self-center w-100 text-center">
          <span className="content-text" style={{ fontSize: "4vmin" }}><h2 style={{display: "inline"}}>I'm a Developer, Producer, Graphic Designer & DJ currently studying Computer Science and Design at Northeastern University. </h2>
          <a href="mailto:me@tomascarlson.com" style={{textDecoration: "underline"}}>Email me.</a></span>
        </div>
    )
  }
}

export default AboutPage;