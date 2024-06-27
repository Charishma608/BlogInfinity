import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.bg};
    padding: 0;
    margin: 0;
    transition: background-color 0.1s ease;
  }
`;

const lightTheme = {
  bg: "#FCF2EB",
  sun: "#EFB099",
  moon: "#D6C2B5",
  shadow: "#cac2bc",
  light: "#fff"
};

const darkTheme = {
  bg: "#396273",
  sun: "#8DC4D1",
  moon: "#fff",
  shadow: "#2e4e5c",
  light: "#4d7281"
};

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7rem;
  height: 3.5rem;
  margin-left: auto;
  border-radius: 30px;
  border: 3px solid ${({ theme }) => theme.bg};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  background: none;
  box-shadow: -3px -3px 3px ${({ theme }) => theme.light},
    3px 3px 3px ${({ theme }) => theme.shadow},
    inset 2px 2px 3px ${({ theme }) => theme.shadow},
    inset 2px 2px 20px ${({ theme }) => theme.shadow};

  .switch {
    position: absolute;
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    transform: ${({ lightTheme }) =>
      lightTheme ? "translateX(0)" : "translateX(3.2rem)"};
    transition: transform 0.3s, background-color 0.1s ease;
    background: ${({ theme }) => theme.bg};

    box-shadow: inset 2px 2px 2px ${({ theme }) => theme.light},
      5px 6px 6px ${({ theme }) => theme.shadow};
  }

  .sun,
  .moon {
    position: relative;
    border-radius: 50%;
    height: 2.4rem;
    width: 2.4rem;
    padding: 7px;
    z-index: 9;
  }

  .sun path {
    fill: ${({ theme }) => theme.sun};
    opacity: ${({ lightTheme }) => (lightTheme ? "1" : "0.6")};
  }

  .moon path {
    fill: ${({ theme }) => theme.moon};
    opacity: ${({ lightTheme }) => (lightTheme ? "0.6" : "1")};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <div className="switch"></div>
      <svg
        className="sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fill="#FFFFFF"
          d="M10 15a5 5 0 100-10 5 5 0 000 10z"
        />
        <circle
          cx="10"
          cy="10"
          r="6"
          stroke="#FFFFFF"
          fill="#FFFFFF"
          stroke-width="2"
        />
      </svg>
      <svg
        className="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fill="#FFFFFF"
          d="M16 10.6A6 6 0 108.4 3 8 8 0 0116 10.6z"
        />
        <circle
          cx="8.4"
          cy="11.6"
          r="5.2"
          stroke="#FFFFFF"
          fill="#FFFFFF"
          stroke-width="2"
        />
      </svg>
    </ToggleContainer>
  );
};

export default Toggle;
