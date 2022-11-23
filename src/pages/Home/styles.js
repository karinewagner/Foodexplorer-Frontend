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
  width: 100%;
  
  > main {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100hw;
    height: 260px;
    margin: 164px;
    
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 8px;
    
    > img {
      margin-top: -145px;
      margin-left: -145px;
    }

    > div {    
      > h2 {
        font-weight: 500;
        font-size: 40px;
      }
      
      > p {
        font-weight: 400;
        font-size: 16px;
      }
    }
  }

  > section {
    display: flex;
    flex-direction: column;
  

    > h2 {
      margin: 40px 124px ;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 32px;

      color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 27px;
    }
  }
  
`
