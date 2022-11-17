import styled from 'styled-components'

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

  padding: 10px 16px;
  border-radius: 8px;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.COLORS_DARK.BUTTON_GRAY};
`