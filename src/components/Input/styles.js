import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: .5rem;
  border: 1px solid #FFFFFF;

  > input {
    height: 4.8rem;
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    padding: 1.6rem 1.4rem;

    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
    background: transparent;
    border: none;
    outline: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS_DARK.FONT_INPUT};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
  
`