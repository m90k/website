import styled from "styled-components"
import { Link } from "gatsby"

export const MenuContainer = styled.nav`
  width: 100%;
`

export const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`
export const MenuItens = styled.li`
  padding: 0.5rem 0;
  width: 100%;
  color: #fff;
  .active {
    color: #1fa1f2;
  }

  &:hover {
    background-color: #eee;
  }
`

export const MenuLinks = styled(Link)`
  color: #8899ac;
  transition: color 0.5s;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }
`
