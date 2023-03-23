import { createGlobalStyle } from 'styled-components';
import Electrolize from '../assets/fonts/Electrolize-Regular.ttf';
import { media } from './mediaQueries';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    button {
         cursor: pointer;
         font-family: "Electrolize-Regular";
    }

    ul {
         list-style: none;
      
    }
    
    html { 
        font-size: 62.5%;
        ${media.mobile}{
        font-size: 50%;
        }
    } 

    body {
        font-size: 1.6em; 
        font-family: "Electrolize-Regular";
    }

        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: black;
        -webkit-box-shadow: 0 0 0px 1000px none  ;
        transition: background-color 5000s ease-in-out 0s;
    }

    @font-face {
    font-family: 'Electrolize-Regular';
    src: url(${Electrolize}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
    }

`;

export const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(21rem, 13vw) auto;
  grid-template-rows: 9rem auto;

  ${media.mobile} {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 8rem auto 8.7rem;
  }
`;

export default GlobalStyle;
