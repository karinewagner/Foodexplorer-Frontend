import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_NAV};
  
  padding: 28px 100px;
  font-family: 'Roboto', sans-serif;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 19px;
  }

  > h1 {
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
  }

  > h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
  }

  > div { //input
    max-width: 400px;
  }

  > .btnRequest {
    max-width: 216px;
    
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
  }
`