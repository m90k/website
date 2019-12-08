import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Post from "./../components/Post"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <Post />
  </Layout>
)

export default BlogPage
