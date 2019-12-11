import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "./../components/Post"

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllPosts {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            timeToRead
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              postDescription
              postTitle
              background
            }
            fields {
              slug
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
            fields: { slug },
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
            slug={slug}
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
