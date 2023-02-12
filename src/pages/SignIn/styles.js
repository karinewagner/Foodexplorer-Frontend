import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.9rem;
    margin: auto;

    > svg {
      width: 4.5rem;
      height: 4.5rem;
      color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_LOGO};
    }

    > h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 4.2rem;
    }
  }

  @media (max-width: 80rem) {
    display: flex;
    flex-direction: column;
  }  
`

export const Form = styled.form`
  width: 50rem;
  padding: 6.4rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_START};

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > label {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
      margin-top: 3.2rem;
      margin-bottom: .8rem;
    }
  }

  > button {
    margin: 3.2rem 0;
  }
`