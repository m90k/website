import styled from "styled-components"

import { Link } from "gatsby"

export const MenubarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100vh;
  width: 3.75rem;
  right: 0;
  padding: 0.8rem 0;
  align-items: center;
  background-color: #192734;
`

export const MenubarTop = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenubarBottom = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenubarLink = styled(Link)`
  display: block;
`

export const MenubarItens = styled.span`
  cursor: pointer;
  color: #8899a6;
  width: 2rem;
  height: 2rem;
  position: relative;
  padding: 1.1rem;

  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #1fa1f2;
  }
`
