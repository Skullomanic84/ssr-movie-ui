import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle `

:root {
    --maxWidth: 1440px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}


*,
*::before,
*::after {
  box-sizing: border-box;
}


body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--white);
        }

    h3 {
        font-size: 1.1.rem;
        font-weight: 600;
        }

    p {
        font-size: 1rem;
        color: var(--white);
        }


    input,
    button,
    textarea,
    select {
    font: inherit;
        }

}

`
