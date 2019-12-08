import React from "react"

import {
  MenubarContainer,
  MenubarTop,
  MenubarBottom,
  MenubarLink,
  MenubarItens,
} from "./styles"

import { Home } from "styled-icons/fa-solid/Home"
import { SearchAlt as Search } from "styled-icons/boxicons-regular/SearchAlt"

import { GridAlt as Grid } from "styled-icons/boxicons-regular/GridAlt"
import { Lightbulb } from "styled-icons/fa-solid/Lightbulb"
import { ArrowUpOutline as IconUp } from "styled-icons/typicons/ArrowUpOutline"
const Menubar = () => (
  <MenubarContainer>
    <MenubarTop>
      <MenubarLink to="/" title="Home">
        <MenubarItens>
          <Home height="36" width="36" />
        </MenubarItens>
      </MenubarLink>

      <MenubarLink to="/search/" title="busca">
        <MenubarItens>
          <Search height="36" width="36" />
        </MenubarItens>
      </MenubarLink>
    </MenubarTop>

    <MenubarBottom>
      <MenubarItens title="Light Mode">
        <Lightbulb width="36" height="36" />
      </MenubarItens>
      <MenubarItens title="Grid">
        <Grid height="36" width="36" />
      </MenubarItens>
      <MenubarItens title="Topo">
        <IconUp height="36" width="36" />
      </MenubarItens>
    </MenubarBottom>
  </MenubarContainer>
)

export default Menubar
