import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 19px;
    margin: auto;

    > svg {
      width: 45px;
      height: 45px;
      color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_LOGO};
    }
    
    > h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 42px;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

export const Form = styled.form`
  width: 500px;
  padding: 64px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_START};

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > label {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
      margin-top: 32px;
      margin-bottom: 8px;
    }
  }

  > button {
    margin: 32px 0;
  }

`