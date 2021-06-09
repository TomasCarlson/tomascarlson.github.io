import * as React from "react"

import sampleJPG from "../images/radio/samplesonics.jpg"
import sampleWEBP from "../images/radio/samplesonics.webp"
import bonusJPG from "../images/radio/bonustracks.jpg"
import bonusWEBP from "../images/radio/bonustracks.webp"

import { Helmet } from "react-helmet"

class RadioPage extends React.Component {

  componentDidMount() {
    document.getElementById("about").style.zIndex = 2;
    document.getElementById("projects").style.zIndex = 3;
    document.getElementById("radio").style.zIndex = 5;
    document.getElementById("blog").style.zIndex = 2;
    document.body.style.background = "#ddcd9d";
  }

  // markup
  render() {
    return (
      <div className="w-100 h-100 d-flex text-center" style={{ color: "#E6ECED", backgroundColor: "#ddcd9d", zIndex: "4" }}>
        <Helmet>
          <title>Tomás Carlson: Radio</title>
          <meta property="og:title" name="twitter:title" content="Tomás Carlson: Radio" />
          <meta property="og:description" name="twitter:description" content="A repository of radio shows I hosted, which concepts I developed and branded." />
        </Helmet>
        <div className="w-100 pr-5 pl-5 pt-2 mt-4">
          <div className="mb-3">
            <picture>
              <source srcSet={sampleWEBP} type="image/webp" />
              <source srcSet={sampleJPG} type="image/jpeg" />
              <img className="radio-photo" src={sampleJPG} alt="SampleSonics Banner" />
            </picture>
          </div>
          <p className="content-text mb-4">Music discovery through samples: a mix of hip-hop songs and their diverse samples.</p>
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