import theme from 'styled-theming'
import styled from 'styled-components';

export const backgroundColor = theme("theme", {
    light: "#fff",
    dark: "#2d2d2d",
  });
  
  export const textColor = theme("theme", {
    light: "#000",
    dark: "#fff",
  });
  
 export const Container = styled.div`
    
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-family: san-serif;
    background-color: ${backgroundColor};
    color: ${textColor};
  `;