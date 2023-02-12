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
  width: 100%;
  height: 100vh;
  
  > main {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 70%;
    margin: 5rem auto;
    
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: .8rem;
    
    > img {
      height: 35rem;
      width: 35rem;
    }

    > div {
      display: block;
      justify-content: center;
      align-items: center;

      > h2 {
        font-weight: 500;
        font-size: 4rem;
      }
      
      > p {
        font-weight: 400;
        font-size: 1.6rem;
      }
    }
  } 
`
