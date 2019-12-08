import styled from "styled-components"

import { Link } from "gatsby"

export const PostLink = styled(Link)`
  display: flex;
  color: #8899a6;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }
`

export const PostContainer = styled.section`
  padding: 2rem 3rem;
  width: 100%;
  align-items: center;
  display: flex;
`

export const PostTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  min-height: 90px;
  text-transform: uppercase;
  color: #fff;
  border-radius: 50%;
  background: ${props => (props.background ? props.background : "#1fa19c")};
  font-size: 1.2rem;
  font-weight: 700;
`

export const PostArticle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`

export const PostDate = styled.time`
  font-size: 1rem;
`

export const PostTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
