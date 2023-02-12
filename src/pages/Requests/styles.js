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
  width: 80%;

  margin: 0 auto 3.5rem;

  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
  
  > div {
    display: flex;
    justify-content: space-between;

    margin: 3.5rem 0;

    > a {
    display: flex;
    align-items: center;

    font-weight: 400;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE1};

    padding: 0 .5rem;
    opacity: 0.8;

      &:hover{
        opacity: 1;
      }
    } 
    
    h2 {
      font-weight: 500;
      font-size: 3.2rem;
    }
  }
  
  > table {
    width: 100%;
    
    border: 2px solid gray;
    border-radius: 1rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    
    > thead > tr > th{
      border-left: 2px solid gray;

      padding: 2rem;
      min-width: 10rem;      

      text-align: left;
      
      font-weight: 700;
      font-size: 1.6rem;
    }

    > tbody > tr > th {
      border-left: 2px solid gray;
      border-top: 2px solid gray;
      
      padding: 2rem;
      text-align: left;
      
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
    }

    > thead > tr > th:nth-child(1) {
      border-left: none;
    }
    
    > tbody > tr > th:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 1rem;

      border-left: none;

      > .statusCircle {
        background-color: blue;
        border-radius: 50%;
        width: .8rem;
        height: .8rem;
      }
    }
  } 
`
