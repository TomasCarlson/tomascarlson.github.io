import * as React from "react"

import { Helmet } from "react-helmet"

import bonusJPG from "../images/radio/bonustracks.jpg"
import bonusWEBP from "../images/radio/bonustracks.webp"
import { graphql } from 'gatsby'




class BlogPost extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById("about").style.zIndex = 1;
    document.getElementById("projects").style.zIndex = 2;
    document.getElementById("radio").style.zIndex = 3;
    document.getElementById("blog").style.zIndex = 5;
    document.body.style.background = "#B0A282";
  }

  // markup
  render() {
    return (
      <div className="w-100 h-100 d-flex" style={{ color: "#E6ECED", backgroundColor: "#B0A282", zIndex: "4" }}>
        {this.props.children}
      </div>
    )
  }
}

export default BlogPost;
