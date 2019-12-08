import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "./../components/Post"

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllPosts {
      allMarkdownRemark {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              postDescription
              postTitle
              background
            }
          }
        }
      }
    }
  `)

  const PostList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      {PostList.map(
        ({
          node: {
            frontmatter: {
              category,
              date,
              postDescription,
              postTitle,
              background,
            },
            timeToRead,
          },
        }) => (
          <Post
            slug={category}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            postTitle={postTitle}
            postDescription={postDescription}
          />
        )
      )}
    </Layout>
  )
}

export default BlogPage
