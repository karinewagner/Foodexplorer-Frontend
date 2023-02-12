import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 512px;
  padding: 5px 40px 10px;

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;

  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;

  .btns { 
    display: flex;
    justify-content: space-between;

    > button {
      background-color: transparent;
      margin: 0;
      padding: 0;
      width: 40px;
    }
  }

  .itemOfList {

    > button {
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }

    > h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
      
      margin-top: 16px
    }
    
    > p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
      
      margin: 16px 0;
    }

    > strong {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS_DARK.VALUE_BLUE};
      
      margin: 0 16px 0;
    }
    
    
    .amount {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 17px;
      margin-bottom: 36px;
      
      .plusOrMinus {
        width: 96px;

        display: flex;
        align-items: center;
        gap: 10px;

        > button {
          background-color: transparent;
          margin: 0;
          padding: 0;
          width: 20px;
        }

        > span {
          font-size: 20px;
        }
      }

      > button {
        width: 96px;
      }
    }

    >.favorite-dish {
      font-size: 20px;
      color: yellow; // -> ajustar a cor
      background: transparent;
      border: none;

      top: 0;
      right: 20px;
    }

    >.edit-dish {
        font-size: 20px;
        color: yellow; // -> ajustar a cor
        background: transparent;
        border: none;

        top: 0;
        left: 20px;
    }
  }
`