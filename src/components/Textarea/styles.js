import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;

  background: transparent;
  border: none;
  outline: 0;
  resize: none;
  padding: 1.6rem 1.4rem;
  
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

  border-radius: .5rem;
  border: 1px solid #FFFFFF;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS_DARK.FONT_INPUT};
  }
`