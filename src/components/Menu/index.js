import React from "react"

import { MenuContainer, MenuList, MenuItens, MenuLinks } from "./styles"

import links from "./content"

const Menu = () => (
  <MenuContainer>
    <MenuList>
      {links.map((link, i) => {
        return (
          <MenuItens key={i}>
            <MenuLinks
              activeClassName="active"
              title={link.label}
              to={link.url}
            >
              {link.label}
            </MenuLinks>
          </MenuItens>
        )
      })}
    </MenuList>
  </MenuContainer>
)

export default Menu
