import * as React from "react"
import { Helmet } from "react-helmet"
import BlogList from "../components/blog-list"

import bonusJPG from "../images/radio/bonustracks.jpg"
import bonusWEBP from "../images/radio/bonustracks.webp"



class BlogPage extends React.Component {

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
        <Helmet>
          <title>Tomás Carlson: Blog</title>
          <meta property="og:title" name="twitter:title" content="Tomás Carlson: Blog" />
          <meta property="og:description" name="twitter:description" content="My blog, featiring original articles surrounding music, tech, culture, and more." />
        </Helmet>
        <div className="w-100 text-center pr-4 pl-4 pr-sm-5 pl-sm-5 pt-4 pt-md-4">
          <BlogList></BlogList>
        </div>
      </div>
    )
  }
}

export default BlogPage;
