import styled from 'styled-components'

export const Container = styled.div`
  grid-area: footer;

  width: 100%;
  height: 84px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_NAV};
  
  padding: 28px 100px;
  font-family: 'Roboto', sans-serif;

  > div {
    display: flex;
    gap: 19px;

    > svg {
      width: 30px;
      height: 30px;
      color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY2};
    }

    > h2 {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 25px;
      color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY2};
    }
  }

  > h3 {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
  }
`