import * as React from "react"
import ProjectItem from "../components/project-item"

import playlistJPG from "../images/projects/playlist.jpg"
import playlistWEBP from "../images/projects/playlist.webp"
import oltoJPG from "../images/projects/olto.jpg"
import oltoWEBP from "../images/projects/olto.webp"
import wrbbJPG from "../images/projects/wrbb.jpg"
import wrbbWEBP from "../images/projects/wrbb.webp"
import crosswordJPG from "../images/projects/crossword.jpg"
import crosswordWEBP from "../images/projects/crossword.webp"
import etraJPG from "../images/projects/etra.jpg"
import etraWEBP from "../images/projects/etra.webp"

import { Helmet } from "react-helmet"



class ProjectPage extends React.Component {

  componentDidMount() {
    document.getElementById("about").style.zIndex = 3;
    document.getElementById("projects").style.zIndex = 5;
    document.getElementById("radio").style.zIndex = 3;
    document.getElementById("blog").style.zIndex = 2;
    document.body.style.background = "#85b1b7";
  }

  // markup
  render() {
    return (
      <div className="w-100 h-100 d-flex" style={{ color: "#FAFAFA", backgroundColor: "#85b1b7", zIndex: "4" }}>
        <Helmet>
          <title>Tomás Carlson: Projects</title>
          <meta name="description" content="A excerpt of some of the programming projects I was a part of." />
          <meta property="og:title" name="twitter:title" content="Tomás Carlson: Projects" />
          <meta property="og:description" name="twitter:description" content="A excerpt of some of the programming projects I was a part of." />
        </Helmet>
        <div className="w-100 text-center text-xl-left pr-4 pl-4 pr-sm-5 pl-sm-5 pt-3">
        <ProjectItem
            name="ETRA"
            desc='A media site with radio and articles showcasing the creatives of the future. Made in React.'
            jpg={etraJPG}
            webp={etraWEBP}
            link="https://etra.live"
          />
          <ProjectItem
            name="Playlist Mutator"
            desc='Made in React, utilizes the Spotify API to provide a tool for users to "mutate" existing playlists in React.'
            jpg={playlistJPG}
            webp={playlistWEBP}
            link="https://playlistmutator.com"
          />
          <ProjectItem
            name="OLTO CONCEPTS"
            desc='Created the branding, and portfolio site (made in Gatsby) for a web development and design partnership.'
            jpg={oltoJPG}
            webp={oltoWEBP}
            link="https://oltoconcepts.com"
          />
          <ProjectItem
            name="WRBB 104.9"
            desc='Maintained site using Wordpress, helped to work on future redesign.'
            jpg={wrbbJPG}
            webp={wrbbWEBP}
            link="https://wrbbradio.org"
          />
          <ProjectItem
            name="Crossword Puzzles"
            desc='Javascript puzzle game.'
            jpg={crosswordJPG}
            webp={crosswordWEBP}
            link="http://terrytidwell.github.io/crosswordpuzzle/version2.html"
          />
        </div>
      </div>
    )
  }
}

export default ProjectPage;
