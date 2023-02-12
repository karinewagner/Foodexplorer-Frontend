import styled from 'styled-components'

export const Container = styled.div`
  grid-area: footer;

  width: 100%;
  height: 8.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_NAV};
  
  padding: 2.8rem 10rem;
  font-family: 'Roboto', sans-serif;

  > div {
    display: flex;
    gap: 1.9rem;

    > svg {
      width: 3rem;
      height: 3rem;
      color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY2};
    }

    > h2 {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY2};
    }
  }

  > h3 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
  }
`