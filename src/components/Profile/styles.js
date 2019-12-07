import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8899a6;
`
export const ProfileLink = styled(Link)`
  color: #8899a6;
  transition: color 0.3s;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }
`

export const ProfileHeader = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileName = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
  text-align: center;
`

export const ProfileOccupation = styled.h2`
  font-size: 1.4rem;
  display: block;
  font-weight: 300;
  text-align: center;
`

export const ProfileBio = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4;
  text-justify: newspaper;
  text-align: center;
`
