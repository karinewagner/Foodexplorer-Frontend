import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 5px;
  border: 1px solid #FFFFFF;

  > input {
    height: 48px;
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding: 16px 14px;

    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};
    background: transparent;
    border: none;
    outline: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS_DARK.FONT_INPUT};
    }
  }

  > svg {
    margin-left: 16px;
  }
  
`