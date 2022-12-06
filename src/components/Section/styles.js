import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
  
    > h2 {
      margin: 40px 124px ;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 32px;

      color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 27px;
    }
`