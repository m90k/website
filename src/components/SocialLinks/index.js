import React from "react"

import {
  SocialIconsContainer,
  SocialIconsList,
  SocialIconsItens,
  SocialIconsLinks,
  IconContainer,
} from "./styles"

import Icons from "./icons"
import links from "./content"

const SocialLinks = () => (
  <SocialIconsContainer>
    <SocialIconsList>
      {links.map((link, i) => {
        console.log(i)
        //pega os Icones Pela Sua label
        const Icon = Icons[link.label]
        console.log(Icon)
        return (
          <SocialIconsItens key={i}>
            <SocialIconsLinks title={link.label} href={link.url}>
              <IconContainer>
                <Icon />
              </IconContainer>
            </SocialIconsLinks>
          </SocialIconsItens>
        )
      })}
    </SocialIconsList>
  </SocialIconsContainer>
)

export default SocialLinks
