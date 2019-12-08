import React from "react"

import {
  PostLink,
  PostContainer,
  PostTag,
  PostArticle,
  PostDate,
  PostTitle,
  PostDescription,
} from "./styles"

const Post = () => (
  <PostLink to="/slug/">
    <PostContainer>
      <PostTag background="blue">Js</PostTag>
      <PostArticle>
        <PostDate>22/02/1990</PostDate>
        <PostTitle>Title</PostTitle>
        <PostDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          necessitatibus vitae in nihil porro commodi laboriosam aspernatur,
          minima nam illum facilis veniam amet! Incidunt ea,tempore in autem
          officiis magnam?
        </PostDescription>
      </PostArticle>
    </PostContainer>
  </PostLink>
)

export default Post
