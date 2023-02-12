import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 49px;

  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS_DARK.BUTTON_RED};
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

  border: 0;
  padding: 0 16px;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 500;

  &:disabled {
    opacity: 0.5;
  }
`