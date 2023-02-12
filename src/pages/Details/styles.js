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
    width: 1rem;
  }

  .content::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS_DARK.BACKGROUND_LOGO};
    border-radius: 1rem;
  }
`

export const Content = styled.div`
  margin: 3rem auto;

  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};

  > a {
    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 2.4rem;

    > svg {
      height: 3rem;
      width: 3rem;
    }
  } 

  .dishDetails {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4.2rem;

    margin-top: 4rem;

    > img {
      width: 36rem;
      height: 36rem;
    }
  }

  .descriptionDetails {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > h2 {
      font-weight: 500;
      font-size: 4rem;
    }

    > p {
      font-weight: 400;
      font-size: 2.4rem;
  
      margin-top: .8rem;
    }

    > ul {
      list-style: none;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;

      margin: 2.6rem 0 4.7rem;

      > li {
        display: flex;
        gap: 2rem;
        align-items: center;
      }
    }

    .amount {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      max-width: 60rem;

      font-family: 'Roboto', sans-serif;

      > strong {
        width: 15rem;
        font-weight: 400;
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS_DARK.VALUE_BLUE};
      }
      
      .plusOrMinus {
        display: flex;
        flex-direction: row;
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
        max-width: 11rem;

        font-weight: 500;
        font-size: 1.4rem;
      }
    }
  }
 
`
