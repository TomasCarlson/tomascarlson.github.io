import * as React from "react"

import { Helmet } from "react-helmet"

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
        <div className="w-100 text-center pr-5 pl-5 pt-3">
          <h1 className="content-title project-title text-xl-left">This is an article title</h1>
          <h3 className="content-text pb-2 text-xl-left">This is a subtitle for my article</h3>
          <picture>
            <source srcSet={bonusWEBP} type="image/webp" />
            <source srcSet={bonusJPG} type="image/jpeg" />
            <img className="radio-photo mb-3" src={bonusJPG} alt="Bonus Tracks Banner" />
          </picture>
          <p className="content-date pb-2 text-xl-left">Published on: Date</p>
          <div className="article-text text-left">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lacus varius tellus hendrerit laoreet in ac risus. Duis venenatis porttitor mauris vel porttitor. Nunc a semper nulla, id congue tellus. Aliquam convallis pharetra lectus vel suscipit. Quisque sodales ut velit ut pulvinar. Vestibulum massa sapien, pellentesque non venenatis ut, faucibus sollicitudin quam. Nulla facilisi. Donec ac vehicula dolor, sollicitudin viverra mauris. Aenean posuere mollis hendrerit. In vitae leo sit amet ex malesuada mollis id quis ex.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lacus varius tellus hendrerit laoreet in ac risus. Duis venenatis porttitor mauris vel porttitor. Nunc a semper nulla, id congue tellus. Aliquam convallis pharetra lectus vel suscipit. Quisque sodales ut velit ut pulvinar. Vestibulum massa sapien, pellentesque non venenatis ut, faucibus sollicitudin quam. Nulla facilisi. Donec ac vehicula dolor, sollicitudin viverra mauris. Aenean posuere mollis hendrerit. In vitae leo sit amet ex malesuada mollis id quis ex.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lacus varius tellus hendrerit laoreet in ac risus. Duis venenatis porttitor mauris vel porttitor. Nunc a semper nulla, id congue tellus. Aliquam convallis pharetra lectus vel suscipit. Quisque sodales ut velit ut pulvinar. Vestibulum massa sapien, pellentesque non venenatis ut, faucibus sollicitudin quam. Nulla facilisi. Donec ac vehicula dolor, sollicitudin viverra mauris. Aenean posuere mollis hendrerit. In vitae leo sit amet ex malesuada mollis id quis ex.
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export default BlogPage;
