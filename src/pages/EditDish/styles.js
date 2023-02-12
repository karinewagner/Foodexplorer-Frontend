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
  height: 450px;
  margin: 32px 123px 0;

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

  > h2 {
    font-weight: 500;
    font-size: 32px;  

    margin: 24px 0 32px;
  }

  > form {
      display: grid;
      gap: 20px;
      grid-template-areas: 
      'img name name categ'
      'ingr ingr ingr value'
      'desc desc desc desc'
      'btns btns btns btns';

    > section:nth-child(1) {
      grid-area: img;
    }
    
    > section:nth-child(2) {
      grid-area: name;
    }

    > section:nth-child(3) {
      grid-area: categ;
    }

    > section:nth-child(4) {
      grid-area: ingr;
    }
    
     > section:nth-child(5) {
      grid-area: value;
    }
    
    > section:nth-child(6) {
      grid-area: desc;
    }

    > section:nth-child(7) {
      grid-area: btns;
    }
  }

  .buttons {
    width: 100%;
  
    display: flex;
    gap: 20px;

    margin-bottom: 5px;
  
    > button {        
      border: 1px solid #FFFFFF;
      border-radius: 5px;
      
      font-weight: 500;
      font-size: 14px;
      
      background-color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY};
      
      &:hover {
        background-color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY2};
      }

      > svg {
        margin-right: 10px;
      }
    }
  }
`

export const Form = styled.form` 
  > section > h3 {
    margin-bottom: 10px;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
  }

  > section > .input {
    display: flex;
    padding: 10px;

    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

    background: transparent;
  }

`

export const ImageDishAdd = styled.div`
  position: relative;

  padding: 5px 10px;

  display: flex;
  align-items: center;
 
  > label {
    width: 300px;
    height: 50px;

    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: absolute;
    cursor: pointer;

    > input {
      display: none;
      border: 1px solid red;
    }
  }

  > span {
    margin-left: 30px;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
  }

`
