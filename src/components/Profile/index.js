import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  ProfileContainer,
  ProfileLink,
  ProfileHeader,
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
        <ProfileHeader>
          <Avatar />
          <ProfileName>
            {title}
            <ProfileOccupation>{pro}</ProfileOccupation>
          </ProfileName>
        </ProfileHeader>

        <ProfileBio>{description}</ProfileBio>
      </ProfileLink>
    </ProfileContainer>
  )
}

export default Profile
