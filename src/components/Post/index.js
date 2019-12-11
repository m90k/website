import React from "react"
import PropTypes from "prop-types"

import {
  PostLink,
  PostContainer,
  PostTag,
  PostArticle,
  PostDate,
  PostTitle,
  PostDescription,
} from "./styles"

const Post = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  postTitle,
  postDescription,
}) => (
  <PostLink to={slug}>
    <PostContainer>
      <PostTag background={background}>{category}</PostTag>
      <PostArticle>
        <PostDate>
          {date} * {timeToRead} de Leitura
        </PostDate>
        <PostTitle>{postTitle}</PostTitle>
        <PostDescription>{postDescription}</PostDescription>
      </PostArticle>
    </PostContainer>
  </PostLink>
)

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
}

export default Post
