import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
`