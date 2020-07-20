import styled, { createGlobalStyle } from 'styled-components';
import { colours } from '../../tokens';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap');

    body {
        margin: 0;
        background-color: ${colours.lightGrey};
    }

    h1 {
        font-family: 'Raleway', sans-serif;
    }

    p {
        font-family: 'Open Sans', sans-serif;
    }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 1.5rem;
`;

// font-family: 'Open Sans', sans-serif;
// font-family: 'Raleway', sans-serif;
