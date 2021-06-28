import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BlogPost from '../components/blog-post.js'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const articleStuff = html;
  return (
    <BlogPost>
      <Helmet>
        <title>{frontmatter.title} | Tomás Carlson</title>
        <meta name="description" content={frontmatter.subtitle} />
        <meta property="og:title" name="twitter:title" content={frontmatter.title + " | Tomás Carlson"} />
        <meta property="og:description" name="twitter:description" content={frontmatter.subtitle} />
        <meta name="twitter:image:alt" content={frontmatter.alt} />
        <meta property="og:image" name="twitter:image" content={frontmatter.jpg} />
      </Helmet>
      <h1 className="content-title project-title text-xl-left">{frontmatter.title}</h1>
      <h3 className="content-text pb-2 text-xl-left">{frontmatter.subtitle}</h3>
      <picture>
        <source srcSet={frontmatter.webp} type="image/webp" />
        <source srcSet={frontmatter.jpg} type="image/jpeg" />
        <img className="article-photo mb-3" src={frontmatter.jpg} alt={frontmatter.alt}/>
      </picture>
      <p className="content-date text-xl-left">{frontmatter.date} in {frontmatter.tags}</p>
      <div dangerouslySetInnerHTML={{ __html: articleStuff }} className="article-text text-left">
      </div>

    </BlogPost>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
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
`

