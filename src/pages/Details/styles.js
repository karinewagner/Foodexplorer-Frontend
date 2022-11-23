import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto;
  grid-template-areas: 
    'header'
    'content'
    'footer';

  .content {
    grid-area: content;
    overflow-y: auto;
  }

  .content::-webkit-scrollbar {
    width: 10px;
  }

  .content::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_LOGO};
    border-radius: 10px;
  }
`

export const Content = styled.div`
  margin: 30px 130px;

  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};

  > a {
    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 24px;

    > svg {
      height: 30px;
      width: 30px;
    }
  } 

  .dishDetails {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 42px;

    margin-top: 40px
  }

  .descriptionDetails {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    max-width: 600px;

    > h2 {
      font-weight: 500;
      font-size: 40px;
    }

    > p {
      font-weight: 400;
      font-size: 24px;
  
      margin-top: 8px;
    }

    > ul {
      list-style: none;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;

      margin: 26px 0 47px;

      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .amount {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      max-width: 400px;

      font-family: 'Roboto', sans-serif;

      > strong {
        font-weight: 400;
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS_DARK.VALUE_BLUE};
      }
      
      .plusOrMinus {
        display: flex;
        flex-direction: row;
        gap: 10px;
        
        > button > svg {
          width: 25px;
          height: 25px;
        }
        
        > span {
          font-weight: 700;
          font-size: 20px;
          color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
        }
      }

      > button {
        max-width: 110px;

        font-weight: 500;
        font-size: 14px;
      }
    }
  }
 
`
