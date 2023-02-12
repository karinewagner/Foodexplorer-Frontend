import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
  
    > h2 {
      margin-inline-start: 10%;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;

      color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 2.7rem;
      margin: 5rem auto;
    }
`