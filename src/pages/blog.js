import * as React from "react"
import { Helmet } from "react-helmet"
import BlogList from "../components/blog-list"

class BlogPage extends React.Component {

  componentDidMount() {
    document.getElementById("about-nav").classList.remove("active-nav");
    document.getElementById("projects-nav").classList.remove("active-nav");
    document.getElementById("radio-nav").classList.remove("active-nav");
    document.getElementById("blog-nav").classList.add("active-nav");
  }

  // markup
  render() {
    return (
      <div className="w-100 h-100 d-flex">
        <Helmet>
          <title>Tomás Carlson: Blog</title>
          <meta name="description" content="My blog, featiring original articles surrounding music, tech, culture, and more." />
          <meta property="og:title" name="twitter:title" content="Tomás Carlson: Blog" />
          <meta property="og:description" name="twitter:description" content="My blog, featiring original articles surrounding music, tech, culture, and more." />
        </Helmet>
        <div className="w-100 text-center pr-4 pl-4 pr-sm-5 pl-sm-5 pt-4 pt-md-2">
          <BlogList></BlogList>
        </div>
      </div>
    )
  }
}

export default BlogPage;
