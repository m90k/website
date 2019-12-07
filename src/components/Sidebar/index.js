import React from "react"
import Profile from "./../Profile"
import SocialLinks from "./../SocialLinks"
import Menu from "./../Menu"
import { SidebarContainer } from "./styles"
const Sidebar = () => (
  <SidebarContainer>
    <Profile />
    <SocialLinks />
    <Menu />
  </SidebarContainer>
)

export default Sidebar
