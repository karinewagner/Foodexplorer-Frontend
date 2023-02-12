import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 10.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_NAV};
  
  padding: 2.8rem 10rem;
  font-family: 'Roboto', sans-serif;

  > h2 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
  }

  .btnMyRequest {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;

    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
    border: none;
    background: none;

    max-width: 20rem;
  }

  > div { 
    max-width: 40rem;
  }

  > .btnRequest {
    max-width: 21.6rem;
      
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
    
    > svg {
      margin-right: 1rem;
    }
  }

  .btnSignOut {
    background-color: transparent;
    margin: 0;
    padding: 0;
    width: 4rem;
  }
`

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.9rem;

  > svg {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_LOGO};
  }

  > h1 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.9rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
  }
`