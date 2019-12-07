import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  ProfileContainer,
  ProfileLink,
  ProfileName,
  ProfileOccupation,
  ProfileBio,
} from "./styles"
import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, pro, description },
    },
  } = useStaticQuery(graphql`
    query mySiteMetadata {
      site {
        siteMetadata {
          title
          pro
          description
        }
      }
    }
  `)

  return (
    <ProfileContainer>
      <ProfileLink>
        <Avatar />
        <ProfileName>{title}</ProfileName>
        <ProfileOccupation>{pro}</ProfileOccupation>
        <ProfileBio>{description}</ProfileBio>
      </ProfileLink>
    </ProfileContainer>
  )
}

export default Profile
