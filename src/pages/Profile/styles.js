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
      height: 80px;

      padding: 25px 50px;

      font-size: 20px;
      color: white;
    }
  }
`

export const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;

  padding: 10px 40px;

  border-radius: 20px;
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
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
      margin: 32px 0 12px;
    }
  }

  > button {
    margin: 32px 0;
  }
`