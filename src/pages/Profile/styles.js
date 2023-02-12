import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .btn {
    display: flex;
    justify-content: center;
    
    > a {
      display: flex;
      align-items: center;

      width: 100%;
      height: 8rem;

      padding: 2.5rem 5rem;

      font-size: 2rem;
      color: white;
    }
  }
`

export const Form = styled.form`
  max-width: 50rem;
  margin: 0 auto;

  padding: 1rem 4rem;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_START};

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > label {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
      margin: 3.2rem 0 1.2rem;
    }
  }

  > button {
    margin: 3.2rem 0;
  }
`