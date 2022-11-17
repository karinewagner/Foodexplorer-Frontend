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
    background-color: #065E7C;
    border-radius: 10px;
  }
`

export const Content = styled.div`
  width: 80%;

  margin: 0 auto 35px;

  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE2};
  
  > h2 {
    margin: 35px 0;
    
    font-weight: 500;
    font-size: 32px;
  }
  
  > table {
    width: 100%;
    
    border: 2px solid gray;
    border-radius: 10px;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    
    > thead > tr > th{
      border-left: 2px solid gray;

      padding: 20px;
      min-width: 100px;      

      text-align: left;
      
      font-weight: 700;
    }

    > thead > tr > th:nth-child(1) {
      border-left: none;
    }
    
    > tbody > tr > th:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 10px;

      border-left: none;

      > .statusCircle {
        background-color: blue;
        border-radius: 50%;
        width: 8px;
        height: 8px;
      }
    }

    > tbody > tr > th {
      border-left: 2px solid gray;
      border-top: 2px solid gray;
      
      padding: 20px;
      text-align: left;
      
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
    }
  }

 
`
