import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background: transparent;
  border: none;
  outline: 0;
  resize: none;
  padding: 16px 14px;
  
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

  border-radius: 5px;
  border: 1px solid #FFFFFF;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS_DARK.FONT_INPUT};
  }
`