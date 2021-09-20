import * as React from "react"

import sampleJPG from "../images/radio/samplesonics.jpg"
import sampleWEBP from "../images/radio/samplesonics.webp"
import bonusJPG from "../images/radio/bonustracks.jpg"
import bonusWEBP from "../images/radio/bonustracks.webp"

import { Helmet } from "react-helmet"

class RadioPage extends React.Component {

  componentDidMount() {
    document.getElementById("about-nav").classList.remove("active-nav");
    document.getElementById("projects-nav").classList.remove("active-nav");
    document.getElementById("radio-nav").classList.add("active-nav");
    document.getElementById("blog-nav").classList.remove("active-nav");
  }

  // markup
  render() {
    return (
      <div className="w-100 h-100 d-flex text-center">
        <Helmet>
          <title>Tomás Carlson: Radio</title>
          <meta name="description" content="A repository of radio shows I hosted, which concepts I developed and branded." />
          <meta property="og:title" name="twitter:title" content="Tomás Carlson: Radio" />
          <meta property="og:description" name="twitter:description" content="A repository of radio shows I hosted, which concepts I developed and branded." />
        </Helmet>
        <div className="w-100 pr-4 pl-4 pr-sm-5 pl-sm-5 pt-2 mt-4">
          <div className="mb-3">
            <a href="https://www.mixcloud.com/SampleSonics/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source srcSet={sampleWEBP} type="image/webp" />
              <source srcSet={sampleJPG} type="image/jpeg" />
              <img className="radio-photo" src={sampleJPG} alt="SampleSonics Banner" />
            </picture>
            </a>
          </div>
          <p className="content-text">Music discovery through samples: a mix of hip-hop songs and their diverse samples.</p>
          <hr className="mb-4" />
          <div className="mb-3">
            <a href="http://wrbbradio.org/2021/02/12/qa-holy-hive-discuss-the-feelings-people-and-relationships-that-inspire-their-signature-sound/" target="_blank" rel="noopener noreferrer">
              <picture>
                <source srcSet={bonusWEBP} type="image/webp" />
                <source srcSet={bonusJPG} type="image/jpeg" />
                <img className="radio-photo" src={bonusJPG} alt="Bonus Tracks Banner" />
              </picture>
            </a>
          </div>
          <p className="content-text mb-3">Interviews and music from up and coming and established artists.</p>
        </div>
      </div>
    )
  }
}

export default RadioPage;