import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 512px;
  padding: 56px 40px 40px;

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  position: relative;

  > button > svg { //icon heart
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .itemOfList {
    > img {
      margin-top: 24px
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
        gap: 10px;
      }
      > button {
        width: 96px;
      }
    }
  }
`