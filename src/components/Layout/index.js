import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../Sidebar"
import Menubar from "./../Menubar"

import GlobalStyles from "./../../styles/global"
import { LayoutContainer, LayoutMain } from "./styles"

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
      <Menubar />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
