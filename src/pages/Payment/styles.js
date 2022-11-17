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
  display: flex;
  align-items: center;
  justify-content: center;

  > section {
    display: flex;
    flex-direction: column;

    .detailsDish {
      display: flex;

      > img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      > div > div {
        display: flex;
      }
    }

    .payment {

      > div {
        display: flex;
        flex-direction: row;

        > form  > div {
          display: flex;
          flex-direction: column;
            
            > div {
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  
`
export const Form = styled.form`

 
`