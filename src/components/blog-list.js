import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BList({ data }) {
  const { posts } = data.blog

  return (
    <div>
      {posts.map(post => (
        <div>
        <div className="mt-n2 mt-md-1">
          <Row>
            <Col lg={12} xl={8} className="order-2 order-xl-1 d-block d-xl-flex">
              <div className="justify-content-center align-self-center">
                <a href={post.frontmatter.slug} className="d-none d-xl-block">
                  <p className="content-title blog-link text-xl-left project-title mb-0">{post.frontmatter.title}</p>
                </a>
                <p className="content-date text-xl-left mb-0 d-none d-xl-block">{post.frontmatter.date}</p>
                <p className="content-text text-center text-xl-left mt-1 mb-n1 mb-sm-1">{post.frontmatter.subtitle}</p>
              </div>
            </Col>
            <Col lg={12} xl={4} className="order-1 order-xl-2 project-pic">
              <a href={post.frontmatter.slug} className="d-block d-xl-none">
                <p className="content-title mb-n1 blog-link text-xl-left project-title">{post.frontmatter.title}</p>
              </a>
              <p className="content-date text-xl-left d-block d-xl-none">{post.frontmatter.date}</p>
              <div className="justify-content-center align-self-center pb-3 pb-xl-0">
                <a href={post.frontmatter.slug} >
                  <picture >
                    <source srcSet={post.frontmatter.webp} type="image/webp" />
                    <source srcSet={post.frontmatter.jpg} type="image/jpeg" />
                    <img id="blog-img" className="project-image" src={post.frontmatter.jpg} alt={post.frontmatter.alt} />
                  </picture>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        </div>
      ))}
    </div>
  )
}

export default function BlogList(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          blog: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            posts: nodes {
              id
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                subtitle
                webp
                jpg
                tags
              }
            }
          }
        }
      `}
      render={data => <BList data={data} />}
    />
  )
}