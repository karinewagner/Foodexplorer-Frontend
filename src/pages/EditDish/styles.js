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
  height: 45rem;
  margin: 3.2rem 12rem 0;

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

  > h2 {
    font-weight: 500;
    font-size: 3.2rem;  

    margin: 2.4rem 0 3.2rem;
  }

  > form {
      display: grid;
      gap: 2rem;
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
    gap: 2rem;

    margin-bottom: .5rem;
  
    > button {        
      border: 1px solid #FFFFFF;
      border-radius: .5rem;
      
      font-weight: 500;
      font-size: 1.4rem;
      
      background-color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY};
      
      &:hover {
        background-color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY2};
      }

      > svg {
        margin-right: 1rem;
      }
    }
  }
`

export const Form = styled.form` 
  > section > h3 {
    margin-bottom: 1rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
  }

  > section > .input {
    display: flex;
    padding: 1rem;

    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

    background: transparent;
  }

`

export const ImageDishAdd = styled.div`
  position: relative;

  padding: .5rem 1rem;

  display: flex;
  align-items: center;
 
  > label {
    width: 30rem;
    height: 5rem;

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
    margin-left: 3rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_LABEL};
  }

`
