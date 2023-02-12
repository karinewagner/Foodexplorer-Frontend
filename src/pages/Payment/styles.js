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
  display: flex;
  align-self: center;
  justify-content: center;

  > a {
    font-weight: 400;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE1};

    padding: 0 .5rem;
    opacity: 0.8;

      &:hover{
        opacity: 1;
      }
    } 

  > section {
    display: flex;
    flex-direction: column;
    padding: 1rem 6rem;

    font-family: 'Poppins', sans-serif;
    
    > h2 {
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    .detailsDish {
      display: flex;
      gap: 2rem;
      margin: 1rem 0;

      > img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }

      > div {
        p {
          font-size: 1.8rem;
          line-height: 2.4rem;
        }
        
        > button {
          font-size: 1.6rem;
          padding: .5rem;
          margin-top: 1rem;
        }
      }
    }

    > h3 {
      font-size: 3.2rem;
      font-weight: 500;
      margin: 2rem auto;
    }

    .payment {
      display: flex;
      flex-direction: column;
      align-self: center;
      align-items: center;
      gap: 4rem;

      border: 1px solid gray;

      > div {
        display: flex;
        
        > p {
          font-size: 2.4rem;
          line-height: 2.8rem;
          
          padding: 4rem 8rem;
          border: 1px solid gray;
        }
      }

      > span {
        font-size: 2.4rem;
        line-height: 2.8rem;
        margin-bottom: 4rem;
      }
    }
  }  
`