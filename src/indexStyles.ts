import { createGlobalStyle } from 'styled-components';
import { device } from './config/display';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: "Century Gothic", 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
	  text-decoration: none;
  }
  h1 {
		font-size: 3rem;
		margin: 0;
		letter-spacing: 1rem;
	}
	h2 {
		font-size: 2rem;
		letter-spacing: 0.5rem;
		filter: brightness(80%);
	}
	h3 {
		font-size: 1.5rem;
		letter-spacing: 0.3rem;
		filter: brightness(60%);
	}

	@media ${device.tablet} {
		h1 {
			font-size: 2rem;
		}
		h2 {
			font-size: 1.5rem;
		}
		h3 {
			font-size: 1rem;
		}
	}
	
	@media ${device.mobileM} {
		h1 {
			font-size: 1.5rem;
		}
		h2 {
			font-size: 1rem;
		}
		h3 {
			font-size: 0.8rem;
		}
	}
`;
