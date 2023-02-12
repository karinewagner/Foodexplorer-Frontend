import styled from 'styled-components'

export const Container = styled.div`
  width: 30rem;
  height: 51.2rem;
  padding: .5rem 4rem 1rem;

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: .8rem;

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
      width: 4rem;
    }
  }

  .itemOfList {

    > button {
      background-color: rgba(0, 0, 0, 0);
      border: none;

      > img {
        width: 22rem;
        height: 22rem;
      }
    }

    > h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
      
      margin-top: 1.6rem
    }
    
    > p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
      
      margin: 1.6rem 0;
    }

    > strong {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS_DARK.VALUE_BLUE};
      
      margin: 0 1.6rem 0;
    }
    
    
    .amount {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1.7rem;
      margin-bottom: 3.6rem;
      
      .plusOrMinus {
        width: 9.6rem;

        display: flex;
        align-items: center;
        gap: 1rem;

        > button {
          background-color: transparent;
          margin: 0;
          padding: 0;
          width: 2rem;
        }

        > span {
          font-size: 2rem;
        }
      }

      > button {
        width: 9.6rem;
      }
    }

    >.favorite-dish {
      font-size: 2rem;
      background: transparent;
      border: none;

      top: 0;
      right: 20rem;
    }

    >.edit-dish {
      font-size: 2rem;
      background: transparent;
      border: none;

      top: 0;
      left: 2rem;
    }
  }
`