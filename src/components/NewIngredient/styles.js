import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100px;
  height: 28px;
  padding: 0 10px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS_DARK.BUTTON_GRAY};

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme, isNew }) => isNew ? theme.COLORS_DARK.FONT_INPUT : theme.COLORS_DARK.FONT_WHITE};
  
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS_DARK.FONT_INPUT}` : "none"};
  border-radius: 8px;
  margin-right: 10px;
  
  > input {
    width: 100%;
    height: 28px;

    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS_DARK.FONT_INPUT};
    }
  }

  > button {
    border: none;
    background: none;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS_DARK.FONT_INPUT : theme.COLORS_DARK.FONT_WHITE};
  }
`