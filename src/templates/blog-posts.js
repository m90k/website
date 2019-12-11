import React from "react"
import { graphql } from "gatsby"

const blogPosts = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <h1>{post.frontmatter.postTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        postTitle
        title
      }
    }
  }
`

export default blogPosts
