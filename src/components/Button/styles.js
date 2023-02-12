import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 4.9rem;

  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS_DARK.BUTTON_RED};
  color: ${({ theme }) => theme.COLORS_DARK.FONT_WHITE};

  border: 0;
  padding: 0 1.6rem;
  border-radius: .5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;

  &:disabled {
    opacity: 0.5;
  }
`