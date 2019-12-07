import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AvatarImage } from "./styles"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <AvatarImage fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
